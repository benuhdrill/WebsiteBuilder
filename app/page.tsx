import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://cal.com/backendstudio'

const services = [
  {
    title: 'Systems Audit',
    description:
      'Map and diagnose your current operational setup. We identify bottlenecks, redundancies, and gaps so you know exactly what to build next.',
    icon: (
      <svg
        className="w-9 h-9 text-ocean"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    title: 'Process Automation',
    description:
      'Eliminate manual work with reliable, repeatable systems. We design automations that run consistently without constant oversight.',
    icon: (
      <svg
        className="w-9 h-9 text-ocean"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12a10 10 0 0 1 10-10v0a10 10 0 0 1 10 10" />
        <path d="M22 12a10 10 0 0 1-10 10v0A10 10 0 0 1 2 12" />
        <path d="M15 9 12 6l-3 3" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    ),
  },
  {
    title: 'Tool Integration',
    description:
      'Connect the platforms your team already uses. We build the bridges between your tools so data flows cleanly and workflows stay in sync.',
    icon: (
      <svg
        className="w-9 h-9 text-ocean"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
]

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

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true" />
        <div
          className="absolute -top-32 right-0 w-[800px] h-[800px] ocean-glow pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <HeroSection bookingUrl={BOOKING_URL} />
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────── */}
      <section className="bg-[#0F1E3A] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <ScrollReveal className="mb-14">
            <p className="text-caption text-ocean uppercase tracking-[0.22em] mb-4">
              What We Do
            </p>
            <h2 className="text-h2 md:text-[34px] text-white mb-4">
              Built for Real Operations
            </h2>
            <p className="text-body text-white/50 max-w-sm leading-relaxed">
              From audit to implementation, every engagement starts with
              understanding how your business actually works.
            </p>
          </ScrollReveal>

          {/* Cards — staggered reveal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="h-full bg-midnight border border-white/5 hover:border-ocean/20 rounded-lg p-7 transition-colors duration-300">
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="text-h3 text-white mb-3">{service.title}</h3>
                  <p className="text-body text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[14px] text-ocean hover:text-sky-blue font-medium transition-colors duration-150"
            >
              See all services
              <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission statement ────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <blockquote className="max-w-3xl">
              <p className="text-h2 md:text-[36px] md:leading-snug text-white mb-5">
                &ldquo;Systems should work for you—not the other way around.&rdquo;
              </p>
              <p className="text-body text-white/45 leading-relaxed">
                We build the operational backbone of your business so your team
                can focus on what actually moves the needle.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="bg-[#0F1E3A] border-t border-ocean/10 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-caption text-ocean uppercase tracking-[0.22em] mb-5">
              Get Started
            </p>
            <h2 className="text-h2 md:text-[34px] text-white mb-5">
              Ready to Build Better Systems?
            </h2>
            <p className="text-body text-white/50 mb-9 max-w-sm mx-auto leading-relaxed">
              Book a discovery call. We&rsquo;ll map your current setup and show you
              exactly where to improve.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-ocean hover:bg-sky-blue text-white text-[14px] font-semibold px-8 py-4 rounded-[6px] transition-colors duration-200"
            >
              Book a Discovery Call
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
