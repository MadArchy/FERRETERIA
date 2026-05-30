import { MapPin, Phone, Clock, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { contactInfo } from "@/data/contact";

const WHATSAPP_NUMBER = contactInfo.whatsappNumber;
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! Tengo una consulta sobre Ferretería El Kiosko"
);

const schedule = [
  { day: "Lunes – Sábado", hours: "7:30 AM – 6:00 PM" },
  { day: "Domingo", hours: "Cerrado" },
];

export default function ContactSection() {
  return (
    <section id="ubicacion" className="bg-[#0D0D0D] py-20 lg:py-28">
      <div id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 border border-[#FACC15]/20 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="text-[#FACC15] text-xs font-semibold uppercase tracking-wider">
              Ubicación y contacto
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Visitanos o
            <br />
            <span className="text-gradient-yellow">contactanos ahora</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Estamos para atenderte en persona, por teléfono o WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="bg-gradient-to-br from-[#1C1C1E] to-[#141414] border border-white/8 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#FACC15]" />
                </div>
                <h3 className="text-white font-bold">Dirección</h3>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">
                Cl. 2 #6-36, Barrio Dona Ceci<br />
                Cúcuta, Norte de Santander
              </p>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#FACC15] text-xs font-semibold mt-3 hover:underline"
              >
                Ver en Google Maps →
              </a>
            </div>

            {/* Phone & WA */}
            <div className="bg-gradient-to-br from-[#1C1C1E] to-[#141414] border border-white/8 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FACC15]" />
                </div>
                <h3 className="text-white font-bold">Teléfono y WhatsApp</h3>
              </div>
              <div className="space-y-3">
                <a
                  href={`tel:+${contactInfo.whatsappNumber}`}
                  className="flex items-center gap-2 text-white/65 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                  {contactInfo.whatsappDisplay}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#1ebe5a] transition-colors text-sm font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {contactInfo.whatsappDisplay}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-white/65 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FACC15]" />
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-to-br from-[#1C1C1E] to-[#141414] border border-white/8 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FACC15]" />
                </div>
                <h3 className="text-white font-bold">Horario de atención</h3>
              </div>
              <div className="space-y-2.5">
                {schedule.map((item) => (
                  <div key={item.day} className="flex items-center justify-between text-sm">
                    <span className="text-white/55">{item.day}</span>
                    <span
                      className={
                        item.hours === "Cerrado"
                          ? "text-red-400 font-medium"
                          : "text-[#FACC15] font-bold"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#1C1C1E] min-h-[320px] lg:min-h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#252525] to-[#1A1A1A]" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(250,204,21,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative text-center px-6">
                <div className="w-14 h-14 rounded-full bg-[#FACC15]/20 border-2 border-[#FACC15] flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-7 h-7 text-[#FACC15]" />
                </div>
                <p className="text-white/40 text-sm">Mapa interactivo próximamente</p>
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FACC15] text-sm font-bold mt-2 hover:underline"
                >
                  Ver ubicación en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
