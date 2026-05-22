import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Services — Backend Studio',
  description:
    'Systems Audit, Process Automation, and Tool Integration from Backend Studio. Operational clarity, by design.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Backend Studio',
    description:
      'Systems Audit, Process Automation, and Tool Integration from Backend Studio.',
    url: 'https://backendstudio.io/services',
  },
}

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://cal.com/backendstudio'

const services = [
  {
    title: 'Systems Audit',
    tagline: 'Map and diagnose your current operational setup.',
    description:
      "We conduct a thorough review of your existing tools, workflows, and processes. You'll come away with a clear picture of what's working, what's broken, and a prioritized roadmap for improvement.",
    details: [
      'Workflow mapping across all core business processes',
      'Tool stack analysis and redundancy identification',
      'Bottleneck and friction-point documentation',
      'Prioritized implementation roadmap',
    ],
    icon: (
      <svg
        className="w-11 h-11 text-ocean"
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
    tagline: 'Eliminate manual work with reliable, repeatable systems.',
    description:
      'We identify every manual step slowing your team down and replace it with a system that runs without intervention. Consistent, auditable, and built to scale with your business.',
    details: [
      'Manual workflow identification and scoping',
      'Automation design and build (no-code, low-code, or custom)',
      'Testing and edge-case coverage',
      'Handoff documentation and team training',
    ],
    icon: (
      <svg
        className="w-11 h-11 text-ocean"
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
    tagline: 'Connect the platforms your team already uses.',
    description:
      'We build the bridges between your existing tools so data flows cleanly across your stack. No more copy-paste, no more silos—just a connected operational environment that works.',
    details: [
      'CRM, project management, and communication platform integrations',
      'Custom API connections and webhook workflows',
      'Data sync and transformation pipelines',
      'Error handling and integration monitoring',
    ],
    icon: (
      <svg
        className="w-11 h-11 text-ocean"
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

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-ocean shrink-0 mt-0.5"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 8l4 4L14 4" />
  </svg>
)

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/5">
        <div
          className="absolute -top-24 right-0 w-[500px] h-[500px] ocean-glow pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-caption text-ocean uppercase tracking-[0.22em] mb-5">
              Services
            </p>
            <h1 className="text-h1 md:text-[48px] md:leading-[1.1] text-white mb-5 max-w-xl">
              Built Around How Your Business Actually Runs
            </h1>
            <p className="text-body text-white/50 max-w-md leading-relaxed">
              Operational clarity starts with knowing what to build. Every service
              we offer is designed around your real workflows—not a template.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service cards ────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <article className="bg-[#0F1E3A] border border-white/5 hover:border-ocean/15 rounded-lg p-8 md:p-10 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
                    {/* Icon + title block */}
                    <div className="md:w-64 shrink-0">
                      <div className="mb-5">{service.icon}</div>
                      <h2 className="text-h3 md:text-[20px] text-white mb-1.5">
                        {service.title}
                      </h2>
                      <p className="text-caption text-ocean/80 leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Description + details */}
                    <div className="flex-1">
                      <p className="text-body text-white/55 leading-relaxed mb-7">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-3">
                        {service.details.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-body text-white/50 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#0F1E3A] border-t border-ocean/10 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-caption text-ocean uppercase tracking-[0.22em] mb-5">
              Next Step
            </p>
            <h2 className="text-h2 md:text-[34px] text-white mb-5">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-body text-white/50 mb-9 max-w-sm mx-auto leading-relaxed">
              Start with a discovery call. We&rsquo;ll ask the right questions and tell
              you exactly where to begin.
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
