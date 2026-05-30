"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/contact";
import { assetPath } from "@/lib/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Categorías", href: "#categorias" },
  { label: "Productos", href: "#productos" },
  { label: "Promociones", href: "#promociones" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_NUMBER = contactInfo.whatsappNumber;
const WHATSAPP_MSG = encodeURIComponent(contactInfo.whatsappMsg);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const section = href.replace("#", "");
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        id="header"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6)] border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Ferretería El Kiosko - Ir al inicio"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <Image
                  src={assetPath("/images/logo.svg")}
                  alt="Logo Ferretería El Kiosko"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[#FACC15] font-black text-base lg:text-lg tracking-tight uppercase">
                  El Kiosko
                </span>
                <span className="text-white/50 text-[10px] lg:text-xs tracking-widest uppercase font-medium">
                  Ferretería
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                    activeSection === link.href.replace("#", "")
                      ? "text-[#FACC15] bg-[#FACC15]/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Phone - desktop only */}
              <a
                href={`tel:+${contactInfo.whatsappNumber}`}
                className="hidden lg:flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                aria-label="Llamar por teléfono"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.whatsappDisplay}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className={cn(
                  "flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-bold rounded-xl transition-all duration-200",
                  "hover:shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:-translate-y-0.5",
                  "w-10 h-10 sm:w-auto sm:h-auto sm:px-3 sm:py-2 lg:px-4"
                )}
                aria-label="Contactar por WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Mobile hamburger */}
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-[#111111]/98 backdrop-blur-xl border-t border-white/5 px-4 py-4">
            <nav className="flex flex-col gap-1" aria-label="Navegación mobile">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left w-full px-4 py-3 rounded-xl text-base font-medium text-white/80 hover:text-[#FACC15] hover:bg-[#FACC15]/10 transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={`tel:+${contactInfo.whatsappNumber}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.whatsappDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-4 py-3 rounded-xl transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chatear por WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
