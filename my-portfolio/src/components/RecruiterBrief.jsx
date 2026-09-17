import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, recruiterBrief } from "../data/content";
import HomeIcon, { Glyph } from "./HomeIcons";

const EVIDENCE_STYLE = {
  "Strong evidence": "bg-teal/10 text-teal border-teal/30",
  Proven: "bg-amber/15 text-coral-deep border-amber/40",
};

export default function RecruiterBrief({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/40 backdrop-blur-sm p-4 py-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl bg-cream border border-cream-deep shadow-2xl p-6 md:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-cream-deep flex items-center justify-center text-ink-soft hover:text-coral-deep hover:border-coral transition-colors"
            >
              ✕
            </button>

            <p className="inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-coral-deep bg-coral/10 border border-coral/30 rounded-full px-3 py-1 mb-3">
              Candidate Portfolio
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-1">Recruiter 30-Second Briefing</h2>
            <p className="text-sm text-ink-soft mb-6">Technical Recruiter Assessment</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-white border border-cream-deep p-4 mb-6">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-16 h-16 rounded-full object-cover border border-cream-deep shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-display text-lg text-ink">{profile.name}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{recruiterBrief.summary}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1">
                    <Glyph name="pin" className="text-sm" /> {profile.location}
                  </span>
                  {profile.openToRelocate && (
                    <span className="text-coral-deep bg-coral/10 border border-coral/30 rounded-full px-2.5 py-1 font-semibold">
                      Open to relocate
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="flex items-center gap-2 text-sm font-semibold text-ink mb-3">
              <Glyph name="rocket" className="text-base" /> Target Interview Positions
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {recruiterBrief.targetPositions.map((pos, i) => (
                <span
                  key={pos}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full text-coral-deep"
                  style={{ background: i % 2 === 0 ? "#F6D9C8" : "#FBE3B8" }}
                >
                  {pos}
                </span>
              ))}
            </div>

            <p className="flex items-center gap-2 text-sm font-semibold text-ink mb-3">
              <Glyph name="sparkle" className="text-base" /> 5 Reasons {profile.nickname} Stands Out
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
              {recruiterBrief.reasons.map((r) => (
                <div key={r.title} className="rounded-2xl border border-cream-deep bg-white p-3.5">
                  <HomeIcon name={r.icon} accent={r.accent} size={16} />
                  <p className="font-display text-sm text-ink mt-2 mb-1 leading-snug">{r.title}</p>
                  <p className="text-xs text-ink-soft leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-ink mb-3">Technical Recruiter Assessment</p>
            <div className="rounded-2xl border border-cream-deep bg-white overflow-hidden mb-6">
              {recruiterBrief.assessment.map((row, i) => (
                <div
                  key={row.category}
                  className={`flex items-start gap-3 p-3.5 ${i > 0 ? "border-t border-cream-deep" : ""}`}
                >
                  <HomeIcon name={row.icon} accent="teal" size={14} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-display text-sm text-ink">{row.category}</span>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wide rounded-full px-2 py-0.5 border ${EVIDENCE_STYLE[row.evidence]}`}
                      >
                        {row.evidence}
                      </span>
                    </div>
                    <p className="text-xs text-ink-soft leading-relaxed">{row.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-ink mb-3">Quick Proof (Real Numbers)</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {recruiterBrief.quickProof.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-coral/10 border border-coral/20 p-3.5 text-center">
                  <p className="font-display text-xl text-coral-deep leading-tight">{stat.value}</p>
                  <p className="text-xs text-ink mt-1 font-semibold">{stat.label}</p>
                  <p className="text-[11px] text-ink-soft">{stat.note}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft mb-6 pt-4 border-t border-cream-deep">
              <span className="inline-flex items-center gap-2">
                <Glyph name="mail" className="text-base" /> {profile.email}
              </span>
              {profile.phone && (
                <span className="inline-flex items-center gap-2">
                  <Glyph name="chat" className="text-base" /> {profile.phone}
                </span>
              )}
              <span className="inline-flex items-center gap-2">
                <Glyph name="pin" className="text-base" /> {profile.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={profile.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-coral text-cream hover:bg-coral-deep transition-colors"
              >
                <Glyph name="calendar" className="text-base" /> Schedule Interview
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-coral-deep text-coral-deep hover:bg-coral/10 transition-colors"
              >
                View Full Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-cream-deep text-ink hover:bg-cream-deep transition-colors"
              >
                <Glyph name="mail" className="text-base" /> Email Candidate
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
