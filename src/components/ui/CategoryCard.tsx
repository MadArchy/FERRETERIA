import {
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
  Settings,
  Building2,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { type Category } from "@/data/categories";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
  Settings,
  Building2,
  ShieldCheck,
  Leaf,
};

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Wrench;

  return (
    <Link
      href={category.href}
      id={`cat-card-${category.id}`}
      className="group relative bg-[#141414] border border-white/8 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 min-h-[190px] sm:min-h-[220px] hover:border-[#FACC15]/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),0_2px_8px_rgba(250,204,21,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-500">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* Hover glow bg */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#FACC15]/5 via-transparent to-transparent rounded-2xl pointer-events-none" />

      {/* Icon */}
      <div className="relative z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-black/55 backdrop-blur-sm group-hover:bg-[#FACC15]/20 border border-[#FACC15]/30 group-hover:border-[#FACC15]/50 flex items-center justify-center transition-all duration-300 shadow-lg">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FACC15]" />
      </div>

      {/* Text block — localized scrim at bottom only */}
      <div className="relative z-20 mt-auto -mx-4 sm:-mx-5 lg:-mx-6 -mb-4 sm:-mb-5 lg:-mb-6">
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="relative px-4 sm:px-5 lg:px-6 pt-10 pb-4 sm:pb-5 lg:pb-6 flex flex-col gap-2">
          <h3 className="text-white font-bold text-sm sm:text-base text-readable-strong group-hover:text-[#FACC15] transition-colors duration-200">
            {category.name}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-2 text-readable group-hover:text-white transition-colors duration-200">
            {category.description}
          </p>
          <div className="flex items-center gap-1 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-readable transition-all duration-200">
            <span>Ver productos</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-gradient-to-r from-[#FACC15]/0 via-[#FACC15]/60 to-[#FACC15]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}
