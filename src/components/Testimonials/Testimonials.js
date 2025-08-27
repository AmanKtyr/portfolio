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
// import client1 from '../../assets/client1.jpg';
// import client2 from '../../assets/client2.jpg';
// import client3 from '../../assets/client3.jpg';
// import client4 from '../../assets/client4.jpg';

const testimonialsData = [
  {
    id: 1,
    text: "Working with this developer was an absolute pleasure. They delivered a stunning website that perfectly captured our brand's essence. Their attention to detail and technical expertise are truly impressive.",
    name: "Priya Sharma",
    position: "CEO, TechVentures India",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    text: "I'm extremely satisfied with the e-commerce platform they built for my business. The site is not only visually appealing but also performs exceptionally well. Sales have increased by 40% since the launch!",
    name: "Arjun Patel",
    position: "Founder, DigitalCraft Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    text: "Their ability to translate our complex requirements into a user-friendly interface was remarkable. The project was delivered on time and within budget. I highly recommend their services.",
    name: "Anjali Desai",
    position: "Marketing Director, GrowthLabs India",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    text: "The developer's problem-solving skills are outstanding. They quickly identified and fixed issues with our existing website, improving its performance significantly. A true professional in every sense.",
    name: "Rahul Verma",
    position: "CTO, InnovateTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    text: "Exceptional work quality and professional approach. They transformed our outdated website into a modern, responsive platform that has significantly improved our online presence and customer engagement.",
    name: "Meera Kapoor",
    position: "Director, CreativeMinds Studio",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    text: "Outstanding technical skills combined with excellent communication. They delivered a complex project that exceeded our expectations. The website is fast, secure, and user-friendly.",
    name: "Vikram Singh",
    position: "CEO, StartupHub India",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
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
