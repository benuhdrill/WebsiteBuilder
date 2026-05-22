import Link from 'next/link'
import Logo from '@/components/Logo'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms' },
]

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Logo size="sm" className="mb-2" />
            <p className="text-caption text-white/30">
              Systems built for business.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex gap-6" aria-label="Footer navigation">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[12px] text-white/40 hover:text-white/70 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-caption text-white/25">
            © 2026 Backend Studio. All rights reserved.
          </p>
          <p className="text-caption text-white/25">backendstudio.io</p>
        </div>
      </div>
    </footer>
  )
}
