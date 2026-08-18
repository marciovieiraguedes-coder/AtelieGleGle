import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Eduarda",
    role: "Mãe da Alice",
    content: "A decoração superou todas as nossas expectativas! Os balões orgânicos deram um toque de luxo único que nunca tínhamos visto em Manaus. Profissionalismo impecável.",
    rating: 5
  },
  {
    name: "Ana Clara",
    role: "Noiva",
    content: "Transformaram nosso noivado em um cenário de revista. O cuidado com as cores e a harmonia da decoração foi o comentário de todos os convidados. Inesquecível!",
    rating: 5
  },
  {
    name: "João Pedro",
    role: "Empresário",
    content: "Melhor serviço de cenografia da cidade. Atendimento exclusivo e materiais de altíssima qualidade. O Ateliê Gleglê justifica cada centavo do investimento.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-brand-secondary/20 overflow-hidden relative">
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 pointer-events-none opacity-[0.03] -translate-x-1/4">
        <img 
          src="https://lh3.googleusercontent.com/d/10YqgUJnKhEro6rjzeCmC5Mxuc21b09H-" 
          alt="" 
          className="w-full max-w-[800px] object-contain -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-reveal">Depoimentos</span>
          <h2 className="text-4xl md:text-6xl font-bold">O que dizem <br /><span className="italic font-normal text-brand-primary">Nossos Clientes</span></h2>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[400px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute w-full text-center px-12"
            >
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-brand-primary flex items-center justify-center rounded-full shadow-xl">
                  <Quote className="text-white w-8 h-8" />
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-display italic text-brand-dark leading-relaxed mb-10">
                "{testimonials[index].content}"
              </p>

              <div>
                <h4 className="text-xl font-bold tracking-tight text-brand-dark">{testimonials[index].name}</h4>
                <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">{testimonials[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={prev}
              className="pointer-events-auto w-12 h-12 border border-brand-primary/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-brand-primary group-hover:text-white" />
            </button>
            <button 
              onClick={next}
              className="pointer-events-auto w-12 h-12 border border-brand-primary/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-brand-primary group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? "w-8 bg-brand-primary" : "w-2 bg-brand-primary/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
