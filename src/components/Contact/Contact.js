import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCodepen, FaQuora } from 'react-icons/fa';
import { ContactContainer, ContactContent, ContactInfo, ContactDetail, ContactSocial, SocialLink, ContactForm, FormGroup, FormControl, ErrorMessage } from './ContactStyles';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    <ContactContainer id="contact">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <ContactContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactInfo>
              <h3>{t('contact.getInTouch')}</h3>
              <p>
                {t('contact.contactDesc')}
              </p>

              <ContactDetail>
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="text">
                  <h4>{t('contact.email')}</h4>
                  <p>amanktyrrr@gmail.com</p>
                </div>
              </ContactDetail>

              <ContactDetail>
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="text">
                  <h4>{t('contact.phone')}</h4>
                  <p>+91 6387343245</p>
                </div>
              </ContactDetail>

              <ContactDetail>
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="text">
                  <h4>{t('contact.location')}</h4>
                  <p>Lucknow, UP, India</p>
                </div>
              </ContactDetail>

              <ContactSocial>
                <SocialLink href="https://github.com/AmanKtyr" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/amanktyr" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
                <SocialLink href="https://codepen.io/amanktyr" target="_blank" rel="noopener noreferrer">
                  <FaCodepen />
                </SocialLink>
                <SocialLink href="https://www.quora.com/profile/AmAn-KtYr-1" target="_blank" rel="noopener noreferrer">
                  <FaQuora />
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
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
