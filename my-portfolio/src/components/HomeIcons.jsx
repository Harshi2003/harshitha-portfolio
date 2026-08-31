const PATHS = {
  leaf: (
    <path
      d="M11 33 C11 17 25 9 37 11 C37 25 27 35 15 34 C13 34 12 33.5 11 33 Z M13 33 L28 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cap: (
    <>
      <path
        d="M22 8 L40 16 L22 24 L4 16 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M13 19.5 V28 C13 30.5 27 30.5 31 28 V19.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="40" y1="16" x2="40" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
  rocket: (
    <>
      <path
        d="M22 6 C28 10 30 18 28 26 L16 26 C14 18 16 10 22 6 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="16" r="3" fill="currentColor" />
      <path d="M16 24 L10 32 M28 24 L34 32 M18 30 L22 37 L26 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  briefcase: (
    <>
      <rect x="6" y="15" width="32" height="21" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M15 15 V11 C15 9 16.5 8 18 8 H26 C27.5 8 29 9 29 11 V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="6" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  building: (
    <>
      <path d="M22 6 L38 16 H6 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="8" y="16" width="28" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="13" y1="16" x2="13" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="19" y1="16" x2="19" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="25" y1="16" x2="25" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="31" y1="16" x2="31" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="36" x2="38" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  mail: (
    <>
      <rect x="6" y="10" width="32" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 12 L22 25 L37 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  connect: (
    <>
      <circle cx="12" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 17 L28 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.6" fill="currentColor" />
      <circle cx="32" cy="30" r="1.6" fill="currentColor" />
    </>
  ),
  chat: (
    <path
      d="M8 10 H36 A2 2 0 0 1 38 12 V28 A2 2 0 0 1 36 30 H18 L10 37 V30 H8 A2 2 0 0 1 6 28 V12 A2 2 0 0 1 8 10 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  ),
  github: (
    <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  ),
  brain: (
    <>
      <path
        d="M14 14 C8 14 6 20 9 24 C6 27 7 33 12 34 C13 38 19 39 22 36 C25 39 31 38 32 34 C37 33 38 27 35 24 C38 20 36 14 30 14 C29 10 24 8 22 11 C20 8 15 10 14 14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M22 11 V36 M14 20 Q18 22 14 26 M30 20 Q26 22 30 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
  server: (
    <>
      <rect x="8" y="8" width="28" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="22" width="28" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="13" cy="13" r="1.4" fill="currentColor" />
      <circle cx="13" cy="27" r="1.4" fill="currentColor" />
      <line x1="19" y1="13" x2="30" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="27" x2="30" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <path
      d="M13 30 C8 30 6 26 9 23 C7 18 12 14 16 16 C18 11 27 11 29 16 C34 15 37 20 34 24 C37 26 36 30 31 30 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  barchart: (
    <>
      <line x1="8" y1="34" x2="36" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="22" width="5" height="12" fill="currentColor" />
      <rect x="20" y="14" width="5" height="20" fill="currentColor" />
      <rect x="28" y="18" width="5" height="16" fill="currentColor" />
    </>
  ),
  sparkle: <path fill="currentColor" d="M22 6 L25 19 L38 22 L25 25 L22 38 L19 25 L6 22 L19 19 Z" />,
};

const VIEWBOX = {
  linkedin: "0 0 24 24",
  github: "0 0 24 24",
};

const FG = {
  coral: "text-coral-deep bg-coral/12",
  teal: "text-teal bg-teal/12",
  amber: "text-amber bg-amber/15",
};

export function Glyph({ name, className = "" }) {
  return (
    <svg width="1em" height="1em" viewBox={VIEWBOX[name] || "0 0 44 44"} className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

export default function HomeIcon({ name, accent = "coral", size = 22 }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full ${FG[accent]}`} style={{ width: size * 2, height: size * 2 }}>
      <svg width={size} height={size} viewBox={VIEWBOX[name] || "0 0 44 44"} aria-hidden="true">
        {PATHS[name]}
      </svg>
    </span>
  );
}
