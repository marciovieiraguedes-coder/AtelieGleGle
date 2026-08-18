import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenScheduling: () => void;
}

export const Navbar = ({ onOpenScheduling }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-luxury-bg/80 backdrop-blur-md border-b border-luxury-gold/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-luxury-graphite z-50 relative">
            Ateliê <span className="text-luxury-gold italic">Gleglê</span>
          </a>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-widest uppercase text-luxury-graphite">
            <a href="#sobre" className="hover:text-luxury-gold transition-colors">O Ateliê</a>
            <a href="#diferenciais" className="hover:text-luxury-gold transition-colors">Diferenciais</a>
            <a href="#portfolio" className="hover:text-luxury-gold transition-colors">Portfólio</a>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4 z-50 relative">
            {/* Desktop Actions */}
            <button 
              onClick={onOpenScheduling}
              className="hidden md:flex items-center gap-2 text-luxury-graphite hover:text-luxury-gold transition-colors font-bold uppercase tracking-widest text-xs border border-luxury-sand px-4 py-3 rounded-sm"
            >
              <Calendar className="w-4 h-4" />
              Agendar
            </button>
            
            <a 
              href="https://wa.me/5592992186263" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex shine-button bg-luxury-gold text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-luxury-graphite transition-all"
            >
              Solicitar Orçamento
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-luxury-graphite hover:text-luxury-gold transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-bg/95 backdrop-blur-lg pt-24 px-6 pb-6 flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 items-center text-center mt-10">
              <a href="#sobre" onClick={handleNavClick} className="text-xl font-bold tracking-widest uppercase text-luxury-graphite hover:text-luxury-gold transition-colors">O Ateliê</a>
              <a href="#diferenciais" onClick={handleNavClick} className="text-xl font-bold tracking-widest uppercase text-luxury-graphite hover:text-luxury-gold transition-colors">Diferenciais</a>
              <a href="#portfolio" onClick={handleNavClick} className="text-xl font-bold tracking-widest uppercase text-luxury-graphite hover:text-luxury-gold transition-colors">Portfólio</a>
              
              <div className="w-16 h-px bg-luxury-gold/30 my-4"></div>
              
              <button 
                onClick={() => {
                  onOpenScheduling();
                  handleNavClick();
                }}
                className="w-full max-w-sm flex justify-center items-center gap-2 text-luxury-graphite border border-luxury-sand px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:border-luxury-gold transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Agendar
              </button>
              
              <a 
                href="https://wa.me/5592992186263" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full max-w-sm shine-button bg-luxury-gold text-white px-6 py-4 text-sm font-bold tracking-widest uppercase hover:bg-luxury-graphite transition-all text-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
