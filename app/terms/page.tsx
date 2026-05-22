import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Backend Studio',
  description: 'Terms of Service for Backend Studio.',
  alternates: { canonical: '/terms' },
}

const sections = [
  {
    title: '1. Agreement to Terms',
    body: 'By accessing or using the services provided by Backend Studio ("Company," "we," "us"), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.',
  },
  {
    title: '2. Services',
    body: 'Backend Studio provides systems implementation, automation, and operational infrastructure services for businesses. The scope of work for each engagement is defined in a separate Statement of Work or service agreement.',
  },
  {
    title: '3. Client Obligations',
    body: 'You agree to: provide accurate and complete information; grant reasonable access to systems and data necessary for service delivery; make timely payments as outlined in your service agreement; designate a point of contact for communications.',
  },
  {
    title: '4. Intellectual Property',
    body: 'Unless otherwise stated in a service agreement: custom work product created specifically for you is assigned to you upon full payment; pre-existing tools, frameworks, and methodologies remain the property of Backend Studio; we retain the right to use general knowledge and techniques gained during engagements.',
  },
  {
    title: '5. Payment Terms',
    body: 'Payment terms are specified in individual service agreements. Late payments may incur interest at 1.5% per month. We reserve the right to suspend services for overdue accounts.',
  },
  {
    title: '6. Confidentiality',
    body: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives termination of the agreement.',
  },
  {
    title: '7. Limitation of Liability',
    body: "To the maximum extent permitted by law, Backend Studio's total liability for any claim arising from our services shall not exceed the fees paid by you in the twelve months preceding the claim. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: '8. Termination',
    body: 'Either party may terminate a service engagement with 30 days written notice. Upon termination, you are responsible for payment for all services rendered up to the termination date.',
  },
  {
    title: '9. Governing Law',
    body: 'These Terms are governed by the laws of the State of Florida, United States. Any disputes shall be resolved in the courts of Broward County, Florida.',
  },
  {
    title: '10. Changes to Terms',
    body: 'We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the revised Terms.',
  },
  {
    title: '11. Contact',
    body: 'Questions about these Terms? Contact us at: Backend Studio — ben@backendstudio.io',
  },
]

export default function TermsPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <p className="text-caption text-ocean uppercase tracking-[0.22em] mb-5">
          Legal
        </p>
        <h1 className="text-h1 md:text-[40px] md:leading-[1.1] text-white mb-3">
          Terms of Service
        </h1>
        <p className="text-body text-white/35 mb-14">Last updated: May 22, 2026</p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-white/5 pb-10 last:border-0">
              <h2 className="text-h3 text-white mb-3">{section.title}</h2>
              <p className="text-body text-white/55 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
