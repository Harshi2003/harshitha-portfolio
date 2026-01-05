import React from "react";
import {
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiHuggingface,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiReact,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiSqlite,
  SiMysql,
  SiRedis,
} from "react-icons/si";

/**
 * Flat, curated skills list (NO categories)
 * All icons are SAFE and verified
 */




const skills = [
  // Programming
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "Java", icon: <FaJava color="#b07219" /> },
  { name: "C++", icon: <TbBrandCpp color="#00599C" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "SQL", icon: <SiPostgresql color="#336791" /> },

  // AI / ML
  { name: "Machine Learning", icon: <SiScikitlearn color="#F7931E" /> },
  { name: "Deep Learning", icon: <SiPytorch color="#EE4C2C" /> },
  { name: "Generative AI", icon: <SiHuggingface color="#FF6A00" /> },
  { name: "Transformers", icon: <SiHuggingface color="#FF6A00" /> },
  { name: "Computer Vision", icon: <SiOpencv color="#5C8CCB" /> },
  { name: "NLP", icon: <SiHuggingface color="#FF6A00" /> },

  // Frameworks
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
  { name: "Keras", icon: <SiKeras color="#D00000" /> },
  { name: "OpenCV", icon: <SiOpencv color="#5C8CCB" /> },
  { name: "scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },

  // Data
  { name: "pandas", icon: <SiPandas color="#150458" /> },
  { name: "NumPy", icon: <SiNumpy color="#013243" /> },
  { name: "Matplotlib", icon: <FaChartLine color="#2563eb" /> },
  { name: "Seaborn", icon: <FaChartBar color="#6366f1" /> },
  { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },

  // Web / Backend
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "FastAPI", icon: <SiFastapi color="#05998B" /> },
  { name: "Django", icon: <SiDjango color="#092E20" /> },
  { name: "Flask", icon: <SiFlask color="#000000" /> },
  { name: "REST APIs", icon: <FaServer color="#0f172a" /> },

  // Databases
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" /> },
  { name: "SQLite", icon: <SiSqlite color="#003B57" /> },

  // DevOps / Cloud
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },

  // Engineering
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "CI/CD", icon: <FaGithub color="#181717" /> },
  { name: "Microservices", icon: <SiRedis color="#DC382D" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-tile"
            title={skill.name}
            aria-label={skill.name}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
