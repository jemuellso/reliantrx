import { Button } from '@/components/ui/Button'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1D3D2F]">
      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#162e23] via-[#1D3D2F] to-[#2a5241]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(107,174,142,0.25)_0%,_transparent_60%)]" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Decorative line element */}
      <div className="absolute top-1/4 right-12 hidden lg:block">
        <div className="flex flex-col gap-2 items-end opacity-20">
          <div className="w-32 h-px bg-[#6BAE8E]" />
          <div className="w-20 h-px bg-[#6BAE8E]" />
          <div className="w-12 h-px bg-[#6BAE8E]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#6BAE8E] font-semibold text-xs uppercase tracking-[0.2em] mb-6">
          B2B Pharmacy Solutions
        </p>

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
          Pharmacy Solutions
          <br />
          <span className="text-[#6BAE8E]">Built for Everyone</span>
        </h1>

        <p className="text-white/65 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          ReliantRx delivers reliable, compliant, and scalable pharmacy services to businesses that
          can&apos;t afford to miss a dose.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/services" size="lg" variant="accent">
            Explore Services
          </Button>
          <Button
            href="/contact"
            size="lg"
            variant="outline"
            className="border-white/50 text-white hover:bg-white hover:text-[#1D3D2F]"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </div>
  )
}
