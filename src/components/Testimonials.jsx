import { feedback } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "../style";

const Testimonials = () => (
  <section className="container mx-auto py-10">
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        600: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
      }}
    >
      {feedback.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="allitem">
            <div className="blog-allof">
              <div className="img-date">
                <img
                  src={card.img} // Assuming feedback API provides an image URL
                  // alt={card.title}
                  className="testimonial-image"
                />
              </div>
              <div className="discretion-blog">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
