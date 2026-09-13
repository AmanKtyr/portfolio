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
        description="Official portfolio of Aman Katiyar (Aman Ktyr), a Full-Stack AI Engineer & Solutions Architect specializing in Agentic Systems, Web Architecture, React, Next.js, and Python/Django." 
        keywords="Aman Katiyar, Aman Ktyr, amanktyr, Aman, Full-Stack AI Engineer, Solutions Architect, Agentic Systems, React Developer, Django Developer, Next.js, Python Full Stack, Lucknow, India, Developer Portfolio"
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

