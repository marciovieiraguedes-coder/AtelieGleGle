import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const carouselImages = [
  "https://lh3.googleusercontent.com/d/18UJNQ2v8caKlCkCfjzwNhryjx0F6u1o_",
  "https://lh3.googleusercontent.com/d/1X_2LA1xgQEoGpinlfdV4RY7mP0yosYEW",
  "https://lh3.googleusercontent.com/d/1EMD4Nc8u1ehdpJbYQfeNPmtnu6Bp7WN4",
  "https://lh3.googleusercontent.com/d/1tPPLYDhoNpXtLQo3BFGCHFxhnKPuc03d",
  "https://lh3.googleusercontent.com/d/1cvcyHSsD-8lfHp07NZUGeRNtbM1sIGEM"
];

export const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre" className="py-24 bg-luxury-sand/20 overflow-hidden relative">
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 -right-[20%] -translate-y-1/2 z-0 pointer-events-none opacity-[0.04]">
        <img 
          src="https://lh3.googleusercontent.com/d/1ozj8bojfTGvflnISTzf5EYD8fNQ8d71J" 
          alt="" 
          className="w-full max-w-4xl object-contain rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT COLUMN: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-luxury-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Nossa Essência</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-luxury-graphite">
              A arte de criar <br /><span className="italic text-luxury-gold font-normal">memórias táteis.</span>
            </h2>
            <div className="space-y-6 text-luxury-graphite/80 leading-relaxed text-lg font-light">
              <p>
                No coração de Manaus, o <strong>Ateliê Gleglê</strong> nasceu de um desejo profundo: transformar celebrações comuns em eventos cinematográficos. Localizados no São José Operário, levamos sofisticação a cada canto da nossa cidade.
              </p>
              <p>
                Não entregamos apenas balões. Entregamos o brilho nos olhos dos convidados, a perfeição em cada curva orgânica e o luxo que sua história merece. Nossas decorações são pensadas de forma editorial, unindo o artesanal com o contemporâneo.
              </p>
              <p className="font-display italic text-2xl text-luxury-graphite">
                "Seu evento não é apenas uma data, é o cenário de uma vida inteira."
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-luxury-gold/20 flex gap-10">
              <div>
                <span className="block text-3xl font-display font-bold text-luxury-gold">5.0</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-graphite/60">Avaliação Google</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-luxury-gold">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-graphite/60">Personalizado</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            {/* Elegant Floating Frame */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-full">
              {/* Soft shadow background element */}
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-sm transform translate-x-6 translate-y-6" />
              
              <div className="relative w-full h-full bg-white shadow-2xl rounded-sm overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={carouselImages[currentImage]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Galeria Nossa Essência"
                  />
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Ir para a imagem ${index + 1}`}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      currentImage === index ? "w-8 bg-luxury-gold" : "w-2 bg-luxury-graphite/20 hover:bg-luxury-gold/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
