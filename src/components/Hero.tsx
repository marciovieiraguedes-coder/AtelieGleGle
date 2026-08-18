import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-luxury-bg">
      {/* Background Watermark */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl pointer-events-none z-0"
      >
        <img 
          src="https://lh3.googleusercontent.com/d/17MlfiR-ZG0M7GtR-Ij0K_3cO75-H2Fa8" 
          alt="" 
          className="w-full h-auto grayscale logo-screen"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* NEW FIELD: Logo and Title */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16 md:mb-24 w-full"
        >
          <div className="relative">
            <div className="absolute w-[140%] aspect-square bg-luxury-gold/10 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <img 
              src="https://lh3.googleusercontent.com/d/1zpI7CWlk-psN9bMfWca0iZ8tonXhUocL" 
              alt="Logomarca Ateliê Gleglê" 
              className="object-contain drop-shadow-2xl w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
            />
          </div>
          
          <div className="flex flex-col items-center md:items-start text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-display font-bold text-luxury-graphite leading-none tracking-tight whitespace-nowrap">
              Ateliê <span className="text-luxury-gold italic font-normal">Gleglê</span>
            </h1>
            <div className="w-24 h-1 bg-luxury-gold mt-6 md:mt-8 rounded-full" />
          </div>
        </motion.div>

        {/* Readjusted Texts Field */}
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="inline-block px-6 py-2 mb-8 bg-luxury-gold text-white text-xs font-bold tracking-[0.3em] uppercase rounded-sm shadow-md">
              Manaus, Amazonas
            </span>
          </motion.div>
          
          <div className="text-reveal mb-8 relative">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-luxury-graphite"
            >
              Transformamos <span className="text-luxury-gold italic font-normal">Sonhos</span> em <br className="hidden md:block" />
              Cenários <span className="font-light">Extraordinários.</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-2xl text-luxury-graphite/80 mb-12 max-w-2xl leading-relaxed font-light"
          >
            Especialistas em arte com balões e decorações personalizadas que eternizam seus momentos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <a 
              href="https://wa.me/5592992186263" 
              className="shine-button inline-flex items-center justify-center gap-4 bg-luxury-graphite text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-luxury-gold transition-all animate-pulse shadow-xl"
            >
              Fale com nossa Especialista
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-luxury-gold opacity-50" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase vertical-text rotate-180 mb-4 text-luxury-graphite/60" style={{ writingMode: 'vertical-rl' }}>
            Deslize para descobrir
          </span>
        </div>
      </motion.div>
    </section>
  );
};
