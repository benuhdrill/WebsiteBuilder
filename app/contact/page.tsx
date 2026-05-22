import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Backend Studio',
  description:
    'Book a discovery call or send us a message. Backend Studio responds to every inquiry within one business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Backend Studio',
    description:
      'Book a discovery call or send us a message. We respond within one business day.',
    url: 'https://backendstudio.io/contact',
  },
}

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://cal.com/backendstudio'

export default function ContactPage() {
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
              Contact
            </p>
            <h1 className="text-h1 md:text-[48px] md:leading-[1.1] text-white mb-5">
              Let&rsquo;s Talk.
            </h1>
            <p className="text-body text-white/50 max-w-sm leading-relaxed">
              Book a discovery call or send us a message. We respond to every
              inquiry within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Booking CTA column */}
            <ScrollReveal>
              <h2 className="text-h2 md:text-[32px] text-white mb-4">
                Book a Discovery Call
              </h2>
              <p className="text-body text-white/50 mb-8 leading-relaxed max-w-xs">
                The fastest way to get started. We&rsquo;ll spend 30 minutes mapping
                your current setup and identifying the highest-leverage improvements.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-ocean hover:bg-sky-blue text-white text-[14px] font-semibold px-7 py-3.5 rounded-[6px] transition-colors duration-200"
              >
                Book a Discovery Call
              </a>

              {/* Divider */}
              <div className="flex items-center gap-4 my-10">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-caption text-white/30 uppercase tracking-widest">
                  or
                </span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Response time', value: 'Within 1 business day' },
                  { label: 'Call length', value: '30–45 minutes' },
                  { label: 'Format', value: 'Video call (Google Meet)' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0"
                  >
                    <span className="text-body text-white/40">{label}</span>
                    <span className="text-body text-white/70">{value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact form column */}
            <ScrollReveal delay={0.1}>
              <h2 className="text-h2 md:text-[32px] text-white mb-4">
                Send a Message
              </h2>
              <p className="text-body text-white/50 mb-8 leading-relaxed max-w-xs">
                Prefer to write? Fill out the form below and we&rsquo;ll get back to
                you promptly.
              </p>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
