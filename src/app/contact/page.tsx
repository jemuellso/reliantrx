import { Section } from '@/components/ui/Section'
import ContactForm from '@/components/sections/ContactForm'
import { CONTACT_INFO } from '@/lib/constants'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us — ReliantRx Pharmacy',
  description: 'Get in touch with ReliantRx. Have questions or want to explore a partnership? We\'d love to hear from you.',
}

const contactDetails = [
  { Icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { Icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { Icon: MapPin, label: 'Address', value: CONTACT_INFO.address, href: undefined },
  { Icon: Clock, label: 'Hours', value: CONTACT_INFO.hours, href: undefined },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1D3D2F] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
            Reach Out
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-4">Get in Touch</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Have questions or want to explore a partnership? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl text-[#1D3D2F] mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:pt-11">
            <h2 className="font-heading text-2xl text-[#1D3D2F] mb-6">Contact Information</h2>
            <ul className="space-y-6">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1D3D2F]/8 flex items-center justify-center mt-0.5">
                    <Icon size={18} className="text-[#1D3D2F]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/40 mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm text-[#1A1A1A] hover:text-[#1D3D2F] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#1A1A1A]">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative element */}
            <div className="mt-12 rounded-xl bg-[#1D3D2F]/5 p-6 border border-[#E8E8E4]">
              <p className="text-sm font-semibold text-[#1D3D2F] mb-1">Response time</p>
              <p className="text-sm text-[#1A1A1A]/60">
                We typically respond to all inquiries within one business day. For urgent matters,
                please call us directly.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
