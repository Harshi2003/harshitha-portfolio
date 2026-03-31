import React from "react";

function About() {
  const pillars = [
    {
      label: "Current Role",
      title: "Research Assistant, SJSU",
      subtitle: "Teaching Assistant, SJSU",
      points: [
        { text: "Reinforcement Learning" },
        { text: "Data Mining" },
      ],
    },
    {
      label: "Research & Learning",
      title: "MS in Artificial Intelligence • SJSU",
      subtitle:
        "Blending academic rigor with hands-on exploration across AI, automation, and robotics to build human-centered, intelligent systems.",
    },
    {
      label: "Community",
      title: "• Mentor • Builder • Storyteller",
      subtitle:
        "Sharing knowledge through mentorship, blogs, and talks while collaborating on meaningful projects with talented teams worldwide.",
    },
  ];

  const focusAreas = [
    {
      title: "Product Engineering",
      text: "Elegant, resilient frontends paired with scalable backend services to deliver fast, intuitive user experiences.",
      tags: ["React", "Node.js", "TypeScript", "System Design"],
    },
    {
      title: "AI Experiences",
      text: "Thoughtful AI workflows that combine LLMs and automation to create reliable, personalized applications.",
      tags: ["LLMs", "Prompt Design", "LangChain", "Evaluation"],
    },
    {
      title: "Robotics & Vision",
      text: "Connected systems where hardware and software meet to solve practical, real-world challenges.",
      tags: ["Computer Vision", "Python", "Embedded", "Automation"],
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="about-header">
        <span className="about-chip">About</span>
        <h2 className="about-title">I build products where software meets intelligence.</h2>
        <p className="about-intro">
          I help teams go from ambitious ideas to high-impact products by blending
          product thinking, AI engineering, and collaborative execution.
        </p>
      </div>

      <div className="about-pillars">
        {pillars.map((pillar) => (
          <article className="about-pillar-card" key={pillar.label}>
            <span className="about-pillar-label">{pillar.label}</span>
            <h3 className={pillar.label === "Current Role" ? "current-role-line" : ""}>
              {pillar.title}
            </h3>
            <p className={pillar.label === "Current Role" ? "current-role-line" : ""}>
              {pillar.subtitle}
            </p>
            {pillar.points && (
              <ul className="about-pillar-points">
                {pillar.points.map((point) => (
                  <li key={typeof point === "string" ? point : point.text}>
                    {typeof point === "string" ? (
                      point
                    ) : point.bold ? (
                      <strong>• {point.text}</strong>
                    ) : (
                      `• ${point.text}`
                    )}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className="about-focus-wrap">
        <span className="about-chip">Focus Areas</span>
        <h3 className="about-focus-title">From concept to execution, end-to-end.</h3>
        <div className="about-focus-grid">
          {focusAreas.map((item) => (
            <article className="about-focus-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <div className="about-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="about-cta-row">
        <article className="about-cta-card">
          <h4>Explore my work</h4>
          <p>See projects where I shipped AI systems and user-first products.</p>
          <a href="#projects">View projects</a>
        </article>
        <article className="about-cta-card">
          <h4>My journey so far</h4>
          <p>Hands-on roles, research milestones, and impact across teams.</p>
          <a href="#experience">View experience</a>
        </article>
        <article className="about-cta-card">
          <h4>Let&apos;s build together</h4>
          <p>If you are hiring or collaborating, I am excited to connect.</p>
          <a href="#contact">Start a conversation</a>
        </article>
      </div>
    </section>
  );
}

export default About;
