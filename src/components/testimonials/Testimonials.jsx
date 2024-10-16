import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../config/Config';
import './Testimonials.css';

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 4;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/testimonials/`);
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <div className="testimonials-grid">
        {currentTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            {testimonial.profile_image && (
              <img
                src={testimonial.profile_image}
                alt={testimonial.client_name}
                className="testimonial-image"
              />
            )}
            <div className="testimonial-content">
              <h2 className="client-name">{testimonial.client_name}</h2>
              <p className="client-text">{testimonial.client_text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
