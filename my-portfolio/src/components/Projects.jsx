// src/components/Projects.jsx
import React from "react";

// ✅ Import images you have (only NourishNow for now)
import nourishImg from "../assets/images/projects/NourishNow.png";
import toxicCommentImg from "../assets/images/projects/toxic comment.png";
import BoxOfficeImg from "../assets/images/projects/BoxOffice.png";
import FarFromHomeImg from "../assets/images/projects/FarFromHome.png";
import AutonomousSystemImg from "../assets/images/projects/AutonomousSystem.png";
import AgenticThreatCorrelationImg from "../assets/images/projects/AgenticThreatCorrelation.svg";
import NeuralRenderingDeblurImg from "../assets/images/projects/NeuralRenderingDeblur.svg";




const PROJECTS = [
  {
    title: "Agentic AI Threat Correlation Engine",
    subtitle: "Security Signal Correlation for Faster Incident Response",
    description:
      "Built an agentic security correlation engine that ingests and enriches multi-source telemetry, links related alerts into investigation-ready incidents, and improves SOC efficiency by reducing false positives and response time.",
    tags: ["Python", "SIEM", "SOAR", "Threat Intelligence", "Security Analytics"],
    github: "https://github.com/Harshi2003",
    image: AgenticThreatCorrelationImg,
  },
  {
    title: "NourishNow",
    subtitle: "AI-Powered Cooking & Grocery LLM Assistant",
    description:
      "AI-powered cooking and grocery assistant that uses LLM routing and structured SQL querying to help users explore recipes conversationally, plan healthy meals, and generate smart grocery lists securely.",
    tags: ["Python", "LLMs", "SQL", "Gradio", "Ollama", "DuckDB"],
    github: "https://github.com/Harshi2003",
    image: nourishImg, // ✅ actual imported image
  },
  {
    title: "Neural Rendering for Image Deblurring and Frame Generation",
    subtitle: "Neural Methods for Visual Restoration and Synthesis",
    description:
      "A deep learning project focused on image deblurring and frame generation using neural rendering techniques to improve visual quality and temporal consistency.",
    tags: ["Computer Vision", "Deep Learning", "Image Deblurring", "Frame Generation"],
    github:
      "https://github.com/bhargava-suryadevara/Neural-Rendering-for-Image-Deblurring-and-Frame-Generation",
    image: NeuralRenderingDeblurImg,
  },
  {
    title: "Toxic Comment Detection",
    subtitle: "Transformer-based Multi-Label Classification",
    description:
      "Multi-label transformer-based NLP system for real-time detection of toxic comments across six abuse categories, optimized for high accuracy, robustness, and reliable moderation.",
    tags: ["NLP", "Transformers", "BERT", "PyTorch", "Kaggle"],
    github: "https://github.com/Harshi2003/Toxic-Comment-Detection-for-Online-Platforms-BERT-RNN-",
    image: toxicCommentImg, // keep empty for now
  },
  {
    title: "Movie Success Prediction",
    subtitle: "Revenue Forecasting & Hit/Flop/Classic Classification",
    description:
      "Machine learning pipeline that predicts box office revenue and classifies movies as Hit, Flop, or Classic using API-driven metadata, feature engineering, and ensemble models.",
    tags: ["Machine Learning", "XGBoost", "APIs", "Feature Engineering"],
    github: "https://github.com/Harshi2003",
    image: BoxOfficeImg, // keep empty for now
  },
  {
    title: "End-to-End Autonomous Driving (PPO)",
    subtitle: "CARLA Simulator + PPO Agent + VAE",
    description:
      "Deep Reinforcement Learning system that trains a PPO agent to drive autonomously in the CARLA urban simulator. Uses a Variational AutoEncoder (VAE) to compress high-dimensional observations into a low-dimensional latent space to improve learning efficiency.",
    tags: ["Python", "PyTorch", "Reinforcement Learning", "PPO", "CARLA", "VAE"],
    github:"https://github.com/Harshi2003/End-to-End-Autonomous-Driving-using-Proximal-Policy-Optimization",
    image: AutonomousSystemImg, // add later
  },
  {
    title: "Far From Home",
    subtitle: "Student Roommate Finder Platform",
    description:
      "Mobile-first roommate discovery platform that helps university students find compatible roommates based on interests, schedules, and housing preferences, with real-time updates and secure authentication.",
    tags: ["Flutter", "Firebase", "Mobile", "Realtime"],
    github: "https://github.com/Harshi2003/Far-From-Home",
    image: FarFromHomeImg, // keep empty for now
  },
];

function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  github,
  image,
}) {
  return (
    <a
      className="project-card"
      href={github}
      target="_blank"
      rel="noreferrer"
      aria-label={`${title} GitHub`}
      title="Open GitHub"
    >
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          // ✅ Clean placeholder (no text)
          <div className="project-image-placeholder" />
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        {subtitle ? <p className="project-subtitle">{subtitle}</p> : null}

        <p className="project-description">{description}</p>

        {tags?.length ? (
          <div className="project-tags">
            {tags.map((t) => (
              <span key={t} className="project-tag">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
