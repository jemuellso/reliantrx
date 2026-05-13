import Link from 'next/link'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#1B3A4B] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-heading text-xl text-white">ReliantRx</span>
            <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
              Reliable pharmacy solutions for businesses that depend on precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-white/30">
            © 2025 ReliantRx Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
