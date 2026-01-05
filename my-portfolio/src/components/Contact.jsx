// src/components/Contact.jsx
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Simple mailto submit (no backend)
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:peddisaiharshitha@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* LEFT: FORM */}
        <form className="contact-form" onSubmit={onSubmit}>
          <label className="contact-label" htmlFor="name">Your Name</label>
          <input
            id="name"
            className="contact-input"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Enter your name"
            required
          />

          <label className="contact-label" htmlFor="email">Your Email</label>
          <input
            id="email"
            className="contact-input"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />

          <label className="contact-label" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            className="contact-textarea"
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Write your message..."
            required
          />

          <button className="contact-send" type="submit">
            Send Message
          </button>
        </form>

        {/* RIGHT: INFO */}
        <aside className="contact-aside">
          <h3 className="contact-heading">Contact Information</h3>
          <p className="contact-subtext">
            Feel free to reach out to me through any of these platforms.
          </p>

          <div className="contact-info">
            <a className="contact-info-row" href="mailto:peddisaiharshitha@gmail.com">
              <FaEnvelope className="contact-info-icon" />
              <span>peddisaiharshitha@gmail.com</span>
            </a>

            <a className="contact-info-row" href="tel:+14085818263">
              <FaPhoneAlt className="contact-info-icon" />
              <span>+1 (408) 581-8263</span>
            </a>

            <div className="contact-info-row">
              <FaMapMarkerAlt className="contact-info-icon" />
              <span>Morgan Hill, CA</span>
            </div>
          </div>

          <div className="contact-block">
            <h3 className="contact-heading">Schedule a Meeting</h3>
            {/* Replace this with YOUR Calendly link */}
            <a
              className="contact-calendly"
              href="https://calendly.com/YOUR-CALENDLY-LINK/30min"
              target="_blank"
              rel="noreferrer"
            >
              30 Minutes
            </a>
          </div>

          <div className="contact-block">
            <h3 className="contact-heading">Social Media</h3>
            <div className="contact-social">
              {/* Replace with YOUR links */}
              <a
                className="contact-social-btn"
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                className="contact-social-btn"
                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
