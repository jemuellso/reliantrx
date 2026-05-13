'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

type FieldError = Partial<Record<keyof FormState, string>>

const empty: FormState = { name: '', company: '', email: '', phone: '', message: '' }

function validate(form: FormState): FieldError {
  const errors: FieldError = {}
  if (!form.name.trim()) errors.name = 'Full name is required.'
  if (!form.company.trim()) errors.company = 'Company name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Message is required.'
  return errors
}

const inputBase =
  'w-full rounded-lg border border-[#E8E8E4] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/35 focus:outline-none focus:ring-2 focus:ring-[#6BAE8E] focus:border-transparent transition-all'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<FieldError>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center py-12">
        <div className="w-14 h-14 rounded-full bg-[#6BAE8E]/20 flex items-center justify-center mb-5">
          <svg className="text-[#6BAE8E]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-[#1D3D2F] mb-2">Message Sent</h3>
        <p className="text-sm text-[#1A1A1A]/60 max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => { setForm(empty); setSubmitted(false) }}
          className="mt-6 text-sm font-medium text-[#1D3D2F] hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
            Full Name <span className="text-[#6BAE8E]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputBase}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
            Company Name <span className="text-[#6BAE8E]">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            className={inputBase}
            placeholder="Acme Health Systems"
          />
          {errors.company && <p className="mt-1.5 text-xs text-red-500">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
            Email Address <span className="text-[#6BAE8E]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputBase}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputBase}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
          Message <span className="text-[#6BAE8E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputBase}
          placeholder="Tell us about your needs..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" size="md" variant="primary" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  )
}
