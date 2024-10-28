import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import { BASE_URL } from '../config/Config';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3; // Showing 3 testimonials per page

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}testimonials`);
        const data = await response.json();
        setTestimonials(data); // Assuming data is an array of testimonials
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <section
      className="testimonials"
      style={{
        backgroundImage: "url('')",
      }}
    >
      <div className="container">
        <div className="title">
          <h5>Testimonials</h5>
          <h2>What our clients say</h2>
        </div>
        <div className="testimonials-container">
          {currentTestimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.created_at}>
              <div className="profile">
                <img
                  src={testimonial.profile_image || 'https://via.placeholder.com/50'}
                  alt={testimonial.client_name}
                />
                <div className="information">
                  <div className="stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <i className="fa fa-star" key={starIndex}></i>
                    ))}
                  </div>
                  <p>{testimonial.client_name}</p>
                </div>
              </div>
              <p>{testimonial.client_text}</p>
              <div className="icon">
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation">
          <button onClick={prevTestimonials} className="prev" disabled={currentIndex === 0}>
            ❮
          </button>
          <button onClick={nextTestimonials} className="next" disabled={currentIndex === totalPages - 1}>
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
