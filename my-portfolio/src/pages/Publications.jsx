import { motion } from "framer-motion";
import { publications } from "../data/content";

export default function Publications() {
  return (
    <section className="max-w-3xl mx-auto py-12 md:py-16">
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">Publications</h1>
      <p className="text-ink-soft text-lg mb-12 max-w-xl">
        Research write-ups from projects that grew past a class assignment.
      </p>

      <div className="flex flex-col gap-8">
        {publications.map((pub, i) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="border-t border-cream-deep pt-6"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="font-display text-xl md:text-2xl text-ink">{pub.title}</h2>
              <span className="shrink-0 text-xs font-semibold text-teal bg-teal/10 border border-teal/30 rounded-full px-3 py-1">
                {pub.type}
              </span>
            </div>
            <p className="text-ink-soft font-semibold mb-1">{pub.venue}</p>
            <p className="text-sm text-ink-soft mb-3">{pub.date}</p>
            <p className="text-ink-soft leading-relaxed mb-4 max-w-2xl">{pub.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-ink-soft border border-cream-deep rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-coral-deep underline decoration-coral decoration-2 underline-offset-4 hover:text-coral transition-colors"
            >
              View publication
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
