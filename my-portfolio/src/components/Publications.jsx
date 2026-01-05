import React from "react";

const PUBLICATIONS = [
  {
    title:
      "Enhancing Emotion Classification Through CNN Models for Speech Analysis",
    venue:
      "ICT4SD 2024 · Lecture Notes in Networks and Systems · Springer Nature",
    date: "April 2025",
    type: "Conference Paper",
    description:
      "Proposed a CNN-based speech emotion classification framework that improves robustness and accuracy by leveraging spectral feature representations and optimized convolutional architectures.",
    tags: ["Deep Learning", "CNN", "Speech Analysis", "Emotion Recognition"],
    link: "https://link.springer.com/", // replace with actual link
  },
  {
    title:
      "Enhancing Stroke Lesion Classification with Conditional GAN: Leveraging Unsupervised Clustering and Class-Conditioned Synthetic Data",
    venue:
      "2024 IEEE Conference on Smart Computing and Communication (SmartCom) · IEEE Xplore",
    date: "February 2024",
    type: "Conference Paper",
    description:
      "Introduced a conditional GAN-based augmentation strategy combined with unsupervised clustering to improve stroke lesion classification performance under limited labeled data.",
    tags: ["GAN", "Medical Imaging", "Deep Learning", "Data Augmentation"],
    link: "https://ieeexplore.ieee.org/", // replace with actual link
  },
  {
    title:
      "A Comparative Study of LSTM and Transformer Models for Deep Learning-Based Sentiment Analysis in Social Media Posts",
    venue: "IJARESM",
    date: "November 2024",
    type: "Journal Article",
    description:
      "Conducted a comparative evaluation of LSTM and Transformer architectures for sentiment analysis, highlighting trade-offs in performance, scalability, and contextual understanding.",
    tags: ["NLP", "LSTM", "Transformers", "Sentiment Analysis"],
    link: "https://www.ijaresm.com/", // replace with actual link
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section publications-section">
      <h2 className="section-title">Publications</h2>

      <div className="publications-list">
        {PUBLICATIONS.map((p) => (
          <div key={p.title} className="publication-card">
            <div className="publication-header">
              <h3 className="publication-title">{p.title}</h3>
              <span className="publication-badge">{p.type}</span>
            </div>

            <p className="publication-venue">{p.venue}</p>
            <p className="publication-date">{p.date}</p>

            <p className="publication-description">{p.description}</p>

            <div className="publication-tags">
              {p.tags.map((tag) => (
                <span key={tag} className="publication-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="publication-actions">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                View Publication
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
