"use client"

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const productOptions = [
  'Bulk Raw Temple Hair',
  'Wefted Remy Bundles (Double Drawn)',
  'Wefted Remy Bundles (Single Drawn)',
  'Lace Closures (4×4 / 5×5)',
  'Lace Frontals (13×4 / 13×6)',
  'Specialty Curly / Kinky Textures',
]

const roleOptions = [
  'Business Owner / Founder',
  'Buyer / Procurement Manager',
  'Brand Manager',
  'Wholesale Distributor',
  'Salon Owner',
  'Other',
]

const volumeOptions = [
  'Under 5 kg / month',
  '5–20 kg / month',
  '20–50 kg / month',
  '50–100 kg / month',
  '100 kg+ / month',
  'One-time order',
]

interface FormState {
  firstName: string
  lastName: string
  company: string
  website: string
  role: string
  country: string
  city: string
  whatsapp: string
  email: string
  products: string[]
  volume: string
  message: string
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  company: '',
  website: '',
  role: '',
  country: '',
  city: '',
  whatsapp: '',
  email: '',
  products: [],
  volume: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleProductToggle(product: string) {
    setForm((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }))
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — no backend per spec
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle size={32} className="text-emerald-500" />
        </div>
        <h3 className="font-bold text-[var(--navy)] font-heading text-xl">Inquiry Received</h3>
        <p className="text-[var(--text-muted)] text-sm max-w-sm leading-relaxed">
          Thank you for reaching out. Our export team will review your requirements and respond
          within 24 business hours with pricing and availability.
        </p>
        <p className="text-xs text-[var(--text-muted)]">
          For faster response, WhatsApp us at{' '}
          <a href="https://wa.me/919876543210" className="text-[var(--navy)] font-medium underline">
            +91 98765 43210
          </a>
        </p>
        <button
          onClick={() => { setForm(initialState); setSubmitted(false) }}
          className="mt-2 text-xs text-[var(--text-muted)] underline underline-offset-2"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:border-transparent transition-all duration-150 bg-white'

  const labelClass = 'block text-xs font-semibold text-[var(--navy)] uppercase tracking-wide mb-1.5'

  return (
    <div className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name *</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Sarah"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Johnson"
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Company + Website */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Company Name *</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="LuxeWig Co."
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Company Website</label>
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="https://luxewig.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Role */}
      <div>
        <label className={labelClass}>Your Role *</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className={inputClass}
          required
        >
          <option value="">Select your role…</option>
          {roleOptions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Country + City */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Country *</label>
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="United States"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Dallas"
            className={inputClass}
          />
        </div>
      </div>

      {/* WhatsApp + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>WhatsApp Number *</label>
          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Business Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="sarah@luxewig.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Product interest */}
      <div>
        <label className={labelClass}>Product Interest (select all that apply) *</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {productOptions.map((product) => {
            const selected = form.products.includes(product)
            return (
              <button
                key={product}
                type="button"
                onClick={() => handleProductToggle(product)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150',
                  selected
                    ? 'bg-[var(--navy)] text-white border-[var(--navy)]'
                    : 'bg-white text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--navy)] hover:text-[var(--navy)]'
                )}
              >
                {product}
              </button>
            )
          })}
        </div>
      </div>

      {/* Volume */}
      <div>
        <label className={labelClass}>Approximate Monthly Requirement *</label>
        <select
          name="volume"
          value={form.volume}
          onChange={handleChange}
          className={inputClass}
          required
        >
          <option value="">Select volume bracket…</option>
          {volumeOptions.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Additional Details / Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about specific textures, lengths, color preferences, lead time requirements, or any other details that will help us prepare an accurate quote..."
          rows={4}
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading || !form.firstName || !form.email || !form.company || !form.whatsapp || form.products.length === 0}
        className={cn(
          'w-full flex items-center justify-center gap-2.5 bg-[var(--accent)] text-[var(--navy)] font-semibold rounded-lg px-6 py-3.5 text-sm transition-all duration-200',
          'hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-[var(--navy)]/30 border-t-[var(--navy)] rounded-full animate-spin" />
            Sending Inquiry…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Inquiry
          </>
        )}
      </button>

      <p className="text-xs text-[var(--text-muted)] text-center">
        We respond within 24 business hours. Your data is used only to respond to your inquiry.
      </p>
    </div>
  )
}
