import Image from "next/image";
import { Tag, ArrowRight, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { contactInfo } from "@/data/contact";

const WHATSAPP_NUMBER = contactInfo.whatsappNumber;
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! Vi una promoción en la web y quiero consultar más detalles"
);

const promos = [
  {
    id: "promo-herramientas",
    tag: "Oferta de la semana",
    title: "Hasta 30% OFF en herramientas eléctricas",
    description: "Taladros, amoladoras, atornilladoras y más. Stock limitado.",
    badge: "30% OFF",
    color: "from-[#FACC15] to-[#EAB308]",
    textColor: "text-[#0A0A0A]",
    expires: "Válido hasta el domingo",
  },
  {
    id: "promo-construccion",
    tag: "Promo especial",
    title: "2do en 50% OFF en materiales de construcción",
    description: "En adhesivos, cemento y selladores seleccionados.",
    badge: "2×1",
    color: "from-[#1C1C1E] to-[#2C2C2E]",
    textColor: "text-white",
    expires: "Mientras dure el stock",
  },
];

export default function PromoBanner() {
  return (
    <section id="promociones" className="bg-[#0D0D0D] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 border border-[#FACC15]/20 rounded-full px-4 py-1.5 mb-4">
            <Tag className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="text-[#FACC15] text-xs font-semibold uppercase tracking-wider">
              Ofertas y promociones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Aprovechá nuestras
            <br />
            <span className="text-gradient-yellow">mejores ofertas</span>
          </h2>
        </div>

        {/* Hero promo banner */}
        <div className="relative rounded-3xl overflow-hidden mb-6 min-h-[280px] lg:min-h-[360px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/promo_banner.png"
              alt="Banner de promociones - Ferretería El Kiosko"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/75 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center p-8 lg:p-14 h-full min-h-[280px] lg:min-h-[360px]">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0A0A0A] rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider mb-4">
                <Tag className="w-3 h-3" />
                Oferta especial
              </div>
              <h3 className="text-white text-3xl lg:text-5xl font-black mb-4 leading-tight">
                <span className="text-gradient-yellow">30% OFF</span>
                <br />
                en herramientas eléctricas
              </h3>
              <p className="text-white/65 text-base lg:text-lg mb-6 max-w-md">
                Renovamos el stock y queremos que aproveches esta oportunidad.
                Precios imbatibles en taladros, amoladoras y más.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="promo-whatsapp-btn"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-[#0A0A0A] font-black px-6 py-3 rounded-xl hover:shadow-[0_8px_24px_rgba(250,204,21,0.5)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#0A0A0A]" />
                  Quiero esta oferta
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="inline-flex items-center gap-2 text-white/50 text-sm">
                  <Clock className="w-4 h-4" />
                  Válido hasta el domingo
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary promo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {promos.map((promo) => (
            <div
              key={promo.id}
              id={promo.id}
              className="group relative bg-gradient-to-br from-[#1C1C1E] to-[#141414] border border-white/8 rounded-2xl p-6 hover:border-[#FACC15]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden max-w-sm mx-auto w-full sm:max-w-none"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-black bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-[#0A0A0A]">
                  {promo.badge}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[#FACC15]/60 text-xs font-semibold uppercase tracking-wider mb-3">
                <Tag className="w-3 h-3" />
                {promo.tag}
              </div>
              <h3 className="text-white font-black text-lg mb-2 pr-20 group-hover:text-[#FACC15] transition-colors">
                {promo.title}
              </h3>
              <p className="text-white/45 text-sm mb-4">{promo.description}</p>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FACC15] text-sm font-bold hover:underline"
                >
                  Consultar
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-white/25 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {promo.expires}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
