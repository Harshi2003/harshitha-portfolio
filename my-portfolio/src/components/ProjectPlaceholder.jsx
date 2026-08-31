const ICONS = {
  grid: (
    <>
      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="19" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="29" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="9" y="19" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="19" y="19" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="29" y="19" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="9" y="29" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="19" y="29" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="29" y="29" width="6" height="6" rx="1.5" fill="currentColor" />
    </>
  ),
  code: (
    <path
      d="M14 12 L6 22 L14 32 M26 12 L34 22 L26 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  document: (
    <>
      <path d="M11 6 H24 L29 11 V38 H11 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 6 V11 H29" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="15" y1="19" x2="25" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="25" x2="25" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="31" x2="21" y2="31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  signal: (
    <>
      <path
        d="M8 30 L20 14 L32 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="30" r="3" fill="currentColor" />
      <circle cx="20" cy="14" r="3" fill="currentColor" />
      <circle cx="32" cy="26" r="3" fill="currentColor" />
    </>
  ),
  chart: (
    <>
      <line x1="7" y1="34" x2="37" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M9 27 L17 19 L24 24 L34 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  healthcare: (
    <>
      <rect x="8" y="8" width="28" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M13 24 H18 L21 17 L25 31 L28 24 H32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  community: (
    <>
      <circle cx="14" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M14 21 L22 27 M30 21 L22 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  scan: (
    <>
      <rect x="10" y="7" width="24" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="10" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="29" x2="24" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  gate: (
    <>
      <path
        d="M12 10 H20 A10 10 0 0 1 20 30 H12 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="6" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="25" x2="12" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="20" x2="37" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
};

const BG = {
  coral: "bg-coral/10",
  teal: "bg-teal/10",
  amber: "bg-amber/10",
};

const FG = {
  coral: "text-coral-deep",
  teal: "text-teal",
  amber: "text-amber",
};

export default function ProjectPlaceholder({ icon, accent = "coral" }) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${BG[accent]}`}>
      <svg width="64" height="64" viewBox="0 0 44 44" className={FG[accent]} aria-hidden="true">
        {ICONS[icon]}
      </svg>
    </div>
  );
}
