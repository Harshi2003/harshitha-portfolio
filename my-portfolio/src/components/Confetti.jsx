import { motion } from "framer-motion";

const COLORS = [
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-teal)",
  "var(--color-coral-deep)",
];

export default function Confetti({ count = 26, className = "left-1/2 top-2" }) {
  const pieces = Array.from({ length: count });
  return (
    <div className={`pointer-events-none absolute w-0 h-0 ${className}`}>
      {pieces.map((_, i) => {
        const angle = (i / pieces.length) * Math.PI * 2;
        const distance = 90 + Math.random() * 90;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance - 30;
        const size = 10 + Math.random() * 10;
        return (
          <motion.span
            key={i}
            className="absolute rounded-sm"
            style={{ width: size, height: size, background: COLORS[i % COLORS.length] }}
            initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 0.4 }}
            animate={{
              opacity: 0,
              x,
              y,
              scale: 1,
              rotate: (i % 2 === 0 ? 1 : -1) * (220 + Math.random() * 260),
            }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
