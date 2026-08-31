import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data/content";

const links = [
  { to: "/", label: "home" },
  { to: "/experience", label: "experience" },
  { to: "/projects", label: "projects" },
  { to: "/publications", label: "publications" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const linkClass = ({ isActive }) =>
    `font-body text-sm tracking-wide pb-1 border-b-2 transition-colors ${
      isActive
        ? "border-coral text-ink"
        : "border-transparent text-ink-soft hover:text-ink"
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 md:px-12 pt-8 pb-4 flex items-center justify-between">
        <NavLink to="/" className="font-display text-xl text-ink">
          harshi.
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm font-semibold tracking-wide px-4 py-2 rounded-full bg-coral text-cream hover:bg-coral-deep transition-colors ml-4"
          >
            resume
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden font-body text-sm tracking-wide px-3 py-1.5 rounded-full border border-ink-soft/30 text-ink"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </header>

      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm font-semibold tracking-wide px-4 py-2 rounded-full bg-coral text-cream text-center hover:bg-coral-deep transition-colors w-fit"
          >
            resume
          </a>
        </nav>
      )}

      <main className="flex-1 px-6 md:px-12">
        <Outlet />
      </main>

      <footer className="px-6 md:px-12 py-8 mt-16 text-sm text-ink-soft flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
        <span>{profile.name}</span>
        {!isHome && (
          <>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">
              github
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">
              linkedin
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-coral transition-colors">
              {profile.email}
            </a>
            <a href={profile.calendly} target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">
              schedule a chat
            </a>
          </>
        )}
      </footer>
    </div>
  );
}
