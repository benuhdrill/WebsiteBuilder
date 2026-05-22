import Link from 'next/link'

const ArrowRight = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

interface HeroSectionProps {
  bookingUrl: string
}

export default function HeroSection({ bookingUrl }: HeroSectionProps) {
  return (
    <div className="max-w-3xl">
      {/* Each direct child gets hero-item so nth-child delays apply */}
      <p className="hero-item text-caption text-ocean uppercase tracking-[0.22em] mb-6">
        Operational Design
      </p>

      <h1 className="hero-item text-h1 md:text-[52px] md:leading-[1.1] text-white mb-7">
        Systems That Scale
        <br />
        With You.
      </h1>

      <p className="hero-item text-body md:text-[17px] text-white/60 mb-11 leading-relaxed max-w-xl">
        Backend Studio builds the infrastructure to turn a busy business into a
        streamlined one.
      </p>

      <div className="hero-item flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-ocean hover:bg-sky-blue text-white text-[14px] font-semibold px-7 py-3.5 rounded-[6px] transition-colors duration-200"
        >
          Book a Call
        </a>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[14px] text-white/50 hover:text-white font-medium transition-colors duration-150"
        >
          Explore Services
          <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
