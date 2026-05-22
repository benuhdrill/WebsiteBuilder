'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    // Placeholder — wire up Resend, Formspree, or a server action here
    await new Promise((r) => setTimeout(r, 700))
    setFormState('success')
  }

  const inputClass =
    'w-full bg-[#0A1628] border border-white/10 rounded-[6px] px-4 py-3 text-body text-white placeholder-white/20 focus:outline-none focus:border-ocean/60 transition-colors duration-150'

  const labelClass =
    'block text-caption text-white/45 uppercase tracking-[0.12em] mb-2'

  if (formState === 'success') {
    return (
      <div className="bg-[#0F1E3A] border border-white/5 rounded-lg p-10 text-center">
        <div className="w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-5 h-5 text-ocean"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-h3 text-white mb-2">Message received.</h3>
        <p className="text-body text-white/45">
          We&rsquo;ll get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          value={fields.name}
          onChange={(e) => setFields((p) => ({ ...p, name: e.target.value }))}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={fields.email}
          onChange={(e) => setFields((p) => ({ ...p, email: e.target.value }))}
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={(e) =>
            setFields((p) => ({ ...p, message: e.target.value }))
          }
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project or question..."
        />
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full bg-ocean hover:bg-sky-blue disabled:opacity-60 disabled:cursor-not-allowed text-white text-[13px] font-semibold py-3 rounded-[6px] transition-colors duration-200"
      >
        {formState === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
