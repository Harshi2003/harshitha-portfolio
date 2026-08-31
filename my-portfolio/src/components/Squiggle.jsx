export default function Squiggle({ className = "", width = 90 }) {
  return (
    <svg
      width={width}
      height={width * 0.28}
      viewBox="0 0 90 26"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 18 C 14 4, 24 4, 32 14 S 50 24, 58 12 S 76 2, 88 10"
        stroke="var(--color-coral)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
