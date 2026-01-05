import React from "react";

function ResearchExperience() {
  return (
    <section id="research" className="section research-section">
      <h2 className="section-title">Research Experience</h2>

      <div className="research-grid">
        {/* ARES – SJSU */}
        <div className="research-card">
          <h3 className="research-role">Research Assistant — ARES Framework</h3>

          <p className="research-meta">
            San José State University | Collaborative Filtering | Oct 2025 – Present
          </p>

          <ul className="research-points">
            <li>
              Contributing to <strong>ARES</strong>, a next-generation Collaborative Filtering framework 
              aimed at accelerating recommendation systems via efficient similarity computation.
            </li>
            <li>
              Investigating <strong>bit-sliced vector algebra</strong>, quantization, and compression to 
              improve scalability and reduce computational cost on large user–item matrices.
            </li>
            <li>
              Developing hybrid <strong>user–item similarity</strong> models to achieve faster, 
              more accurate, and memory-efficient recommendations.
            </li>
            <li>
              Benchmarking ARES against <strong>ALS</strong> and <strong>LightGCN</strong> on public datasets 
              to achieve real-time, sustainable recommendation performance.
            </li>
          </ul>
        </div>

        {/* SER – Amrita */}
        <div className="research-card">
          <h3 className="research-role">Research Assistant</h3>

          <p className="research-meta">
            Amrita Vishwa Vidyapeetham | Speech Emotion Recognition | Jan 2024 – May 2024
          </p>

          <ul className="research-points">
            <li>
              Designed and implemented a hybrid Speech Emotion Recognition system using 
              <strong> CNN-BLSTM-Attention</strong> and <strong> CNN-Transformer</strong> architectures 
              for Mel-Spectrogram-based emotion classification.
            </li>
            <li>
              Trained models on the <strong>RAVDESS dataset</strong> with augmentation 
              (AWGN) to reduce overfitting and improve generalization.
            </li>
            <li>
              Achieved <strong>89.33% accuracy</strong> with CNN-Transformer and 
              <strong> 85.67% accuracy</strong> with CNN-BLSTM on a 10% hold-out test set, exceeding 
              baseline performance.
            </li>
            <li>
              Utilized multi-head self-attention and parallel convolutional pathways to capture 
              spatial–temporal speech patterns more effectively.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ResearchExperience;
