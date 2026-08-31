import { motion } from "framer-motion";
import { education, experience, research, skillGroups } from "../data/content";
import TechChip from "../components/TechChip";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ResearchTimeline from "../components/ResearchTimeline";
import expMobileSummary from "../assets/images/exp_mobile_summary.png";
import expDesktopSummary from "../assets/images/exp_desktop_summary.png";

export default function Experience() {
  return (
    <div className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-12 md:mb-16 px-2"
      >
        <img
          src={expMobileSummary}
          alt="I build in two worlds: professional experience and research, summarized"
          className="md:hidden w-full max-w-sm mx-auto"
        />
        <img
          src={expDesktopSummary}
          alt="I build in two worlds: professional experience and research, summarized"
          className="hidden md:block w-full"
        />
      </motion.div>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-3xl text-ink mb-8">Education</h2>
        <div>
          <p className="text-sm text-ink-soft mb-1">{education.time}</p>
          <h3 className="font-display text-xl text-ink">{education.degree}</h3>
          <p className="text-ink-soft mb-3">
            {education.school} · {education.place}
          </p>
          <ul className="space-y-1.5 text-ink-soft">
            {education.points.map((point, i) => (
              <li
                key={i}
                className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-coral"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="font-display text-3xl text-ink mb-8">Research</h2>
        <ResearchTimeline items={research} />
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="font-display text-3xl text-ink mb-8">Professional</h2>
        <ExperienceTimeline roles={experience} />
      </section>

      <section className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="font-display text-3xl text-ink mb-1">What I work with</h2>
          <p className="text-sm text-ink-soft">Hover for love <span aria-hidden="true">❤️</span></p>
        </div>
        <div className="flex flex-col gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
            >
              <p className="text-sm text-ink-soft mb-3">{group.title}</p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <TechChip key={item} label={item} size="md" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
