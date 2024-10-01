import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => (
  <section id="clients" className="w-full h-screen flex justify-center items-center relative">
    {/* Background gradients */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Carousel */}
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      loop={true}
      className="w-full h-full"
    >
      {feedback.map((card) => (
  <SwiperSlide key={card.id} className="flex justify-center items-center">
  <div className="w-full md:w-[80%] lg:w-[60%] p-10 flex flex-col items-center">
    <h2 className={`${styles.heading2} text-center mb-6`}>
      What People are <br className="sm:block hidden" /> saying about us
    </h2>
    <p className={`${styles.paragraph} text-center mb-6`}>
      {card.content}
    </p>
    {/* <FeedbackCard {...card} /> */}  
  </div>
</SwiperSlide>
      ))}
    </Swiper>

  </section>
);

export default Testimonials;
