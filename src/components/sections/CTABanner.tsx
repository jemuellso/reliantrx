import { Button } from '@/components/ui/Button'

export default function CTABanner() {
  return (
    <section className="bg-[#1D3D2F] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-px bg-[#6BAE8E] mx-auto mb-8" />
        <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight">
          Ready to partner with a pharmacy you can rely on?
        </h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto">
          Reach out today and let&apos;s talk about how ReliantRx can support your business.
        </p>
        <Button href="/contact" size="lg" variant="accent">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
