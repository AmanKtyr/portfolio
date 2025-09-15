import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ContactPageContainer, ContactBanner, ContactBannerContent, ContactContent, ContactInfo, ContactDetail, ContactSocial, SocialLink, ContactForm, FormGroup, FormControl, ErrorMessage, ContactMap } from './ContactStyles';

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Header />

      <ContactPageContainer>
        <ContactBanner>
          {/* Grid overlay for cyberpunk/tech feel */}
          <div className="grid-overlay"></div>

          <div className="container">
            <ContactBannerContent>
              {/* Floating elements for visual interest */}
              <motion.div
                className="floating-element element-1"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="floating-element element-2"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                Contact Me
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 50
                }}
              >
                Let's discuss your project and bring your ideas to life
              </motion.p>

              {/* Animated code particles */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  color: "rgba(56, 189, 248, 0.4)",
                  fontSize: "1.2rem",
                  fontFamily: "monospace",
                  zIndex: 5
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &lt;contact&gt;
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  bottom: "30%",
                  right: "10%",
                  color: "rgba(147, 51, 234, 0.4)",
                  fontSize: "1.2rem",
                  fontFamily: "monospace",
                  zIndex: 5
                }}
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                &lt;/contact&gt;
              </motion.div>
            </ContactBannerContent>
          </div>
        </ContactBanner>

        <div className="container">
          <ContactContent>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactInfo>
                <h3>Get in Touch</h3>
                <p>
                  Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>

                <ContactDetail>
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div className="text">
                    <h4>Email</h4>
                    <p>amankatiyar.tech01@gmail.com</p>
                  </div>
                </ContactDetail>

                <ContactDetail>
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <div className="text">
                    <h4>Phone</h4>
                    <p>+91 6387343245</p>
                  </div>
                </ContactDetail>

                <ContactDetail>
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="text">
                    <h4>Location</h4>
                    <p>Lucknow, India</p>
                  </div>
                </ContactDetail>

                <ContactSocial>
                  <SocialLink href="https://github.com/amanktyr" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </SocialLink>
                  <SocialLink href="https://linkedin.com/amanktyr" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </SocialLink>
                </ContactSocial>
              </ContactInfo>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm onSubmit={handleSubmit}>
                <h3>Send Me a Message</h3>

                {submitMessage && (
                  <div className="success-message">
                    {submitMessage}
                  </div>
                )}

                <FormGroup>
                  <FormControl
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <FormControl
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <FormControl
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    rows="5"
                  />
                  {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>

                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </ContactForm>
            </motion.div>
          </ContactContent>
        </div>

        <ContactMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61293.561139084224!2d80.92496128294971!3d26.849391020942367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1756317578118!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </ContactMap>
      </ContactPageContainer>

      <Footer />
    </>
  );
};

export default ContactPage;
