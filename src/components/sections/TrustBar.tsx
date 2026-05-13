import { Section } from '@/components/ui/Section'
import { TRUST_STATS } from '@/lib/constants'

export default function TrustBar() {
  return (
    <Section className="py-14 bg-[#E8E8E4]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_STATS.map(({ stat, label, Icon }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1D3D2F]/10 flex items-center justify-center">
              <Icon size={22} className="text-[#1D3D2F]" />
            </div>
            <div>
              <p className="font-heading text-2xl text-[#1D3D2F]">{stat}</p>
              <p className="text-sm text-[#1A1A1A]/55 mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
