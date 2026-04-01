import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import heroPhoto from "../assets/images/harshitha.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for 2026 new grad roles
          </div>

          <p className="hero-kicker">HI, MY NAME IS</p>

          <h1 className="hero-title">
            Harshitha <span>Peddi.</span>
          </h1>

          <h2 className="hero-tagline">
            I build experiences at the intersection of 
            <span className="tagline-highlight"> software, AI, and robotics.</span>
          </h2>

          <p className="hero-description">
            From <span className="accent-text">enterprise-grade AI platforms</span> to 
            <span className="accent-text"> immersive mobile apps</span> and 
            <span className="accent-text"> connected hardware</span>, I bring ideas to life 
            with <span className="accent-bold">thoughtful design</span>, 
            <span className="accent-bold"> clean engineering</span>, and a 
            <span className="accent-bold"> collaborative mindset</span>.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <div className="social-icons-inline">
              <a
                href="https://github.com/Harshi2003"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/peddisaiharshitha/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:peddisaiharshitha@gmail.com">
                <FaEnvelope />
              </a>
              <a
                href="https://calendly.com/peddisaiharshitha/30min"
                target="_blank"
                rel="noreferrer"
                aria-label="Calendly Meeting"
                title="Schedule Meeting"
              >
                <FaCalendarAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <img
              src={heroPhoto}
              alt="Harshitha Peddi"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
