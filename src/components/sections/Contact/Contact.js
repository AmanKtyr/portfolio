import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaCodepen, FaQuora,
  FaPaperPlane, FaCheckCircle, FaExclamationCircle,
  FaWhatsapp
} from 'react-icons/fa';
import {
  ContactContainer, ContactContent, ContactInfo,
  ContactDetail, ContactSocial, SocialLink,
  ContactForm, FormGroup, FormControl, ErrorMessage
} from './ContactStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setIsSubmitting(true);
    const whatsappNumber = '+916387343245';
    const { name, email, subject, message } = formData;
    const whatsappMessage = `Hello, you have a new message from your portfolio contact form:%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    setIsSubmitting(false);
    setSubmitMessage('Your message has been sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const contactDetails = [
    { icon: <FaEnvelope />, label: t('contact.email'), value: 'amankatiyar.tech01@gmail.com', href: 'mailto:amankatiyar.tech01@gmail.com' },
    { icon: <FaPhone />, label: t('contact.phone'), value: '+91 6387343245', href: 'tel:+916387343245' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 6387343245', href: 'https://wa.me/916387343245' },
    { icon: <FaMapMarkerAlt />, label: t('contact.location'), value: 'Lucknow, Uttar Pradesh, India', href: null },
  ];

  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/AmanKtyr', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/amanktyr', label: 'LinkedIn' },
    { icon: <FaCodepen />, href: 'https://codepen.io/amanktyr', label: 'CodePen' },
    { icon: <FaQuora />, href: 'https://www.quora.com/profile/AmAn-KtYr-1', label: 'Quora' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <ContactContainer id="contact">
      <div className="container">
        <SectionHeading 
          number="6"
          title="GET IN"
          accent="TOUCH"
          subtitle={t('contact.subtitle')}
        />

        <ContactContent>
          {/* ---- Left: Info Panel ---- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <ContactInfo>
              <motion.h3 variants={itemVariants}>{t('contact.getInTouch')}</motion.h3>
              <motion.p variants={itemVariants}>
                I'm a passionate Full-Stack Developer specializing in modern web technologies. 
                Available for freelance projects, collaborations, and exciting opportunities. 
                Let's discuss how I can help bring your ideas to life!
              </motion.p>

              {contactDetails.map((detail, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <ContactDetail as={detail.href ? 'a' : 'div'} href={detail.href || undefined} target={detail.href && !detail.href.startsWith('tel') && !detail.href.startsWith('mailto') ? '_blank' : undefined} rel="noopener noreferrer">
                    <div className="icon">{detail.icon}</div>
                    <div className="text">
                      <h4>{detail.label}</h4>
                      <p>{detail.value}</p>
                    </div>
                    <div className="arrow">→</div>
                  </ContactDetail>
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <ContactSocial>
                  {socials.map((s, i) => (
                    <SocialLink key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}>
                      {s.icon}
                    </SocialLink>
                  ))}
                </ContactSocial>
              </motion.div>

              {/* Availability Badge */}
              <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
                <div className="availability-badge">
                  <span className="dot"></span>
                  SYSTEM_STATUS: ONLINE
                </div>
              </motion.div>
            </ContactInfo>
          </motion.div>

          {/* ---- Right: Form ---- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>&lt;MESSAGE_RELAY&gt;</h3>
                <p>ESTABLISHING SECURE CONNECTION...</p>
              </div>

              {submitMessage && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle />
                  {submitMessage}
                </motion.div>
              )}

              <div className="form-row">
                <FormGroup>
                  <label>Your Name</label>
                  <FormControl
                    type="text"
                    name="name"
                    placeholder="Aman Katiyar"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <ErrorMessage><FaExclamationCircle /> {errors.name}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <label>Email Address</label>
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <ErrorMessage><FaExclamationCircle /> {errors.email}</ErrorMessage>}
                </FormGroup>
              </div>

              <FormGroup>
                <label>Subject</label>
                <FormControl
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration / Freelance Work..."
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <ErrorMessage><FaExclamationCircle /> {errors.subject}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <label>Message</label>
                <FormControl
                  as="textarea"
                  name="message"
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="6"
                />
                {errors.message && <ErrorMessage><FaExclamationCircle /> {errors.message}</ErrorMessage>}
              </FormGroup>

              <button type="submit" className="btn-primary" disabled={isSubmitting} id="contact-submit-btn">
                {isSubmitting ? (
                  <span className="loading-text">Sending...</span>
                ) : (
                  <>
                    {t('contact.send')}
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
