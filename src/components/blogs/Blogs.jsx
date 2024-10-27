import React from 'react';
import './Blogs.css';
import main_img from './test_images/gallery-post-DydtzxC6.jpg';
import trendng1 from './test_images/trendng1.jpg';
import trendng2 from './test_images/trendng2.jpg';
import trendng3 from './test_images/trending3.jpg';
import trendng4 from './test_images/trending4.jpg';

function Blog() {
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
            <div className="image-container">
              <img src={main_img} alt="Main News" className="main-image" />
              <div className="image-overlay">
                <h2>Japan’s Virus Success Has Puzzled the World</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="sidebar">
          {/* Trending News */}
          <section className="trending-news">
            <h3>Trending News</h3>
            <div className="trending-list">
              <div className="trending-item">
                <img src={trendng1} alt="Trending 1" />
                <p>Climate Change and Its Impact</p>
              </div>
              <div className="trending-item">
                <img src={trendng2} alt="Trending 2" />
                <p>Breakthrough in AI Technology</p>
              </div>
              <div className="trending-item">
                <img src={trendng3} alt="Trending 3" />
                <p>Exploring the Deep Sea</p>
              </div>
            </div>
          </section>

          {/* Follow Us */}
          <section className="follow-us">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61550738654440&_rdc=1&_rdr/" className="social-button">Facebook</a>
              <a href="https://ke.linkedin.com/company/mamlaka-hub-and-spoke" className="social-button">Twitter</a>
              <a href="https://www.twitter.com/" className="social-button">Instagram</a>
            </div>
          </section>

          {/* Most Viewed */}
          <section className="most-viewed">
            <h3>Most Viewed</h3>
            <ol className="most-viewed-list">
              <li>Exploring the Arctic: A Journey</li>
              <li>The Rise of Renewable Energy</li>
              <li>Top 10 Places to Visit in 2024</li>
            </ol>
          </section>
        </aside>
      </div>

      {/* Feature News Carousel */}
      <section className="feature-news title-headings">
        <h3 className='most-viewed'>Feature News</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <img src={trendng1} alt="Feature 1" />
            <h4>Success Stories in Tech</h4>
            <p>Read about how tech giants are evolving with new challenges.</p>
          </div>
          <div className="feature-item">
            <img src={trendng2} alt="Feature 2" />
            <h4>Exploring the Wilderness</h4>
            <p>Discover the beauty and mystery of unexplored forests.</p>
          </div>
          <div className="feature-item">
            <img src={trendng3} alt="Feature 3" />
            <h4>Nutrition Trends 2024</h4>
            <p>What’s trending in health and wellness this year?</p>
          </div>
          <div className="feature-item">
            <img src={trendng4} alt="Feature 4" />
            <h4>The Future of Renewable Energy</h4>
            <p>Exploring innovations driving the green revolution.</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section title-headings trending-news">
        <h3>Upcoming Events</h3>

        <div className="events-list">
          <div className="event-item">
            <div className="event-image-container">
              <img src={trendng1} alt="Tech Conference" />
            </div>
            <div className="event-details">
              <h4>Tech Conference 2024</h4>
              <p>Date: January 15, 2024</p>
              <p>Location: San Francisco, CA</p>
              <p>Join industry leaders to discuss the future of technology.</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-image-container">
              <img src={trendng2} alt="Environmental Summit" />
            </div>
            <div className="event-details">
              <h4>Environmental Summit</h4>
              <p>Date: February 20, 2024</p>
              <p>Location: New York, NY</p>
              <p>Engage with experts on climate change and sustainability.</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-image-container">
              <img src={trendng3} alt="Health & Wellness Expo" />
            </div>
            <div className="event-details">
              <h4>Health & Wellness Expo</h4>
              <p>Date: March 10, 2024</p>
              <p>Location: Chicago, IL</p>
              <p>Discover the latest trends in health and wellness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
