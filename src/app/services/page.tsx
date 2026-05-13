import ServicesGrid from '@/components/sections/ServicesGrid'
import CTABanner from '@/components/sections/CTABanner'

export const metadata = {
  title: 'Services — ReliantRx Pharmacy',
  description: 'Explore our full range of pharmacy solutions including bulk fulfillment, compounding, cold chain, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1D3D2F] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
            What We Offer
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-5">Our Services</h1>
          <p className="text-white/60 max-w-xl text-lg leading-relaxed">
            From high-volume fulfillment to clinical consultation, we provide end-to-end pharmacy
            solutions that scale with your business.
          </p>
        </div>
      </section>

      <ServicesGrid showCTA={true} />
      <CTABanner />
    </>
  )
}
