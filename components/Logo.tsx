interface LogoProps {
  className?: string
  iconOnly?: boolean
  size?: 'sm' | 'md' | 'lg'
}

// Explicit px dimensions per size (viewBox is 52×58, ratio ≈ 0.897)
const dims = {
  sm: { h: 28, w: 25 },
  md: { h: 36, w: 32 },
  lg: { h: 44, w: 39 },
}

const textSize = {
  sm: 'text-[16px]',
  md: 'text-[20px]',
  lg: 'text-[24px]',
}

export default function Logo({ className = '', iconOnly = false, size = 'md' }: LogoProps) {
  const { h, w } = dims[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* B mark — explicit height/width prevent browser default 300×150 sizing */}
      <svg
        viewBox="0 0 52 58"
        height={h}
        width={w}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ display: 'block', flexShrink: 0 }}
      >
        {/* Left spine */}
        <line x1="11" y1="9" x2="11" y2="49" stroke="#1A7FD4" strokeWidth="3.5" strokeLinecap="round" />
        {/* Top horizontal */}
        <line x1="11" y1="9" x2="27" y2="9" stroke="#1A7FD4" strokeWidth="3.5" strokeLinecap="round" />
        {/* Upper bump */}
        <path d="M27 9 C42 9 42 29 27 29" stroke="#1A7FD4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Lower bump */}
        <path d="M27 29 C45 29 45 49 27 49" stroke="#1A7FD4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Bottom horizontal */}
        <line x1="27" y1="49" x2="11" y2="49" stroke="#1A7FD4" strokeWidth="3.5" strokeLinecap="round" />
        {/* Network connections */}
        <line x1="18" y1="19" x2="33" y2="29" stroke="#1A7FD4" strokeWidth="2" strokeLinecap="round" />
        <line x1="33" y1="29" x2="18" y2="40" stroke="#1A7FD4" strokeWidth="2" strokeLinecap="round" />
        {/* Hollow nodes — fill matches midnight bg */}
        <circle cx="18" cy="19" r="3.5" stroke="#1A7FD4" strokeWidth="2" fill="#0A1628" />
        <circle cx="33" cy="29" r="3.5" stroke="#1A7FD4" strokeWidth="2" fill="#0A1628" />
        <circle cx="18" cy="40" r="3.5" stroke="#1A7FD4" strokeWidth="2" fill="#0A1628" />
      </svg>

      {!iconOnly && (
        <span className={`text-ocean font-bold tracking-tight ${textSize[size]}`}>
          Backend Studio
        </span>
      )}
    </div>
  )
}
