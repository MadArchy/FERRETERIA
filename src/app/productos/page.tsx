import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
  description: "Catálogo de productos de Ferretería El Kiosko.",
};

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center mx-auto mb-6">
          <Package className="w-10 h-10 text-[#FACC15]" />
        </div>
        <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 border border-[#FACC15]/20 rounded-full px-4 py-1.5 mb-4">
          <span className="text-[#FACC15] text-xs font-semibold uppercase tracking-wider">
            Próximamente
          </span>
        </div>
        <h1 className="text-3xl font-black text-white mb-4">Productos individuales</h1>
        <p className="text-white/50 mb-8">
          Las páginas individuales de producto con ficha técnica, galería de imágenes
          y stock en tiempo real estarán disponibles pronto.
        </p>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-[#0A0A0A] font-black px-6 py-3 rounded-xl hover:shadow-[0_8px_24px_rgba(250,204,21,0.4)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}
