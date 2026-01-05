import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import heroPhoto from "../assets/images/harshitha.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-kicker">HI, MY NAME IS</p>

          <h1 className="hero-title">
            Harshitha <span>Peddi.</span>
          </h1>

          <h2 className="hero-tagline">
            I build intelligent, human-centered AI experiences.
          </h2>

          <p className="hero-description">
            I&apos;m a software engineer and AI practitioner specializing in
            building reliable, human-centered digital experiences across
            machine learning, computer vision, and full-stack applications.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>

            <div className="social-icons-inline">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:your.email@example.com">
                <FaEnvelope />
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
