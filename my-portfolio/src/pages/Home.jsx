import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile, journey, projects, experience, education } from "../data/content";
import portraitBlob from "../assets/images/portrait-blob.png";
import skillsMindmap from "../assets/images/skills-mindmap.png";
import HomeIcon, { Glyph } from "../components/HomeIcons";
import ProjectPlaceholder from "../components/ProjectPlaceholder";

const featuredProjects = projects.filter((p) => p.featured);
const featuredExperience = experience.filter((e) => e.featured);
const experienceIcon = { coral: "briefcase", amber: "building" };

function Bubble({ className, size, delay = 0, duration = 6 }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute rounded-full ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SectionHeading({ title, to, label }) {
  return (
    <div className="flex items-baseline justify-between mb-6">
      <h2 className="font-display text-2xl md:text-3xl text-ink">{title}</h2>
      <Link
        to={to}
        className="text-sm font-semibold text-coral-deep hover:text-coral transition-colors whitespace-nowrap"
      >
        {label} →
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-12 md:py-20">
      {/* Hero */}
      <section className="relative max-w-4xl mb-20">
        <Bubble className="bg-teal/10 -right-6 top-4 hidden md:block" size={70} duration={7} />
        <Bubble className="bg-amber/15 right-24 -top-6 hidden md:block" size={30} delay={1} duration={5} />
        <Bubble className="bg-coral/10 right-2 bottom-10 hidden md:block" size={44} delay={0.5} duration={8} />

        <div className="relative grid md:grid-cols-[1fr_540px] gap-6 items-center mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal bg-teal/10 border border-teal/30 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-teal" />
              {profile.status}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-body text-coral-deep text-lg mb-3"
            >
              Hey, I'm Harshi 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl leading-tight text-ink mb-6"
            >
              {profile.tagline}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="justify-self-center"
          >
            <img
              src={portraitBlob}
              alt={profile.name}
              className="w-full max-w-md md:max-w-none"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative text-ink-soft text-lg max-w-xl mb-8 leading-relaxed"
        >
          {profile.bio}
        </motion.p>

        <div className="relative flex flex-wrap gap-2">
          {profile.tags.map((tag, i) => (
            <motion.span
              key={tag}
              whileHover={{ y: -2 }}
              className="text-sm px-4 py-1.5 rounded-full text-coral-deep cursor-default"
              style={{ background: i % 2 === 0 ? "#F6D9C8" : "#FBE3B8" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      {/* My Journey */}
      <section className="mb-20">
        <h2 className="font-display text-2xl md:text-3xl text-ink text-center mb-2">My Journey</h2>
        <div className="flex justify-center mb-12">
          <svg width="70" height="16" viewBox="0 0 70 16" fill="none" aria-hidden="true">
            <path
              d="M2 12 C 10 3, 18 3, 25 10 S 40 16, 47 6 S 60 1, 68 8"
              stroke="var(--color-coral)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          <svg
            className="hidden lg:block absolute top-6 left-0 w-full h-10 -translate-y-1/2"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,10 C 8,-4 17,-4 25,10 S 42,24 50,10 S 67,-4 75,10 S 92,24 100,10"
              stroke="var(--color-coral)"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="1 4"
              strokeLinecap="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {journey.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col items-center text-center ${
                i % 2 === 0 ? "lg:-translate-y-2" : "lg:translate-y-2"
              }`}
            >
              <span className="text-xs font-semibold text-ink-soft/60 mb-2 tracking-widest">
                0{i + 1}
              </span>
              <motion.div whileHover={{ scale: 1.12, rotate: -4 }} className="relative z-10 bg-cream">
                <HomeIcon name={step.icon} accent={step.accent} />
              </motion.div>
              <h3 className="font-display text-lg text-ink mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed max-w-[220px]">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Preview */}
      <section className="mb-20">
        <SectionHeading title="Experience Preview" to="/experience" label="View all experience" />
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredExperience.map((job, i) => (
            <motion.div
              key={job.role + job.time}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl bg-white border border-cream-deep p-6 transition-shadow hover:shadow-lg hover:shadow-coral/10"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <HomeIcon name={experienceIcon[job.color] || "briefcase"} accent={job.color === "amber" ? "amber" : "coral"} size={26} />
                <span className="text-xs font-semibold text-ink-soft bg-cream-deep rounded-full px-3 py-1 whitespace-nowrap">
                  {job.time}
                </span>
              </div>
              <h3 className="font-display text-lg text-ink mb-1">{job.role}</h3>
              <p className="text-sm text-ink-soft mb-4">
                {job.org}
                {job.place ? ` · ${job.place}` : ""}
              </p>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{job.summary}</p>
              <div className="flex flex-wrap gap-2">
                {(job.previewTags || []).map((tag) => (
                  <span key={tag} className="text-xs text-ink-soft border border-cream-deep rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What I Work With */}
      <section className="mb-20">
        <h2 className="font-display text-2xl md:text-3xl text-ink text-center mb-2">What I Work With</h2>
        <div className="flex justify-center mb-10">
          <svg width="70" height="16" viewBox="0 0 70 16" fill="none" aria-hidden="true">
            <path
              d="M2 12 C 10 3, 18 3, 25 10 S 40 16, 47 6 S 60 1, 68 8"
              stroke="var(--color-coral)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <motion.img
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          src={skillsMindmap}
          alt="Skills mind map centered on Harshi's photo, grouped into AI & ML, Backend, Frontend, Cloud & DevOps, Data, and Research"
          className="w-full max-w-4xl mx-auto rounded-3xl"
        />
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <SectionHeading title="Featured Projects" to="/projects" label="View all projects" />
        <div className="lg:flex lg:items-center lg:gap-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-cream-deep hover:border-coral transition-colors hover:-translate-y-1 duration-200"
              >
                <div className="h-32 w-full overflow-hidden bg-cream-deep">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="group-hover:scale-105 transition-transform duration-300 w-full h-full">
                      <ProjectPlaceholder icon={project.placeholderIcon} accent={project.placeholderAccent} />
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-ink mb-1 group-hover:text-coral-deep transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-soft mb-4 flex-1 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs text-ink-soft border border-cream-deep rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-coral-deep group-hover:text-coral transition-colors">
                    View project →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 10, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block w-32 shrink-0 pl-6"
          >
            <p className="font-hand text-2xl leading-snug text-coral-deep">
              Building impactful products that users love
              <span className="inline-block ml-1">❤️</span>
            </p>
            <svg width="46" height="30" viewBox="0 0 46 30" fill="none" className="mt-1" aria-hidden="true">
              <path
                d="M42 6 C 26 2, 12 6, 6 16 C 4 20, 6 23, 8 25"
                stroke="var(--color-coral)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M2 19 L8 25 L14 20" stroke="var(--color-coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Education + CTA */}
      <section className="grid md:grid-cols-2 lg:grid-cols-[1fr_1.6fr] gap-6">
        <motion.div whileHover={{ y: -3 }} className="rounded-2xl bg-white border border-cream-deep p-6 transition-shadow hover:shadow-lg hover:shadow-teal/10">
          <div className="flex items-center gap-3 mb-4">
            <HomeIcon name="building" accent="teal" size={16} />
            <h3 className="font-display text-lg text-ink">Education</h3>
          </div>
          <p className="font-display text-base text-ink leading-snug">M.S. Artificial Intelligence,</p>
          <p className="font-display text-base text-ink leading-snug mb-2">Data Science Track</p>
          <p className="text-sm text-ink-soft mb-3">{education.school}</p>
          <p className="text-lg font-semibold text-coral-deep">{education.time}</p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-coral to-amber text-cream p-8 flex flex-col justify-center">
          <Bubble className="bg-white/10 -right-8 -top-8" size={128} duration={9} />
          <Bubble className="bg-white/10 right-10 bottom-4" size={64} delay={1.2} duration={7} />
          <Bubble className="bg-white/15 left-8 top-6" size={20} delay={0.6} duration={5} />
          <svg
            className="absolute right-6 top-6 opacity-30"
            width="80"
            height="24"
            viewBox="0 0 90 26"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 18 C 14 4, 24 4, 32 14 S 50 24, 58 12 S 76 2, 88 10"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <h3 className="relative font-display text-2xl mb-2">{profile.ctaHeading}</h3>
          <p className="relative text-cream/90 mb-6 max-w-sm">{profile.ctaBody}</p>
          <div className="relative flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            >
              <Glyph name="mail" className="text-base" /> Email
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            >
              <Glyph name="linkedin" className="text-base" /> LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            >
              <Glyph name="github" className="text-base" /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={profile.calendly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-cream text-coral-deep hover:bg-white transition-colors"
            >
              <Glyph name="chat" className="text-base" /> Let's Talk →
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
