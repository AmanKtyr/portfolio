import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialsContainer, TestimonialItem, TestimonialText, TestimonialAuthor, AuthorImage, AuthorInfo, AuthorName, AuthorPosition, QuoteIcon } from './TestimonialsStyles';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import testimonial images (you'll need to add these)
import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';

const testimonialsData = [
  {
    id: 1,
    text: "Working with this developer was an absolute pleasure. They delivered a stunning website that perfectly captured our brand's essence. Their attention to detail and technical expertise are truly impressive.",
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: client1
  },
  {
    id: 2,
    text: "I'm extremely satisfied with the e-commerce platform they built for my business. The site is not only visually appealing but also performs exceptionally well. Sales have increased by 40% since the launch!",
    name: "Michael Chen",
    position: "Owner, StyleHub",
    image: client2
  },
  {
    id: 3,
    text: "Their ability to translate our complex requirements into a user-friendly interface was remarkable. The project was delivered on time and within budget. I highly recommend their services.",
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthLabs",
    image: client3
  },
  {
    id: 4,
    text: "The developer's problem-solving skills are outstanding. They quickly identified and fixed issues with our existing website, improving its performance significantly. A true professional in every sense.",
    name: "David Wilson",
    position: "CTO, InnovateX",
    image: client4
  }
];

const Testimonials = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <div className="container">
        <ScrollAnimation animation="fadeUp" className="section-title">
          <h2>Client Testimonials</h2>
          <p>What my clients say about my work</p>
        </ScrollAnimation>
        
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-slider"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialItem>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <TestimonialText>
                  {testimonial.text}
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorImage>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </AuthorImage>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorPosition>{testimonial.position}</AuthorPosition>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
