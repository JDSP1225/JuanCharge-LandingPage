import React from 'react';
import './Contact.css';

const Contact = ({ id }) => {
  return (
    <section id={id} className="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="section-subtitle">Contact</span>
          <h2 className="section-title">Contact Us For Any Questions</h2>
          <p className="section-description">
            We'd love to hear from you! Whether it's a question, feedback, or a partnership opportunity, our team is ready to assist. Choose the best way to reach us below.
          </p>
          
          <div className="info-list">
            <h3 className="info-title">Contact Info:</h3>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <span className="info-text">support@juancharge.com</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <span className="info-text">+1 (555) 123-4567</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span className="info-text">Camia Street, 178 Camarin Rd, Caloocan</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" className="form-textarea"></textarea>
            </div>
            <button type="submit" className="btn-primary send-btn">Send Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
