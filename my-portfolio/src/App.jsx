import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResearchExperience from "./components/ResearchExperience";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <ResearchExperience />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Harshitha Peddi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
