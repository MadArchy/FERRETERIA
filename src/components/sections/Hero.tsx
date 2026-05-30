"use client";

import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

import { contactInfo } from "@/data/contact";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_NUMBER = contactInfo.whatsappNumber;
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! Quiero solicitar una cotización de Ferretería El Kiosko"
);

export default function Hero() {
  const scrollToCatalogo = () => {
    const el = document.getElementById("categorias");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_tools.png"
          alt="Herramientas profesionales - Ferretería El Kiosko"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Yellow accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FACC15] to-transparent z-10" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          {/* Logo — luz blanca suave */}
          <div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: "0.05s", animationFillMode: "both" }}
          >
            <div
              className="pointer-events-none absolute w-[90%] max-w-[260px] aspect-square rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute w-[65%] max-w-[180px] aspect-square rounded-full bg-white/35 blur-2xl"
              aria-hidden
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-fk.svg"
              alt="Ferretería El Kiosko"
              width={288}
              height={288}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_45px_rgba(255,255,255,0.3),0_0_70px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.4)]"
            />
          </div>

          <div className="max-w-3xl copy-backdrop order-2 lg:order-1">
            {/* Headline */}
            <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <span className="text-white text-readable-strong">Todo para </span>
            <span className="text-accent-yellow">construir,</span>
            <br />
            <span className="text-white text-readable-strong">reparar y </span>
            <span className="text-accent-yellow">mejorar</span>
            <br />
            <span className="text-white text-readable-strong">en un solo lugar.</span>
            </h1>

            {/* Subtitle */}
            <p
            className="text-white/90 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl text-readable animate-fade-up"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            Herramientas, materiales, electricidad, plomería, pintura y
            ferretería general con atención rápida y confiable.
            </p>

            {/* CTAs */}
            <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <button
              id="hero-catalogo-btn"
              onClick={scrollToCatalogo}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-[#0A0A0A] font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-[0_8px_32px_rgba(250,204,21,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Ver catálogo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              id="hero-whatsapp-btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-black/50 hover:bg-black/65 backdrop-blur-sm border border-white/25 hover:border-[#25D366]/60 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366] transition-transform group-hover:scale-110" />
              Cotizar por WhatsApp
            </a>
            </div>

            {/* Stats */}
            <div
            className="flex flex-wrap gap-8 mt-14 animate-fade-up"
            style={{ animationDelay: "0.55s", animationFillMode: "both" }}
          >
            {[
              { value: "+5.000", label: "Productos" },
              { value: "+15 años", label: "En el mercado" },
              { value: "Atención", label: "Personalizada" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col text-readable">
                <span className="text-[#FACC15] text-2xl font-black">{stat.value}</span>
                <span className="text-white/75 text-sm font-semibold">{stat.label}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToCatalogo}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-[#FACC15] text-readable transition-colors group"
        aria-label="Ver más contenido"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Explorar</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
