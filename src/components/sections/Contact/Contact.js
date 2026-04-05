import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaCodepen, FaQuora,
  FaPaperPlane, FaWhatsapp
} from 'react-icons/fa';
import {
  ContactContainer,
  ContactContent,
  ContactInfo,
  InfoHeader,
  ContactGrid,
  ContactCard,
  SocialFrame,
  SocialBox,
  ContactForm,
  ConnectionStatus
} from './ContactStyles';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name REQUIRED';
    if (!formData.email.trim()) newErrors.email = 'Email REQUIRED';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = 'INVALID_FORMAT';
    if (!formData.subject.trim()) newErrors.subject = 'Subject REQUIRED';
    if (!formData.message.trim()) newErrors.message = 'Message REQUIRED';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    
    setIsSubmitting(true);
    const whatsappNumber = '916387343245';
    const { name, email, subject, message } = formData;
    const whatsappMessage = `*NEW_MESSAGE_RELAYED*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactDetails = [
    { icon: <FaEnvelope />, label: 'SYSTEM_EMAIL', value: 'amankatiyar.tech01@gmail.com', href: 'mailto:amankatiyar.tech01@gmail.com' },
    { icon: <FaPhone />, label: 'DIRECT_LINE', value: '+91 6387343245', href: 'tel:+916387343245' },
    { icon: <FaWhatsapp />, label: 'SECURE_WHATSAPP', value: '+91 6387343245', href: 'https://wa.me/916387343245' },
    { icon: <FaMapMarkerAlt />, label: 'DEPLOYMENT_ZONE', value: 'Lucknow, UP, India', href: null },
  ];

  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/AmanKtyr' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/amanktyr' },
    { icon: <FaCodepen />, href: 'https://codepen.io/amanktyr' },
    { icon: <FaQuora />, href: 'https://www.quora.com/profile/AmAn-KtYr-1' },
  ];

  return (
    <ContactContainer id="contact">
      <div className="container">
        <SectionHeading 
          number="04"
          title="GET IN"
          accent="TOUCH"
          subtitle={t('contact.subtitle')}
        />

        <ContactContent>
          <ContactInfo>
            <InfoHeader>
              <h3>Establish <span>Connection</span></h3>
              <p>
                Engineer your next big milestone with a strategic partner. 
                Available for high-stakes collaborations and enterprise solutions.
              </p>
            </InfoHeader>

            <ContactGrid>
              {contactDetails.map((detail, i) => (
                <ContactCard 
                  key={i} 
                  as={detail.href ? 'a' : 'div'} 
                  href={detail.href || undefined}
                  target={detail.href?.startsWith('http') ? '_blank' : undefined}
                >
                  <div className="icon">{detail.icon}</div>
                  <div className="details">
                    <h4>{detail.label}</h4>
                    <p>{detail.value}</p>
                  </div>
                </ContactCard>
              ))}
            </ContactGrid>

            <SocialFrame>
              {socials.map((s, i) => (
                <SocialBox key={i} href={s.href} target="_blank">
                  {s.icon}
                </SocialBox>
              ))}
            </SocialFrame>

            <ConnectionStatus>
              <div className="dot"></div>
              <span>SYSTEM_STATUS: SECURE_AND_ACTIVE</span>
            </ConnectionStatus>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <div className="form-header">
              <h4>&lt;SECURE_RELAY&gt;</h4>
              <span>Transmission_Latency: Optimized</span>
            </div>

            <div className="form-group">
              <label>Origin Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: John Doe"
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Link Endpoint (Email)</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: john@enterprise.com"
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Subject Header</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project_Proposal_V1"
              />
              {errors.subject && <span className="error-msg">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label>Payload Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your architectural requirements..."
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE CONNECTION'}
              <FaPaperPlane />
            </button>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
