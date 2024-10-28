import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';
import { BASE_URL } from '../config/Config';

function BlogDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${BASE_URL}articles/feature-news/${id}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    
    fetchArticle();
  }, [id]);

  const formattedDate = (date) => new Date(date).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="blog-detail">
      {article ? (
        <>
          <header className="article-header">
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <p className="author">
                <i className="fa fa-user"></i> {article.author || 'Unknown Author'}
              </p>
              <p className="date-posted">
                <i className="fa fa-calendar"></i> {formattedDate(article.created_at)}
              </p>
            </div>
          </header>

          <div className="article-image-container">
            <img src={article.image} alt={article.title} className="article-image" />
          </div>

          <section className="article-content">
            <h2 className="subtitle">{article.subtitle}</h2>
            <p className="description">{article.description}</p>
          </section>

          {/* Loop through additional sections if they exist */}
          {[2, 3, 4, 5].map((num) => (
            article[`title${num}`] && (
              <section key={num} className="article-section">
                <h2 className="section-title">{article[`title${num}`]}</h2>
                <h3 className="section-subtitle">{article[`subtitle${num}`]}</h3>
                <div className="section-image-container">
                  <img src={article[`image_section${num}`]} alt={article[`title${num}`]} className="section-image" />
                </div>
                <p className="section-description">{article[`description${num}`]}</p>
              </section>
            )
          ))}

          {article.additional_images && (
            <div className="additional-images">
              <h3>Additional Images</h3>
              {article.additional_images.map((img, index) => (
                <img key={index} src={img} alt={`Additional ${index + 1}`} className="additional-image" />
              ))}
            </div>
          )}

          {article.video && (
            <div className="article-video">
              <h3>Related Video</h3>
              <iframe 
                width="100%" 
                height="400" 
                src={article.video} 
                title="Related video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              ></iframe>
            </div>
          )}
        </>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
}

export default BlogDetail;
