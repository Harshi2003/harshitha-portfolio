import { motion } from "framer-motion";
import { education, experience, research, skillGroups } from "../data/content";

const dotColor = {
  coral: "bg-coral",
  teal: "bg-teal",
  amber: "bg-amber",
  ink: "bg-ink-soft",
};

function Timeline({ items, colorKey }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-cream-deep" />
      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <motion.div
            key={item.role + item.time}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span
              className={`absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full ${
                colorKey ? dotColor[item[colorKey]] : "bg-coral"
              }`}
            />
            <p className="text-sm text-ink-soft mb-1">{item.time}</p>
            <h3 className="font-display text-xl text-ink">{item.role}</h3>
            <p className="text-ink-soft mb-3">
              {item.org}
              {item.focus ? ` · ${item.focus}` : ""}
            </p>
            <ul className="space-y-1.5 text-ink-soft">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-coral"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto py-12 md:py-16">
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-12">Where I've worked</h1>

      <h2 className="font-display text-3xl text-ink mb-8">Education</h2>
      <div className="mb-16">
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

      <h2 className="font-display text-3xl text-ink mb-8">Research</h2>
      <div className="mb-16">
        <Timeline items={research} />
      </div>

      <h2 className="font-display text-3xl text-ink mb-8">Professional</h2>
      <div className="mb-16">
        <Timeline items={experience} colorKey="color" />
      </div>

      <h2 className="font-display text-3xl text-ink mb-8">What I work with</h2>
      <div className="flex flex-col gap-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="text-sm text-ink-soft mb-2">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="text-sm px-3 py-1 rounded-full bg-cream-deep text-ink">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
