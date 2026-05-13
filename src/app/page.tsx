import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyUs from '@/components/sections/WhyUs'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid limit={3} />
      <WhyUs />
      <CTABanner />
    </>
  )
}
