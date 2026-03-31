import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Instructor Teaching Assistant",
      meta:
        "San Jose State University (SJSU) - Charles W. Davidson College of Engineering | Jan 2026 - Present",
      points: [
        "Teaching Assistant for CMPE 255 (Data Mining) and CMPE 260 (Reinforcement Learning) under Professor Bertin Cordova-Diba.",
      ],
    },
    {
      role: "Software Engineer",
      meta: "Avantel Limited | Sep 2023 - Aug 2024",
      points: [
        "Developed a scalable OMR processing system supporting multiple exam formats, enabling flexible deployment across use cases.",
        "Achieved 95% accuracy on scanned sheets and 90% on mobile captures using OpenCV-based preprocessing and noise reduction.",
        "Optimized processing speed to 200 sheets/min, reducing manual evaluation effort by ~60%.",
        "Implemented JSON-based template validation to automate error detection and reduce reprocessing time.",
      ],
    },
    {
      role: "Software Engineer Technical Lead (Research)",
      meta: "Amrita Vishwa Vidyapeetham | Mar 2023 - Feb 2024",
      points: [
        "Worked extensively with large-scale EEG and audio signal datasets, building robust preprocessing and feature engineering pipelines for high-dimensional, multichannel time-series data.",
      ],
    },
    {
      role: "Software Development and Data Analytics",
      meta: "VMT Soft Sol Pvt Ltd | Hyderabad, Telangana, India | Jan 2023 - Jul 2023",
      points: [
        "Gained hands-on experience working with data pipelines and analytics tools to process and analyze structured datasets.",
        "Assisted in creating dashboards using Power BI to visualize data and understand key insights.",
        "Applied Python and SQL for basic data cleaning, querying, and analysis, strengthening analytical skills.",
        "Collaborated with team members to learn real-world data workflows and software development practices.",
      ],
    },
    {
      role: "Java Developer Intern",
      meta: "Amrita Vishwa Vidyapeetham | Kollam, India | Feb 2022 - Nov 2022",
      points: [
        "Built a desktop application to manage studio data, including albums, artists, musicians, and employees.",
        "Implemented role-based access control to support secure admin and employee workflows.",
        "Integrated PostgreSQL for efficient data storage and CRUD operations, ensuring reliable performance.",
        "Designed the system using an MVC-based structure, improving code organization and maintainability.",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={`${exp.role}-${exp.meta}`}>
            <div className="timeline-content">
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-meta">{exp.meta}</p>

              {exp.points.length > 0 && (
                <ul className="timeline-points">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
