import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import TechStack from '../../components/TechStack/TechStack';
import Projects from '../../components/Projects/Projects';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import Blog from '../../components/Blog/Blog';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
