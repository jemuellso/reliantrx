import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Customer Portal — ReliantRx Pharmacy',
}

export default function PortalPage() {
  return (
    <div className="flex-1 min-h-[60vh] flex items-center justify-center py-24 px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1D3D2F]/8 mb-6">
          <svg
            className="text-[#1D3D2F]"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6BAE8E] mb-3">
          Coming Soon
        </p>
        <h1 className="font-heading text-4xl text-[#1D3D2F] mb-4">Customer Portal</h1>
        <p className="text-[#1A1A1A]/60 leading-relaxed mb-8">
          The ReliantRx customer portal is under development. Soon, business clients will be able to
          place and manage orders, view invoices, and track deliveries in one place.
        </p>
        <Button href="/contact" variant="outline">
          Get Notified When It&apos;s Ready
        </Button>
      </div>
    </div>
  )
}
