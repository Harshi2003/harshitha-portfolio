import React from "react";

function ResearchExperience() {
  return (
    <section id="research" className="section research-section">
      <h2 className="section-title">Research Experience</h2>

      <div className="research-grid">
        {/* ARES – SJSU */}
        <div className="research-card">
          <h3 className="research-role">Research Assistant — ARES (Ongoing)</h3>

          <p className="research-meta">
            San José State University | Recommender Systems | May 2025 – Present
          </p>

          <ul className="research-points">
            <li>
              Contributing to ARES, a next-generation collaborative filtering framework focused on improving recommendation efficiency and scalability.
            </li>
            <li>
              Exploring quantization, compression, and bit-sliced vector techniques to reduce computation and memory usage on large user-item matrices.
            </li>
            <li>
              Developing hybrid user-item similarity approaches to enhance recommendation speed and accuracy.
            </li>
            <li>
              Evaluating performance against ALS and LightGCN on benchmark datasets to support real-time recommendation systems.
            </li>
          </ul>
        </div>

        {/* SER – Amrita */}
        <div className="research-card">
          <h3 className="research-role">Research Assistant — Speech Emotion Recognition</h3>

          <p className="research-meta">
            Amrita Vishwa Vidyapeetham | AI & Deep Learning | Jan 2024 – May 2024
          </p>

          <ul className="research-points">
            <li>
              Designed deep learning models (CNN-BLSTM-Attention, CNN-Transformer) for emotion classification using Mel-spectrogram features.
            </li>
            <li>
              Applied data augmentation (AWGN) to improve model generalization and reduce overfitting.
            </li>
            <li>
              Achieved 89.33% accuracy (CNN-Transformer) and 85.67% (CNN-BLSTM), outperforming baseline models.
            </li>
            <li>
              Leveraged attention mechanisms and convolutional layers to effectively capture spatial and temporal speech patterns.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ResearchExperience;
