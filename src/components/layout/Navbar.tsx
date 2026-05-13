'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#F8F8F6]/95 backdrop-blur-sm border-b border-[#E8E8E4]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl text-[#1D3D2F] tracking-tight"
          onClick={() => setOpen(false)}
        >
          ReliantRx
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-[#1D3D2F]'
                    : 'text-[#1A1A1A]/70 hover:text-[#1D3D2F]'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/portal"
            className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-lg border border-[#1D3D2F] text-[#1D3D2F] hover:bg-[#1D3D2F] hover:text-white transition-all"
          >
            Customer Login
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#1A1A1A] rounded-md hover:bg-[#E8E8E4] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#E8E8E4] bg-[#F8F8F6] px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-base font-medium transition-colors',
                pathname === link.href ? 'text-[#1D3D2F]' : 'text-[#1A1A1A]/70'
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-lg border border-[#1D3D2F] text-[#1D3D2F] self-start mt-2 hover:bg-[#1D3D2F] hover:text-white transition-all"
            onClick={() => setOpen(false)}
          >
            Customer Login
          </Link>
        </div>
      )}
    </header>
  )
}
