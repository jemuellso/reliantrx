import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const reasons = [
  {
    title: 'Reliability You Can Count On',
    body: 'We understand that medication gaps aren\'t an option. Our fulfillment infrastructure is built for consistent, on-time delivery — every time.',
  },
  {
    title: 'Regulatory Compliance Built In',
    body: 'From licensing to documentation, our processes are designed to keep your operations aligned with the latest pharmacy regulations and accreditation standards.',
  },
  {
    title: 'Flexible Ordering at Any Scale',
    body: 'Whether you\'re a small clinic or a large healthcare network, our ordering process adapts to your volume, frequency, and formulary needs.',
  },
  {
    title: 'Dedicated Account Support',
    body: 'Every partner gets a dedicated support contact — a real person who knows your account, anticipates your needs, and responds fast.',
  },
]

export default function WhyUs() {
  return (
    <Section className="bg-[#F8F8F6]">
      <div className="max-w-3xl mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
          Why ReliantRx
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-[#1D3D2F]">
          Why Businesses Choose Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, i) => (
          <ScrollReveal key={reason.title} delay={i * 80}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-[#6BAE8E]/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#6BAE8E]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{reason.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{reason.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
