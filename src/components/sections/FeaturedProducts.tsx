import ProductCard from "@/components/ui/ProductCard";
import { featuredProducts } from "@/data/products";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section id="productos" className="bg-[#0D0D0D] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 border border-[#FACC15]/20 rounded-full px-4 py-1.5 mb-4">
              <ShoppingBag className="w-3.5 h-3.5 text-[#FACC15]" />
              <span className="text-[#FACC15] text-xs font-semibold uppercase tracking-wider">
                Productos destacados
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Lo más consultado
              <br />
              <span className="text-gradient-yellow">esta semana</span>
            </h2>
          </div>
          <Link
            href="/catalogo"
            id="ver-catalogo-completo-btn"
            className="group inline-flex items-center gap-2 text-[#FACC15] hover:text-[#EAB308] font-bold text-sm uppercase tracking-wider transition-colors flex-shrink-0"
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-[#0A0A0A] font-black px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-[0_8px_32px_rgba(250,204,21,0.4)] hover:-translate-y-0.5"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
