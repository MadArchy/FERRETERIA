"use client";

import Image from "next/image";
import { Tag, CheckCircle, XCircle, Wrench } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { type Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/contact";

const WHATSAPP_NUMBER = contactInfo.whatsappNumber;

const badgeConfig = {
  oferta: { label: "Oferta", className: "bg-red-500/20 text-red-400 border-red-500/30" },
  nuevo: { label: "Nuevo", className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  destacado: { label: "Destacado", className: "bg-[#FACC15]/15 text-[#FACC15] border-[#FACC15]/30" },
};

interface ProductCardProps {
  product: Product;
  index: number;
}


export default function ProductCard({ product, index }: ProductCardProps) {
  const waMsg = encodeURIComponent(
    `Hola! Quiero consultar sobre: ${product.name} (ID: ${product.id})`
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;
  const badge = product.badge ? badgeConfig[product.badge] : null;
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-gradient-to-br from-[#1C1C1E] to-[#141414] border border-white/8 rounded-2xl overflow-hidden hover:border-[#FACC15]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_2px_8px_rgba(250,204,21,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col max-w-sm mx-auto w-full sm:max-w-none"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border",
              badge.className
            )}
          >
            <Tag className="w-3 h-3" />
            {badge.label}
          </span>
        </div>
      )}

      {/* Discount badge */}
      {discount && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-red-500 text-white">
            -{discount}%
          </span>
        </div>
      )}

      {/* Product image */}
      <div className="relative h-44 bg-[#141414] overflow-hidden flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* Category */}
        <span className="inline-flex items-center gap-1.5 text-[#FACC15]/70 text-xs font-semibold uppercase tracking-wider">
          <Wrench className="w-3 h-3" />
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#FACC15] transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-[#FACC15] text-xl font-black">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-white/30 text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Availability */}
        <div className="flex items-center gap-1.5">
          {product.available ? (
            <>
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-xs font-medium">En stock</span>
            </>
          ) : (
            <>
              <XCircle className="w-3.5 h-3.5 text-red-400" />
              <span className="text-red-400 text-xs font-medium">Sin stock</span>
            </>
          )}
        </div>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`product-consult-${product.id}`}
          className="group/btn flex items-center justify-center gap-2 mt-2 py-2.5 px-4 rounded-xl border border-[#FACC15]/30 hover:border-[#FACC15] hover:bg-[#FACC15]/10 text-[#FACC15] text-sm font-bold transition-all duration-200"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover/btn:scale-110" />
          Consultar
        </a>
      </div>
    </div>
  );
}
