import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../config/Config'; // Import your BASE_URL config
import "./BlogDetail.css";
const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${BASE_URL}blog/blogposts/${id}/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) return <div className="text-center loading my-5">Loading...</div>;
  if (error) return <div className="text-center text-danger error my-5">Error: {error}</div>;

  if (!blog) {
    return (
      <div className="text-center my-5">
        <p>No blog found.</p>
      </div>
    );
  }

  return (
    <div className="hero-section" >
      <div className="hero-overlay">
        <img src={blog.image} alt="" />
        <h1 className="hero-title">{blog.title}</h1>
      </div>
      <div className="blog-content">
        <p>{blog.excerpt}</p>
        <p style={{fontStyle:'italic', opacity:'0.5', fontSize:'14px'}}>Published on: {new Date(blog.created_at).toLocaleDateString()}</p>
        </div>
    </div>
  );
};

export default BlogDetail;
