import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Camera,
  Wrench,
} from "lucide-react";
import FacebookIcon from "@/components/ui/FacebookIcon";
import { assetPath } from "@/lib/site";

const footerCategories = [
  { label: "Herramientas", href: "/catalogo?cat=herramientas" },
  { label: "Electricidad", href: "/catalogo?cat=electricidad" },
  { label: "Plomería", href: "/catalogo?cat=plomeria" },
  { label: "Pinturas", href: "/catalogo?cat=pinturas" },
  { label: "Tornillería", href: "/catalogo?cat=tornilleria" },
  { label: "Construcción", href: "/catalogo?cat=construccion" },
  { label: "Seguridad Industrial", href: "/catalogo?cat=seguridad" },
  { label: "Jardinería", href: "/catalogo?cat=jardineria" },
];

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Promociones", href: "#promociones" },
  { label: "Contacto", href: "#contacto" },
  { label: "Catálogo", href: "/catalogo" },
];

import { contactInfo } from "@/data/contact";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_NUMBER = contactInfo.whatsappNumber;
const WHATSAPP_MSG = encodeURIComponent(contactInfo.whatsappMsg);

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col items-start gap-4 mb-5 group">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#FFFBEB] via-[#FEF9C3] to-[#FDE68A] border border-[#FACC15]/50 p-3 shadow-[0_4px_20px_rgba(0,0,0,0.35)] ring-1 ring-white/40">
                <Image
                  src={assetPath("/images/logo.svg")}
                  alt="Logo Ferretería El Kiosko"
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 128px, 144px"
                  className="object-contain object-center transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col leading-tight gap-0.5">
                <span className="text-[#FACC15] font-black text-xl sm:text-2xl uppercase tracking-tight">
                  El Kiosko
                </span>
                <span className="text-white/55 text-sm tracking-[0.2em] uppercase font-semibold">
                  Ferretería
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Tu ferretería de confianza. Herramientas, materiales y soluciones para el hogar,
              maestros de obra y empresas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FACC15]/20 border border-white/10 hover:border-[#FACC15]/40 flex items-center justify-center text-white/50 hover:text-[#FACC15] transition-all duration-200"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 flex items-center justify-center text-white/50 hover:text-[#1877F2] transition-all duration-200"
                aria-label="Facebook — Ferretería El Kiosko"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 flex items-center justify-center text-white/50 hover:text-[#25D366] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#FACC15]" />
              Categorías
            </h3>
            <ul className="space-y-2.5">
              {footerCategories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-white/50 hover:text-[#FACC15] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FACC15]/40 group-hover:bg-[#FACC15] transition-colors" />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#FACC15] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${contactInfo.whatsappNumber}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                  <span className="text-sm">{contactInfo.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span className="text-sm">{contactInfo.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <Clock className="w-4 h-4 text-[#FACC15] mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>{contactInfo.schedule}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO text */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/25 text-xs text-center leading-relaxed max-w-4xl mx-auto">
            Ferretería El Kiosko — Tu ferretería de confianza en Buenos Aires. Especialistas en
            herramientas eléctricas y manuales, materiales de construcción, electricidad, plomería,
            pinturas, tornillería y seguridad industrial. Atención a particulares, maestros de obra
            y empresas. Ferretería cerca de vos.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Ferretería El Kiosko. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">Hecho con ❤️ para seguir creciendo</p>
        </div>
      </div>
    </footer>
  );
}
