import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config/Config'; // Import your BASE_URL config
import './Blogs.css';

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Initially show 6 blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}blog/blogposts/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
  };

  if (loading) return <div className="text-center my-5">Loading...</div>;
  if (error) return <div className="text-center text-danger my-5">Error: {error}</div>;

  if (blogs.length === 0) {
    return (
      <div className="text-center my-5">
        <FaNewspaper size={60} className="text-muted mb-3" />
        <p>No blogs found. Check back later for exciting updates!</p>
      </div>
    );
  }

  return (
    <div className="container blog-container mt-5">
      {/* Header Section */}
      <section className="text-center mb-5">
        <h2 className="" style={{ fontSize: '26px', fontWeight: '600' }}>Stay Informed With Our Latest Blogs</h2>
        <p className="lead">Discover insights, stories, and news from our team.</p>
      </section>

      {/* Blog Cards Grid */}
      <div className="grid-container">
        {blogs.slice(0, visibleBlogs).map((blog, index) => (
          <div className="blog-card" key={index}>
            {blog.image && !blog.video && (
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
            )}
            {blog.video && (
              <video controls className="card-img-top" style={{ height: '200px', objectFit: 'cover' }}>
                <source src={blog.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{blog.title}</h5>

              {/* Conditionally render the excerpt and 'Read More' */}
              <p className="card-text text-truncate-multi">
                {blog.excerpt.length > 200 ? blog.excerpt.substring(0, 200) + "..." : blog.excerpt}
              </p>
              <br />
              <Link to={`/blog/${blog.id}`} className="mt-auto btn btn-primary">
              <button>
                Read More 

              </button>
              </Link>
            </div>
            <div className="card-footer text-muted">
              <small>Published on: {new Date(blog.created_at).toLocaleDateString()}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBlogs < blogs.length && (
        <div className="text-center mt-4">
          <button onClick={loadMoreBlogs} className="btn btn-secondary">
            Load More Blogs
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
