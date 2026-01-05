import React, { useEffect, useMemo, useState } from "react";

function Navbar({ theme, toggleTheme }) {
  const links = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "research", label: "Research" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "publications", label: "Publications" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    // Warn if any section ids are missing
    links.forEach((l) => {
      if (!document.getElementById(l.id)) {
        // eslint-disable-next-line no-console
        console.warn(`Section not found: #${l.id}`);
      }
    });

    const setClosestToTop = () => {
      const y = window.scrollY + 140; // navbar offset
      let current = sections[0]?.id || "home";

      for (const sec of sections) {
        if (sec.offsetTop <= y) current = sec.id;
      }
      setActive(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) setActive(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-25% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    window.addEventListener("scroll", setClosestToTop, { passive: true });
    setClosestToTop();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", setClosestToTop);
    };
  }, [links]);

  return (
    <header className="navbar">
      <div className="logo">HARSHITHA PEDDI</div>

      <nav className="nav-links">
        {/* PILL GROUP */}
        <div className="nav-pill">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
            >
              {l.label}
            </a>
          ))}

          {/* Theme toggle INSIDE pill */}
          <button className="theme-toggle" onClick={toggleTheme} type="button">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* RESUME OUTSIDE PILL */}
        <div className="dropdown resume-standalone">
          <button className="dropdown-toggle" type="button">
            Resume ▾
          </button>
          <div className="dropdown-menu">
            <a href="/resume-sde.pdf" target="_blank" rel="noreferrer">
              SDE
            </a>
            <a href="/resume-ai.pdf" target="_blank" rel="noreferrer">
              AI
            </a>
            <a href="/resume-da.pdf" target="_blank" rel="noreferrer">
              Data Analyst
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
