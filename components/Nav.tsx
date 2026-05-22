'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://cal.com/backendstudio'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight border-b border-white/8 shadow-[0_1px_28px_rgba(0,0,0,0.45)]'
          : 'bg-midnight/90 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Backend Studio home">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[13px] font-medium transition-colors duration-150 ${
                pathname === href
                  ? 'text-white'
                  : 'text-white/50 hover:text-white/90'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-ocean hover:bg-sky-blue text-white text-[13px] font-semibold px-5 py-2 rounded-[6px] transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0F1E3A] border-t border-white/5"
        >
          <nav
            className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-[13px] font-medium py-2.5 border-b border-white/5 last:border-0 transition-colors ${
                  pathname === href
                    ? 'text-white'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 mt-1">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-ocean hover:bg-sky-blue text-white text-[13px] font-semibold px-5 py-2.5 rounded-[6px] transition-colors"
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
