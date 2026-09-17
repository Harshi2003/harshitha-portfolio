import { useState } from "react";
import { motion } from "framer-motion";
import { Glyph } from "./HomeIcons";

const STATUS_STYLE = {
  Completed: "bg-teal/15 text-teal border-teal/30",
  "In Progress": "bg-amber/20 text-coral-deep border-amber/40",
};

export default function CredentialCard({ credential }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="relative w-full text-left h-48 [perspective:1200px]"
      aria-label={`${credential.name}, click to flip`}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-white border border-cream-deep p-5 flex flex-col [backface-visibility:hidden]">
          <span
            className={`self-start text-[10px] font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 border mb-3 ${STATUS_STYLE[credential.status]}`}
          >
            {credential.status}
          </span>
          <p className="font-display text-lg text-ink leading-snug mb-1">{credential.name}</p>
          <p className="text-sm text-ink-soft">{credential.issuer}</p>
          <span className="mt-auto text-xs text-ink-soft/60 flex items-center gap-1">
            <Glyph name="sparkle" className="text-sm" /> Tap to see skills
          </span>
        </div>

        <div
          className="absolute inset-0 rounded-2xl bg-cream-deep/40 border border-cream-deep p-5 flex flex-col [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-coral-deep mb-2">Skills covered</p>
          <div className="flex flex-wrap gap-1.5 overflow-hidden">
            {credential.skills.map((s) => (
              <span key={s} className="text-[11px] font-medium text-ink-soft bg-white border border-cream-deep rounded-full px-2 py-1">
                {s}
              </span>
            ))}
          </div>
          <span className="mt-auto text-xs text-ink-soft/60">Tap to flip back</span>
        </div>
      </motion.div>
    </button>
  );
}
