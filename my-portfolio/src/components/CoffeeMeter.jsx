import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import coffeeCard from "../assets/images/coffee-code-curiosity.png";
import Confetti from "./Confetti";

export default function CoffeeMeter() {
  const { scrollYProgress } = useScroll();
  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, 27]);
  const fillY = useTransform(fillHeight, (h) => 49 - h);
  const liquidColor = useTransform(scrollYProgress, [0, 1], ["#E8C79A", "#4A2E1D"]);
  const percent = useTransform(scrollYProgress, (v) => Math.round(v * 100));
  const [percentLabel, setPercentLabel] = useState(0);
  const [celebrated, setCelebrated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useMotionValueEvent(percent, "change", (v) => setPercentLabel(v));

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.96 && !celebrated) {
      setCelebrated(true);
      setShowToast(true);
      setShowConfetti(true);
    }
  });

  useEffect(() => {
    if (!showConfetti) return;
    const t = setTimeout(() => setShowConfetti(false), 1000);
    return () => clearTimeout(t);
  }, [showConfetti]);

  const replay = () => {
    setShowToast(true);
    setShowConfetti(true);
  };

  return (
    <div className="fixed right-4 md:right-6 bottom-6 z-40 flex flex-col items-center">
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative mb-3 w-48 rounded-2xl bg-white border border-cream-deep shadow-xl p-3"
        >
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-ink text-cream text-xs flex items-center justify-center hover:bg-coral-deep transition-colors"
            aria-label="Dismiss"
          >
            ✕
          </button>
          <img
            src={coffeeCard}
            alt="Fueled by coffee, code and curiosity"
            className="w-full rounded-xl mb-2"
            style={{ mixBlendMode: "multiply" }}
          />
          <p className="font-hand text-coral-deep text-center text-base leading-snug">
            Fully caffeinated ☕ thanks for scrolling all the way down!
          </p>
        </motion.div>
      )}

      <motion.button
        type="button"
        onClick={replay}
        whileHover={{ scale: 1.06, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex flex-col items-center gap-1"
        title="You're brewing through my portfolio"
        aria-label={`Scroll progress: ${percentLabel}% brewed`}
      >
        <span className="text-xs font-semibold text-ink-soft bg-cream border border-cream-deep rounded-full px-2.5 py-1 shadow-sm">
          ☕ {percentLabel}%
        </span>

        <motion.span
          className="relative drop-shadow-md"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {showConfetti && <Confetti />}
          <svg width="52" height="66" viewBox="0 0 52 66" aria-hidden="true">
            <ellipse cx="26" cy="58" rx="18" ry="4" fill="var(--color-cream-deep)" opacity="0.6" />

            <motion.g
              animate={{ y: [0, -4, 0], opacity: [0.25, 0.7, 0.25] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M17 17 C 12 13 21 9 16 5" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.6" strokeLinecap="round" />
            </motion.g>
            <motion.g
              animate={{ y: [0, -4, 0], opacity: [0.25, 0.7, 0.25] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <path d="M24 17 C 19 13 28 9 23 5" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.6" strokeLinecap="round" />
            </motion.g>
            <motion.g
              animate={{ y: [0, -4, 0], opacity: [0.25, 0.7, 0.25] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            >
              <path d="M31 17 C 26 13 35 9 30 5" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.6" strokeLinecap="round" />
            </motion.g>

            <clipPath id="coffeeMeterClip">
              <rect x="12" y="22" width="24" height="27" rx="4" />
            </clipPath>
            <motion.rect
              x="12"
              width="24"
              clipPath="url(#coffeeMeterClip)"
              height={fillHeight}
              y={fillY}
              style={{ fill: liquidColor }}
            />
            <motion.ellipse cx="24" rx="10.5" ry="1.8" cy={fillY} fill="#F6E2C2" opacity="0.85" />

            <rect x="9" y="19" width="30" height="34" rx="7" fill="var(--color-cream)" stroke="var(--color-ink)" strokeWidth="2.2" />
            <ellipse cx="24" cy="19" rx="15" ry="3.2" fill="var(--color-cream-deep)" stroke="var(--color-ink)" strokeWidth="1.6" />

            <path
              d="M20 40 C 20 37.5 22 37.5 22 35.5 C 22 37.5 24 37.5 24 40 C 24 42.5 22 43.5 22 43.5 C 22 43.5 20 42.5 20 40 Z"
              fill="var(--color-coral)"
              opacity="0.55"
            />

            <path d="M39 27 C 50 27 50 47 39 47" fill="none" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </motion.span>
      </motion.button>
    </div>
  );
}
