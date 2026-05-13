import {
  Package,
  FlaskConical,
  Tag,
  Thermometer,
  Stethoscope,
  ShieldCheck,
  Users,
  Award,
  Truck,
  Headphones,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export type Service = {
  id: string
  name: string
  description: string
  Icon: LucideIcon
}

export const SERVICES: Service[] = [
  {
    id: 'bulk',
    name: 'Bulk Medication Fulfillment',
    description: 'High-volume dispensing and fulfillment tailored to the scale and cadence of your business operations.',
    Icon: Package,
  },
  {
    id: 'compounding',
    name: 'Specialty Compounding',
    description: 'Custom-formulated medications prepared to meet specific dosage, delivery, or ingredient requirements.',
    Icon: FlaskConical,
  },
  {
    id: 'packaging',
    name: 'Medication Packaging & Labeling',
    description: 'Compliant, clearly labeled packaging solutions designed for professional dispensing and patient safety.',
    Icon: Tag,
  },
  {
    id: 'cold-chain',
    name: 'Cold Chain Medications',
    description: 'Temperature-controlled storage and next-day delivery for refrigerated and specialty medications.',
    Icon: Thermometer,
  },
  {
    id: 'clinical',
    name: 'Clinical Consultation Support',
    description: 'Access to licensed pharmacists for clinical guidance, drug interaction review, and protocol support.',
    Icon: Stethoscope,
  },
  {
    id: 'compliance',
    name: 'Regulatory & Compliance Support',
    description: 'Expert navigation of pharmacy regulations, accreditation requirements, and documentation standards.',
    Icon: ShieldCheck,
  },
]

export type TrustStat = {
  stat: string
  label: string
  Icon: LucideIcon
}

export const TRUST_STATS: TrustStat[] = [
  { stat: '500+', label: 'Clients Served', Icon: Users },
  { stat: 'Licensed', label: '& Accredited', Icon: Award },
  { stat: 'Next-Day', label: 'Delivery Available', Icon: Truck },
  { stat: 'Dedicated', label: 'Account Support', Icon: Headphones },
]

export const CONTACT_INFO = {
  email: 'info@reliantrx.com',
  phone: '+1 (800) 000-0000',
  address: '123 Pharma Ave, Suite 100, Manila, PH',
  hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
}
