import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../config/Config';
import './BlogDetailGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

const BlogDetailGrid = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const response = await fetch(`${BASE_URL}blog/blogposts/${id}/`);
      const data = await response.json();
      setBlog(data);
    };
    fetchBlogDetail();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail-grid">
      <div className="section-title">
        <h1>{blog.title}</h1>
      </div>
      <div className="section-info">
        <p>
          <FontAwesomeIcon icon={faUserAlt} style={{ marginRight: '5px' }} /> {blog.user}
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px' }} />
          {format(new Date(blog.created_at), 'MMMM d, yyyy \'at\' hh:mm:ss a')}
        </p>
      </div>
      {Object.entries(blog.sections_by_type).map(([sectionType, items], index) => (
        <div key={index} className={`section-${sectionType}`}>
          {items.map((item, idx) => (
            <div key={idx} className="section-item">
              {sectionType === 'title' && <h1>{item.content}</h1>}
              {sectionType === 'content' && <p>{item.content}</p>}
              {sectionType === 'excerpt' && <p className="excerpt">{item.content}</p>}
              {sectionType === 'image' && <img src={item.url} alt="Blog" />}
              {sectionType === 'video' && <video src={item.url} controls />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlogDetailGrid;
