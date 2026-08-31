import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiGnubash,
  SiLinux,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiFastapi,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiApachecassandra,
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithubactions,
  SiGithubcopilot,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiDjango,
  SiVite,
  SiFlutter,
  SiFirebase,
  SiNeo4J,
  SiLangchain,
  SiLanggraph,
  SiCrewai,
  SiClaude,
  SiCursor,
  SiYolo,
  SiOptuna,
  SiAnthropic,
  SiVercel,
  SiSentry,
  SiZod,
  SiTemporal,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const ICONS = {
  Python: [SiPython, "#3776AB"],
  Java: [FaJava, "#B07219"],
  "C++": [SiCplusplus, "#00599C"],
  "C++17": [SiCplusplus, "#00599C"],
  JavaScript: [SiJavascript, "#B8A100"],
  TypeScript: [SiTypescript, "#3178C6"],
  Shell: [SiGnubash, "#4EAA25"],
  Linux: [SiLinux, "#4A4A4A"],
  React: [SiReact, "#149ECA"],
  Redux: [SiRedux, "#764ABC"],
  HTML5: [SiHtml5, "#E34F26"],
  CSS3: [SiCss, "#1572B6"],
  "Node.js": [SiNodedotjs, "#3C873A"],
  FastAPI: [SiFastapi, "#059862"],
  GraphQL: [SiGraphql, "#D6249F"],
  PostgreSQL: [SiPostgresql, "#336791"],
  Redis: [SiRedis, "#D82C20"],
  Cassandra: [SiApachecassandra, "#1287B1"],
  Kafka: [SiApachekafka, "#4A4A4A"],
  Spark: [SiApachespark, "#E25A1C"],
  Airflow: [SiApacheairflow, "#017CEE"],
  AWS: [FaAws, "#B45309"],
  GCP: [SiGooglecloud, "#4285F4"],
  Docker: [SiDocker, "#0C7FC9"],
  Kubernetes: [SiKubernetes, "#3468C0"],
  Git: [SiGit, "#E4491C"],
  "GitHub Actions": [SiGithubactions, "#1C6FDB"],
  "GitHub Copilot": [SiGithubcopilot, "#4A4A4A"],
  PyTorch: [SiPytorch, "#C4460F"],
  pandas: [SiPandas, "#7A0D5E"],
  NumPy: [SiNumpy, "#01608C"],
  "scikit-learn": [SiScikitlearn, "#C7690A"],
  Django: [SiDjango, "#0C4B33"],
  Vite: [SiVite, "#7A3FE0"],
  Flutter: [SiFlutter, "#0D7FBF"],
  Firebase: [SiFirebase, "#B45309"],
  Neo4j: [SiNeo4J, "#008CC1"],
  LangChain: [SiLangchain, "#1C3C3C"],
  LangGraph: [SiLanggraph, "#1C3C3C"],
  CrewAI: [SiCrewai, "#FF5A1F"],
  Anthropic: [SiAnthropic, "#B45309"],
  Vercel: [SiVercel, "#4A4A4A"],
  Sentry: [SiSentry, "#8C4A2F"],
  Zod: [SiZod, "#3178C6"],
  Temporal: [SiTemporal, "#000000"],
  "Claude Code": [SiClaude, "#B45309"],
  Cursor: [SiCursor, "#4A4A4A"],
  YOLOv8n: [SiYolo, "#0E7A8C"],
  Optuna: [SiOptuna, "#0075C2"],
};

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const FALLBACK_ACCENTS = ["#B8431F", "#2F8F6E", "#B8730A"];

function fallbackColor(label) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) hash = (hash * 31 + label.charCodeAt(i)) >>> 0;
  return FALLBACK_ACCENTS[hash % FALLBACK_ACCENTS.length];
}

const SIZES = {
  sm: { pad: "pl-1 pr-2.5 py-1", badge: "w-4 h-4", icon: 10, text: "text-xs", gap: "gap-1.5" },
  md: { pad: "pl-1.5 pr-3.5 py-1.5", badge: "w-6 h-6", icon: 14, text: "text-sm", gap: "gap-2" },
};

export default function TechChip({ label, size = "sm" }) {
  const match = ICONS[label];
  const Icon = match?.[0];
  const color = match?.[1] || fallbackColor(label);
  const s = SIZES[size] || SIZES.sm;

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      className={`inline-flex items-center ${s.gap} ${s.pad} rounded-full font-medium text-ink border`}
      style={{ backgroundColor: hexToRgba(color, 0.12), borderColor: hexToRgba(color, 0.25) }}
    >
      <span
        className={`inline-flex items-center justify-center rounded-full bg-white shrink-0 ${s.badge}`}
        style={{ boxShadow: `0 0 0 1px ${hexToRgba(color, 0.15)}` }}
      >
        {Icon ? (
          <Icon size={s.icon} color={color} />
        ) : (
          <span className="rounded-full" style={{ width: s.icon * 0.5, height: s.icon * 0.5, backgroundColor: color }} />
        )}
      </span>
      <span className={s.text}>{label}</span>
    </motion.span>
  );
}
