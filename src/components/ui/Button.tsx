import Link from 'next/link'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BAE8E] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary: 'bg-[#1D3D2F] text-white hover:bg-[#2a5241]',
  outline: 'border border-[#1D3D2F] text-[#1D3D2F] hover:bg-[#1D3D2F] hover:text-white',
  ghost: 'text-[#1D3D2F] hover:bg-[#1D3D2F]/10',
  accent: 'bg-[#6BAE8E] text-[#1D3D2F] font-bold hover:bg-[#8ec8a8]',
}

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
}

type Variant = keyof typeof variants
type Size = keyof typeof sizes

type ButtonAsLink = {
  href: string
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  target?: string
}

type ButtonAsButton = {
  href?: never
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

type ButtonProps = ButtonAsLink | ButtonAsButton

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href) {
    const { href, target } = props
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    )
  }

  const { type, disabled } = props as ButtonAsButton
  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
