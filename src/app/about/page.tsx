import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/sections/CTABanner'

export const metadata = {
  title: 'About — ReliantRx Pharmacy',
  description: 'Learn about ReliantRx\'s mission, values, and the team behind our pharmacy solutions.',
}

const values = [
  {
    title: 'Integrity',
    body: 'We operate transparently and hold ourselves to the highest ethical standards in every interaction.',
  },
  {
    title: 'Precision',
    body: 'Accuracy isn\'t optional in pharmacy. Every order, every label, every delivery is handled with meticulous care.',
  },
  {
    title: 'Partnership',
    body: 'We don\'t just fulfill orders — we build long-term relationships with the businesses we serve.',
  },
  {
    title: 'Accessibility',
    body: 'Quality pharmacy services shouldn\'t be limited to the largest organizations. We work with businesses of all sizes.',
  },
]

const team = [
  { name: 'Team Member Name', title: 'Chief Pharmacist' },
  { name: 'Team Member Name', title: 'Director of Operations' },
  { name: 'Team Member Name', title: 'Head of Compliance' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1D3D2F] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-4">About ReliantRx</h1>
          <p className="text-white/60 text-lg">
            Built on precision. Defined by reliability.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl text-[#1D3D2F] mb-6">
              A pharmacy partner businesses can rely on
            </h2>
            {/* TODO: Replace with real copy */}
            <div className="space-y-4 text-[#1A1A1A]/65 leading-relaxed">
              <p>
                ReliantRx was founded with a single mission: to bring pharmacy-grade reliability and
                precision to businesses that depend on consistent medication access. We recognized a
                gap in the market — organizations that needed a dependable pharmacy partner, not just
                a vendor.
              </p>
              <p>
                Today, we serve hundreds of business clients across a range of industries, providing
                everything from bulk fulfillment to specialty compounding. Our team of licensed
                pharmacists and operations specialists works behind the scenes to make sure every
                order is accurate, every delivery is on time, and every client feels supported.
              </p>
              <p>
                We&apos;re more than a pharmacy. We&apos;re the infrastructure that keeps healthcare
                businesses running smoothly.
              </p>
            </div>
          </div>

          {/* Decorative illustration placeholder */}
          <div className="relative rounded-2xl bg-[#1D3D2F]/6 aspect-[4/3] overflow-hidden flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full bg-[#6BAE8E]/15 -top-16 -right-16" />
            <div className="absolute w-40 h-40 rounded-full bg-[#1D3D2F]/10 -bottom-8 left-8" />
            <div className="absolute w-20 h-20 rounded-full bg-[#6BAE8E]/20 bottom-12 right-12" />
            <div className="relative w-24 h-24 rounded-2xl bg-[#1D3D2F]/15 rotate-12" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-[#E8E8E4]">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
            What We Stand For
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#1D3D2F]">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 80}>
              <div className="bg-white rounded-xl p-6 border border-[#E8E8E4] shadow-sm h-full">
                <div className="w-8 h-1 bg-[#6BAE8E] rounded mb-4" />
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{value.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{value.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
            The People Behind ReliantRx
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#1D3D2F]">Our Team</h2>
        </div>

        {/* TODO: Add real team members */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#E8E8E4] mb-4" />
              <p className="font-semibold text-[#1A1A1A]">{member.name}</p>
              <p className="text-sm text-[#1A1A1A]/55 mt-0.5">{member.title}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
