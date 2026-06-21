interface LogoProps {
  className?: string;
  withText?: boolean;
}

export default function Logo({ className = 'h-10 w-10', withText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fsr-body" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#A30B0B" />
            <stop offset="100%" stopColor="#6B0000" />
          </linearGradient>
          <linearGradient id="fsr-rim" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E6C158" />
            <stop offset="100%" stopColor="#C9A227" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="12" fill="#0F0F11" />
        <path
          d="M6 42 L14 30 H22 L28 22 H40 L48 30 H58 L52 44 H48 A6 6 0 0 0 36 44 H28 A6 6 0 0 0 16 44 H10 Z"
          fill="url(#fsr-body)"
        />
        <circle cx="22" cy="46" r="5" fill="#0F0F11" stroke="url(#fsr-rim)" strokeWidth="2" />
        <circle cx="42" cy="46" r="5" fill="#0F0F11" stroke="url(#fsr-rim)" strokeWidth="2" />
        <path d="M30 28 L34 28 L33 33 L29 33 Z" fill="#C9A227" />
      </svg>
      {withText && (
        <div className="leading-none">
          <div className="font-display text-xl tracking-wider text-white">FSR</div>
          <div className="text-[9px] uppercase tracking-[0.3em] text-gold-400">
            Marvel Crew
          </div>
        </div>
      )}
    </div>
  );
}
