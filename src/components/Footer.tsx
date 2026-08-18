import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-luxury-graphite text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.05]">
        <img 
          src="https://lh3.googleusercontent.com/d/1kFJwcevbqzSHe7B1Yk5xJbAaTFc5a9gy" 
          alt="" 
          className="w-full max-w-5xl object-contain opacity-30 grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Seu evento merece <br /> o <span className="text-luxury-gold italic">extraordinário.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md mb-12">
              Pronta para transformar seu sonho em realidade? Entre em contato agora e garanta sua data em nossa agenda.
            </p>
            <a 
              href="https://wa.me/5592992186263" 
              className="shine-button inline-flex items-center gap-4 bg-luxury-gold text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-luxury-graphite transition-all"
            >
              Planejar meu Evento
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-luxury-gold font-bold tracking-widest uppercase text-xs mb-6">Localização</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex gap-3">
                  <a href="https://maps.app.goo.gl/6knSRmxRrnHC2PzS6" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-luxury-gold transition-colors">
                    <MapPin className="w-5 h-5 text-luxury-gold shrink-0" />
                    <span>R. Rio Dimiti, 54 - quadra 50 - São José Operário<br />Manaus - AM, 69086-386</span>
                  </a>
                </li>
              </ul>
              
              <div className="mt-8 rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.053155705358!2d-59.9441113250289!3d-3.080537496894901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c10360a7593c3%3A0x600f3c054236e788!2sR.%20Rio%20Dimiti%2C%2054%20-%20S%C3%A3o%20Jos%C3%A9%20Oper%C3%A1rio%2C%20Manaus%20-%20AM%2C%2069085-170!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div>
              <h4 className="text-luxury-gold font-bold tracking-widest uppercase text-xs mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex gap-3 items-center">
                  <a href="https://wa.me/5592992186263" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                    </div>
                    <span>(92) 99218-6263</span>
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <a href="https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#E4405F]/10 flex items-center justify-center group-hover:bg-[#E4405F] transition-all">
                      <Instagram className="w-4 h-4 text-[#E4405F] group-hover:text-white" />
                    </div>
                    <span>@atelieglegle123</span>
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <a href="https://www.facebook.com/110349258658394?ref=PRODASH_UPSELL_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2] transition-all">
                      <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white" />
                    </div>
                    <span>Ateliê Gleglê</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-xl">
            Ateliê <span className="text-luxury-gold">Gleglê</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-brand-primary/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all text-brand-primary">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/110349258658394?ref=PRODASH_UPSELL_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-brand-primary/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all text-brand-primary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5592992186263" className="w-10 h-10 border border-brand-primary/20 rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all text-brand-primary">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/40">
            © 2024 Ateliê Gleglê • Manaus/AM
          </div>
        </div>
      </div>
    </footer>
  );
};
