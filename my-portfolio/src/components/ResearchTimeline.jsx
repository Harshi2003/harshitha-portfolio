import { useState } from "react";
import { motion } from "framer-motion";
import { Glyph } from "./HomeIcons";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "methodology", label: "Methodology" },
  { key: "findings", label: "Findings" },
];

export default function ResearchTimeline({ items }) {
  const [selected, setSelected] = useState(0);
  const [tab, setTab] = useState("overview");
  const item = items[selected];

  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8">
      {/* Research list */}
      <div className="relative pl-2">
        <div className="absolute left-[21px] top-4 bottom-4 w-px border-l-2 border-dashed border-cream-deep" />
        <div className="flex flex-col gap-3">
          {items.map((r, i) => {
            const isActive = i === selected;
            const bg = { coral: "bg-coral", amber: "bg-amber", teal: "bg-teal" }[r.accent] || "bg-coral";
            return (
              <button
                key={r.role + r.time}
                type="button"
                onClick={() => {
                  setSelected(i);
                  setTab("overview");
                }}
                className={`relative flex items-center gap-3 text-left rounded-2xl border p-3 transition-colors ${
                  isActive
                    ? "bg-cream-deep/50 border-coral shadow-sm"
                    : "bg-transparent border-transparent hover:bg-cream-deep/30"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-xl text-cream shrink-0 ${bg}`}
                  style={{ width: isActive ? 40 : 32, height: isActive ? 40 : 32 }}
                >
                  <Glyph name={r.badgeIcon || "flask"} className="text-lg" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className={`block font-display text-sm truncate ${isActive ? "text-coral-deep" : "text-ink"}`}>
                    {r.focus}
                  </span>
                  <span className="block text-xs text-ink-soft truncate">{r.org}</span>
                  <span className="block text-xs text-ink-soft/70">{r.time}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="rounded-2xl bg-cream-deep/30 border border-cream-deep p-6 md:p-8">
        <motion.div key={selected} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <p className="font-display text-2xl text-ink mb-1">{item.role}</p>
          <p className="text-coral-deep font-semibold mb-3">
            {item.org} · {item.focus}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <Glyph name="calendar" className="text-base" /> {item.time}
            </span>
          </div>

          <div className="flex gap-6 border-b border-cream-deep mb-6 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`pb-3 text-sm font-semibold tracking-wide border-b-2 whitespace-nowrap transition-colors ${
                  tab === t.key ? "border-coral text-ink" : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <motion.div key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            {tab === "overview" && (
              <div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-coral-deep mb-1.5">
                      The Problem
                    </p>
                    <p className="text-sm text-ink-soft leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-1.5">My Approach</p>
                    <p className="text-sm text-ink-soft leading-relaxed">{item.approach}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-cream-deep p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft mb-3">Key Findings</p>
                  <ul className="space-y-2">
                    {item.findings.map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink-soft leading-relaxed">
                        <span className="text-teal shrink-0 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "methodology" && (
              <div className="relative pl-5">
                <div className="absolute left-0 top-1 bottom-1 border-l-2 border-dashed border-cream-deep" />
                <ul className="space-y-3">
                  {item.methodology.map((step, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                      <span className="text-teal shrink-0 mt-0.5">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "findings" && (
              <ul className="space-y-2.5">
                {item.findings.map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                    <span className="text-coral shrink-0 mt-0.5">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
