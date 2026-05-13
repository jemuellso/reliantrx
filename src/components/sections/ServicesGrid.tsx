import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

type ServicesGridProps = {
  limit?: number
  showCTA?: boolean
}

export default function ServicesGrid({ limit, showCTA = true }: ServicesGridProps) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES

  return (
    <Section>
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
          What We Offer
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-[#1D3D2F] mb-4">Our Services</h2>
        <p className="text-[#1A1A1A]/60 max-w-xl mx-auto">
          Comprehensive pharmacy solutions designed for the scale and precision your business demands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ id, name, description, Icon }) => (
          <div
            key={id}
            className="bg-white rounded-xl p-6 border border-[#E8E8E4] shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-11 h-11 rounded-lg bg-[#1D3D2F]/8 flex items-center justify-center mb-4 group-hover:bg-[#1D3D2F]/12 transition-colors">
              <Icon size={22} className="text-[#1D3D2F]" />
            </div>
            <h3 className="font-semibold text-[#1A1A1A] mb-2">{name}</h3>
            <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {showCTA && limit && (
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D3D2F] hover:text-[#2a5241] transition-colors"
          >
            See All Services <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {showCTA && !limit && (
        <div className="mt-14 text-center border-t border-[#E8E8E4] pt-12">
          <p className="text-[#1A1A1A]/60 mb-4">Need a custom solution?</p>
          <Button href="/contact">Talk to Us</Button>
        </div>
      )}
    </Section>
  )
}
