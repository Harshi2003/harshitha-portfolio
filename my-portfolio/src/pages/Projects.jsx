import { motion } from "framer-motion";
import { projects } from "../data/content";
import ProjectPlaceholder from "../components/ProjectPlaceholder";
import TechChip from "../components/TechChip";
import coffeeNote from "../assets/images/coffee-code-curiosity.png";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-12 md:py-16">
      <div className="md:flex md:items-center md:justify-between md:gap-10 mb-8 md:mb-14">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">Things I've built</h1>
          <p className="text-ink-soft text-lg max-w-xl">
            A mix of research, side projects, and things that started as a weekend idea and did
            not stay that way.
          </p>
        </div>

        <motion.img
          src={coffeeNote}
          alt="Sticker: Fueled by coffee, code & curiosity!"
          initial={{ opacity: 0, y: 8, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block w-72 lg:w-80 shrink-0 mix-blend-multiply"
        />
      </div>

      <motion.img
        src={coffeeNote}
        alt="Sticker: Fueled by coffee, code & curiosity!"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden w-56 -rotate-2 mix-blend-multiply mb-10"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-cream-deep hover:border-coral transition-colors hover:-translate-y-1 duration-200"
          >
            <div className="h-44 w-full overflow-hidden bg-cream-deep">
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
              <h2 className="font-display text-xl text-ink mb-1 group-hover:text-coral-deep transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-coral-deep font-semibold mb-2">{project.subtitle}</p>
              <p className="text-ink-soft text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechChip key={tag} label={tag} size="sm" />
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
