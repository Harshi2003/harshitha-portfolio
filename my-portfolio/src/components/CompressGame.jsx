import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "./Confetti";

const CAP = 421;
const TARGET_MB = 80;
const RATIO = CAP / TARGET_MB;
const WIN_TARGET = 6;
const TICK_MS = 650;

export default function CompressGame() {
  const [fill, setFill] = useState(0);
  const [compressions, setCompressions] = useState(0);
  const [status, setStatus] = useState("playing");

  useEffect(() => {
    if (status !== "playing") return undefined;
    const id = setInterval(() => {
      setFill((f) => {
        const next = f + 25 + Math.random() * 30;
        if (next >= CAP) {
          setStatus("lost");
          return CAP;
        }
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [status]);

  const compress = () => {
    if (status !== "playing") return;
    setFill((f) => f / RATIO);
    setCompressions((c) => {
      const next = c + 1;
      if (next >= WIN_TARGET) setStatus("won");
      return next;
    });
  };

  const reset = () => {
    setFill(0);
    setCompressions(0);
    setStatus("playing");
  };

  const pct = Math.min(100, (fill / CAP) * 100);
  const barColor = pct > 80 ? "var(--color-coral-deep)" : pct > 50 ? "var(--color-amber)" : "var(--color-teal)";

  return (
    <div className="rounded-2xl border border-cream-deep bg-white p-5">
      <p className="text-sm text-ink-soft mb-4 leading-relaxed">
        User-item interaction vectors are pouring in. Hit <span className="font-semibold text-ink">Compress</span>{" "}
        before the buffer overflows — this is the actual bottleneck my ARES research was built to solve.
      </p>

      <div className="flex items-center justify-between text-xs font-semibold text-ink-soft mb-1.5">
        <span>Memory buffer</span>
        <span>{Math.round(fill)} / {CAP} MB</span>
      </div>
      <div className="h-4 rounded-full bg-cream-deep overflow-hidden mb-5">
        <motion.div
          className="h-full rounded-full"
          style={{ background: barColor }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {status === "playing" && (
        <div className="flex items-center justify-between">
          <motion.button
            type="button"
            onClick={compress}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            className="px-5 py-2.5 rounded-full bg-coral text-cream font-semibold text-sm hover:bg-coral-deep transition-colors"
          >
            Compress ⚡
          </motion.button>
          <span className="text-xs text-ink-soft">{compressions}/{WIN_TARGET} compressions</span>
        </div>
      )}

      {status === "lost" && (
        <div>
          <p className="text-sm font-semibold text-coral-deep mb-2">Buffer overflowed 💥</p>
          <p className="text-sm text-ink-soft leading-relaxed mb-4">
            This is exactly the wall classic collaborative filtering hits as interaction data scales — memory and
            compute blow up. ARES solves it with quantization and bit-sliced vector compression instead of just
            throwing more hardware at it.
          </p>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 rounded-full border border-coral text-coral-deep font-semibold text-sm hover:bg-coral/10 transition-colors"
          >
            Try again
          </button>
        </div>
      )}

      {status === "won" && (
        <div className="relative">
          <Confetti className="left-1/2 top-0" />
          <p className="text-sm font-semibold text-teal mb-2">Buffer under control ✓</p>
          <p className="text-sm text-ink-soft leading-relaxed mb-4">
            That's the idea behind ARES: quantized, bit-sliced vectors cut Amazon-book training time from 833 min to
            3 min — a 157x to 277x speedup over LightGCN — and memory from 421MB to 80MB, without losing
            Precision@20, Recall@20, or NDCG@20.
          </p>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 rounded-full border border-teal text-teal font-semibold text-sm hover:bg-teal/10 transition-colors"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
