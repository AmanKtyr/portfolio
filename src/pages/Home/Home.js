import React from 'react';
import Meta from '../../components/common/Meta/Meta';
import Header from '../../components/layout/Header/Header';
import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import TechStack from '../../components/sections/TechStack/TechStack';
import Projects from '../../components/sections/Projects/Projects';
import Services from '../../components/sections/Services/Services';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import Contact from '../../components/sections/Contact/Contact';
import Footer from '../../components/layout/Footer/Footer';

const Home = () => {
  return (
    <>
      <Meta 
        title="Home" 
        description="Welcome to the portfolio of Aman Katiyar, a Full-Stack AI Engineer & Solutions Architect. Specializing in AI development, scalable web architectures, and strategic tech solutions." 
        url="https://aman.ktyr.in/"
      />

      <Header />
      <Hero />

      <About />
      <TechStack />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

