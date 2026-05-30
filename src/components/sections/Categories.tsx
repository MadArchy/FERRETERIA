import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";
import { LayoutGrid } from "lucide-react";

export default function Categories() {
  return (
    <section id="categorias" className="bg-[#0A0A0A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 border border-[#FACC15]/20 rounded-full px-4 py-1.5 mb-4">
            <LayoutGrid className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="text-[#FACC15] text-xs font-semibold uppercase tracking-wider">
              Nuestras categorías
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Todo lo que necesitás,<br />
            <span className="text-gradient-yellow">en un solo lugar</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Desde herramientas profesionales hasta materiales de construcción.
            Stock permanente para hogares y empresas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
