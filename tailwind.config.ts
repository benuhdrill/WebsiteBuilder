import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0A1628',
        ocean: '#1A7FD4',
        'sky-blue': '#5BB8F5',
        cloud: '#F4F8FC',
        slate: '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['36px', { lineHeight: '1.13', fontWeight: '700' }],
        h2: ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['18px', { lineHeight: '1.35', fontWeight: '600' }],
        body: ['15px', { lineHeight: '1.65' }],
        caption: ['11px', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(91,184,245,0.10) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '32px 32px',
      },
    },
  },
  plugins: [],
}

export default config
