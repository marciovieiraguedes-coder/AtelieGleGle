import { motion } from "motion/react";
import { Sparkles, Palette, Diamond, CalendarCheck } from "lucide-react";

const differentials = [
  {
    icon: Sparkles,
    title: "Personalização Exclusiva",
    description: "Cada detalhe é desenhado para contar sua história de forma única e autêntica."
  },
  {
    icon: Palette,
    title: "Design Sofisticado",
    description: "Curadoria artística que une tendências globais com o calor de Manaus."
  },
  {
    icon: Diamond,
    title: "Materiais Premium",
    description: "Trabalhamos apenas com balões e mobiliários de alto padrão internacional."
  },
  {
    icon: CalendarCheck,
    title: "Experiência Completa",
    description: "Do planejamento à execução impecável, cuidamos de tudo para sua tranquilidade."
  }
];

export const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <img 
          src="https://lh3.googleusercontent.com/d/1V1yAUr1b-xdKj6_SNIMyo6DEiRF55nC5" 
          alt="" 
          className="w-full max-w-6xl object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-brand-secondary/40 rounded-full group-hover:bg-brand-primary transition-colors duration-500">
                <item.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-brand-dark">{item.title}</h3>
              <p className="text-sm leading-relaxed text-brand-text/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
