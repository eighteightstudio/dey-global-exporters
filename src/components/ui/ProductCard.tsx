import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Product } from '@/data/products'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        'border border-[var(--border)] rounded-2xl overflow-hidden bg-white group hover:-translate-y-1 transition-transform duration-200 flex flex-col',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[var(--surface)]">
        <Image
          src={product.image}
          alt={`${product.name} — raw Indian hair export product`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge variant="navy">{product.category}</Badge>
        </div>
        {/* Trust badges overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {product.isTemple && (
            <Badge variant="accent">Temple</Badge>
          )}
          {product.isRemy && (
            <Badge variant="accent">Remy</Badge>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-[var(--navy)] font-heading leading-snug mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-3">
            {product.tagline}
          </p>

          {/* Spec pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <Badge variant="default">{product.lengthRange}</Badge>
            {product.textures.slice(0, 2).map((t) => (
              <Badge key={t} variant="default">{t}</Badge>
            ))}
            {product.textures.length > 2 && (
              <Badge variant="default">+{product.textures.length - 2} more</Badge>
            )}
          </div>

          {/* MOQ + HS */}
          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-4">
            <span className="flex items-center gap-1">
              <CheckCircle size={12} className="text-emerald-500" />
              MOQ: {product.moq}
            </span>
            <span>·</span>
            <span>{product.hsCode}</span>
          </div>

          {/* Specs accordion */}
          <details className="group/details mb-4">
            <summary className="cursor-pointer text-xs font-medium text-[var(--navy)] hover:text-[var(--accent-hover)] transition-colors underline underline-offset-2 list-none flex items-center gap-1">
              View Full Specs ↓
            </summary>
            <div className="mt-3 border border-[var(--border)] rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr
                      key={spec.label}
                      className={idx % 2 === 0 ? 'bg-[var(--surface)]' : 'bg-white'}
                    >
                      <td className="px-3 py-2 font-medium text-[var(--navy)] w-2/5">
                        {spec.label}
                      </td>
                      <td className="px-3 py-2 text-[var(--text-muted)]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </div>

        {/* CTA */}
        <Button
          variant="accent"
          size="sm"
          href={`/contact?product=${product.slug}`}
          className="w-full"
        >
          Request Quote →
        </Button>
      </div>
    </article>
  )
}
