import Link from "next/link";
import { ArrowLeft, LayoutDashboard, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de Administración",
  description: "Administración de Ferretería El Kiosko.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-10 h-10 text-red-400" />
        </div>
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-4">
          <LayoutDashboard className="w-3.5 h-3.5 text-red-400" />
          <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">
            Área restringida
          </span>
        </div>
        <h1 className="text-3xl font-black text-white mb-4">Panel de administración</h1>
        <p className="text-white/50 mb-8">
          El dashboard de administración (gestión de inventario, pedidos, precios y
          catálogo) está en construcción. Requiere autenticación de administrador.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-[#0A0A0A] font-black px-6 py-3 rounded-xl hover:shadow-[0_8px_24px_rgba(250,204,21,0.4)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
