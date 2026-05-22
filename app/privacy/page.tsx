import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Backend Studio',
  description: 'Privacy Policy for Backend Studio.',
  alternates: { canonical: '/privacy' },
}

const sections = [
  {
    title: '1. Overview',
    body: 'Backend Studio ("Company," "we," "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit backendstudio.io or engage our services. By using our website, you agree to the practices described here.',
  },
  {
    title: '2. Information We Collect',
    body: 'We may collect the following types of information: (a) Information you provide directly — such as your name, email address, and any details submitted through our contact form or discovery call booking; (b) Usage data — such as pages visited, time spent on the site, browser type, and referring URL, collected automatically when you visit our website; (c) Client information — data you share during a service engagement, such as business details, access credentials, and workflow documentation, as necessary to deliver our services.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'We use the information we collect to: respond to inquiries and schedule discovery calls; deliver and improve our services; send project-related communications; comply with legal obligations. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    title: '4. Cookies and Tracking',
    body: 'Our website may use cookies and similar technologies to understand how visitors interact with the site. You can disable cookies in your browser settings, though some features of the site may not function as intended. We do not use cookies to track you across third-party websites.',
  },
  {
    title: '5. Third-Party Services',
    body: 'We use third-party tools to operate our business, including scheduling software (Cal.com) and hosting infrastructure (Vercel). These providers have their own privacy policies and handle data in accordance with their terms. We only share information with third parties as necessary to deliver our services.',
  },
  {
    title: '6. Data Retention',
    body: 'We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Client data related to completed engagements is retained for a minimum of three years for record-keeping purposes.',
  },
  {
    title: '7. Data Security',
    body: 'We take reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '8. Your Rights',
    body: 'You have the right to request access to, correction of, or deletion of your personal information. To make a request, contact us at ben@backendstudio.io. We will respond within 30 days.',
  },
  {
    title: '9. Children\'s Privacy',
    body: 'Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.',
  },
  {
    title: '10. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes constitutes acceptance of the revised policy.',
  },
  {
    title: '11. Contact',
    body: 'If you have questions about this Privacy Policy, contact us at: Backend Studio — ben@backendstudio.io',
  },
]

export default function PrivacyPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <p className="text-caption text-ocean uppercase tracking-[0.22em] mb-5">
          Legal
        </p>
        <h1 className="text-h1 md:text-[40px] md:leading-[1.1] text-white mb-3">
          Privacy Policy
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
