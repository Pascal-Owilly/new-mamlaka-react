import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { BASE_URL } from '../config/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

function Blog() {
  const [mainArticle, setMainArticle] = useState(null);
  const [trendingNews, setTrendingNews] = useState([]);
  const [featureNews, setFeatureNews] = useState([]);
  const [events, setEvents] = useState([]);
  
  // State for pagination
  const [trendingPage, setTrendingPage] = useState(1);
  const [featurePage, setFeaturePage] = useState(1);
  const [eventsPage, setEventsPage] = useState(1);

  const ITEMS_PER_PAGE = 4; // Change this number based on how many items you want per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainResponse, trendingResponse, featureResponse, eventsResponse] = await Promise.all([
          fetch(`${BASE_URL}articles/main-article`),
          fetch(`${BASE_URL}articles/trending-news`),
          fetch(`${BASE_URL}articles/feature-news`),
          fetch(`${BASE_URL}articles/events`),
        ]);

        const mainData = await mainResponse.json();
        const trendingData = await trendingResponse.json();
        const featureData = await featureResponse.json();
        const eventsData = await eventsResponse.json();

        console.log('Main Article:', mainData);
        console.log('Trending News:', trendingData);
        console.log('Feature News:', featureData);
        console.log('Events:', eventsData);

        setMainArticle(mainData[0]); // Assuming mainData is an array
        setTrendingNews(trendingData);
        setFeatureNews(featureData);
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate pagination details
  const totalTrendingPages = Math.ceil(trendingNews.length / ITEMS_PER_PAGE);
  const totalFeaturePages = Math.ceil(featureNews.length / ITEMS_PER_PAGE);
  const totalEventsPages = Math.ceil(events.length / ITEMS_PER_PAGE);

  const handleTrendingPageChange = (direction) => {
    setTrendingPage((prev) => Math.min(Math.max(prev + direction, 1), totalTrendingPages));
  };

  const handleFeaturePageChange = (direction) => {
    setFeaturePage((prev) => Math.min(Math.max(prev + direction, 1), totalFeaturePages));
  };

  const handleEventsPageChange = (direction) => {
    setEventsPage((prev) => Math.min(Math.max(prev + direction, 1), totalEventsPages));
  };

  const renderTrendingNews = () => {
    const startIndex = (trendingPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return trendingNews.slice(startIndex, endIndex).map((news, index) => (
      <div key={index} className="trending-item">
        <img src={news.image } alt={`Trending ${index + startIndex + 1}`} />
        <p>{news.title || 'Trending Title'}</p>
      </div>
    ));
  };

  const renderFeatureNews = () => {
    const startIndex = (featurePage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return featureNews.slice(startIndex, endIndex).map((feature, index) => (
      <div key={index} className="feature-item">
        <img src={feature.image || '/path-to-placeholder.jpg'} alt={`Feature ${index + startIndex + 1}`} />
        <h4>{feature.title || 'Feature Title'}</h4>
        <p>{feature.description || 'Feature description here.'}</p>
        <div className="meta">
          <span className="created-at">
            <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(feature.created_at).toLocaleDateString()}
          </span>
          <span className="posted-by">
            <FontAwesomeIcon icon={faUser} /> {feature.author || 'Unknown Author'}
          </span>
        </div>
        <button 
          className="read-more-button" 
          onClick={() => window.location.href = `/blog/${feature.id}`}
        >
          Read More
        </button>
      </div>
    ));
  };


  const renderEvents = () => {
    const startIndex = (eventsPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return events.slice(startIndex, endIndex).map((event, index) => (
      <div key={index} className="event-item">
        <div className="event-image-container">
          <img src={event.image || '/path-to-placeholder.jpg'} alt={event.title || 'Event'} />
        </div>
        <div className="event-details">
          <h4>{event.title || 'Event Title'}</h4>
          <p>Date: {event.date || 'Event Date'}</p>
          <p>Location: {event.location || 'Event Location'}</p>
          <p>{event.description || 'Event description here.'}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="blog-page">
      <section className="news-events">
        <h1>NEWS & EVENTS</h1>
      </section>

      {/* Main Content */}
      <div className="content">
        {/* Main News Section */}
        <section className="main-news">
          <div className="main-article">
            {mainArticle ? (
              <div className="image-container">
                <img src={mainArticle.image || '/path-to-placeholder.jpg'} alt="Main News" className="main-image" />
                <div className="image-overlay">
                  <h2>{mainArticle.title || 'Main Article Title'}</h2>
    
                </div>
              </div>
            ) : (
              <p>Loading Main Article...</p>
            )}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="sidebar">
          {/* Trending News */}
          <section className="trending-news">
            <h3>Trending News</h3>
            <div className="trending-list">
              {trendingNews.length > 0 ? renderTrendingNews() : <p>No trending news available</p>}
            </div>
            <div className="pagination">
              <button onClick={() => handleTrendingPageChange(-1)} disabled={trendingPage === 1}>Prev</button>
              <span>{trendingPage} of {totalTrendingPages}</span>
              <button onClick={() => handleTrendingPageChange(1)} disabled={trendingPage === totalTrendingPages}>Next</button>
            </div>
          </section>

          {/* Follow Us */}
          <section className="follow-us">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/" className="social-button">Facebook</a>
              <a href="https://www.linkedin.com/" className="social-button">LinkedIn</a>
              <a href="https://www.twitter.com/" className="social-button">Twitter</a>
            </div>
          </section>

          {/* Most Viewed */}
          {/* <section className="most-viewed">
            <h3>Most Viewed</h3>
            <ol className="most-viewed-list">
              {trendingNews.slice(0, 3).map((news, index) => (
                <li key={index}>{news.title || 'Most Viewed Title'}</li>
              ))}
            </ol>
          </section> */}
        </aside>
      </div>

      {/* Feature News Carousel */}
      <section className="feature-news title-headings">
        <h3 className="most-viewed">Feature News</h3>
        <div className="feature-grid">
          {featureNews.length > 0 ? renderFeatureNews() : <p>No feature news available</p>}
          
        </div>
        <div className="pagination">
          <button onClick={() => handleFeaturePageChange(-1)} disabled={featurePage === 1}>Prev</button>
          <span>{featurePage} of {totalFeaturePages}</span>
          <button onClick={() => handleFeaturePageChange(1)} disabled={featurePage === totalFeaturePages}>Next</button>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section title-headings trending-news">
        <h3>Upcoming Events</h3>
        <div className="events-list">
          {events.length > 0 ? renderEvents() : <p>No events available</p>}
        </div>
        <div className="pagination">
          <button onClick={() => handleEventsPageChange(-1)} disabled={eventsPage === 1}>Prev</button>
          <span>{eventsPage} of {totalEventsPages}</span>
          <button onClick={() => handleEventsPageChange(1)} disabled={eventsPage === totalEventsPages}>Next</button>
        </div>
      </section>
    </div>
  );
}

export default Blog;
