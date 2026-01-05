import React from "react";

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {/* Avantel */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3 className="timeline-role">Software Developer </h3>

            <p className="timeline-meta">
              Avantel Limited | Hyderabad, India | Sep 2023 – Apr 2024
            </p>

            <ul className="timeline-points">
              <li>
                Engineered a customizable OMR processing framework adaptable to multiple
                exam and survey formats, enabling scalable deployment across institutions.
              </li>
              <li>
                Achieved <strong>95% accuracy</strong> on scanned answer sheets and
                <strong> 90% accuracy</strong> on mobile captures through advanced OpenCV-based
                preprocessing and noise-reduction pipelines.
              </li>
              <li>
                Optimized end-to-end processing throughput to
                <strong> 200 OMR sheets per minute</strong>, reducing manual workload by
                <strong> 60%</strong> and supporting high-volume operational use.
              </li>
              <li>
                Built template-driven validation using JSON schemas, automating error
                detection and significantly decreasing reprocessing time.
              </li>
              <li>
                <strong>Tech Stack:</strong> Python, OpenCV, NumPy, Matplotlib, JSON Templates
              </li>
            </ul>
          </div>
        </div>

        {/* Java Developer */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3 className="timeline-role">Java Developer</h3>

            <p className="timeline-meta">
              Amrita Vishwa Vidyapeetham | Kollam, India | Aug 2022 – Nov 2023
            </p>

            <ul className="timeline-points">
              <li>
                Developed a modular Java Swing desktop application for managing studio
                operations, including albums, artists, musicians, and employee records.
              </li>
              <li>
                Implemented secure, role-based access control with dynamic GUI panels,
                enabling differentiated admin and employee workflows.
              </li>
              <li>
                Integrated PostgreSQL for reliable <strong>CRUD operations</strong> with optimized
                queries, improving data retrieval speed and ensuring consistent system performance.
              </li>
              <li>
                Followed an MVC-inspired architecture and user-centered design principles,
                resulting in a maintainable codebase and smoother user experience.
              </li>
              <li>
                Utilized Git for version control, maintaining clean commit history and
                supporting collaborative development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
