import React, { useState, useEffect } from 'react';
import './Blogs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../config/Config';
import { format } from 'date-fns';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetch(`${BASE_URL}blog/blogposts/`)
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(blogPosts.length / postsPerPage)) setCurrentPage(currentPage + 1);
  };

  const renderBlogPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    return blogPosts.slice(startIndex, endIndex).map((post) => (
      <div key={post.id} className="row blog-container mb-4">
        {post.image && (
          <div className="media-figure">
            <img src={post.image} alt="Blog" className="media-content img-fluid" />
          </div>
        )}
        <div className="content">
          <h3 className="blog-title">
            <a href={`/blog/${post.id}`} className="blog-title-link">{post.title}</a>
          </h3>
          <p className="blog-excerpt">
            {post.excerpt.length > 150 ? `${post.excerpt.substring(0, 150)}...` : post.excerpt}
          </p>
          <p className="blog-date">
            <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px', color: 'grey' }} />
            {format(new Date(post.created_at), 'MMMM d, yyyy \'at\' hh:mm:ss a')}
          </p>
          <button 
              className="read-more" 
              onClick={() => window.location.href = `/blog/${post.id}`} 
            >
              Read More &nbsp; <FaArrowRight fontSize={15} />
            </button>
        </div>
      </div>
    ));
  };

  return (
    <section className="blog-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading2">Latest News & Events</h2>
          </div>
        </div>
        <div className="row" id="blog-container">
          {renderBlogPosts()}
        </div>
        <div className="pagination-controls text-center mt-4">
          <button
            className="pagination-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ❮
          </button>
          <span className="mx-3">{`Page ${currentPage} of ${Math.ceil(blogPosts.length / postsPerPage)}`}</span>
          <button
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(blogPosts.length / postsPerPage)}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
