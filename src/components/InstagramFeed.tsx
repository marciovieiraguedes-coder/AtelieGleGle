import { motion } from "motion/react";
import { Heart, MessageCircle, Instagram } from "lucide-react";

const feedItems = [
  {
    image: "https://lh3.googleusercontent.com/d/16joYF3IfqYYNTot3Ly9kzVNN_R63IofU",
    likes: 124,
    comments: 12,
    link: "https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1DoRRllRjGyAJZClbSreXpcfiu-d7sZtg",
    likes: 89,
    comments: 5,
    link: "https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1E7CQvp7cCOiKhjbWRJXQiOlA28BC0Cub",
    likes: 245,
    comments: 34,
    link: "https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1H--_lmR8eN_jTFy2y9mB2Cm7xhMNp3dw",
    likes: 156,
    comments: 18,
    link: "https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1eNGGGuakllBWHzcqO-TWTDPmHwkC7fvo",
    likes: 412,
    comments: 56,
    link: "https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1hiL9QCjC1DXK3gXwlB0PyiGrTB2Jc-XC",
    likes: 102,
    comments: 8,
    link: "https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  }
];

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-luxury-sand/30 overflow-hidden relative border-t border-luxury-gold/10">
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.03] w-full max-w-4xl">
        <img 
          src="https://lh3.googleusercontent.com/d/1MpQR6Xn-_gWJEHQ1dxYBjK7F4arBueIV" 
          alt="" 
          className="w-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Instagram className="text-white w-8 h-8" />
          </div>
          <span className="text-luxury-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Atualizações Recentes</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Siga-nos no <span className="italic font-normal">Instagram</span></h2>
          <a href="https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-luxury-graphite/70 hover:text-luxury-gold transition-colors text-lg">
            @atelieglegle123
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group aspect-square overflow-hidden bg-luxury-sand/30 rounded-sm block"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-luxury-graphite/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center text-white gap-2 font-bold">
                  <Heart className="w-6 h-6 fill-white" />
                  <span>{item.likes}</span>
                </div>
                <div className="flex items-center text-white gap-2 font-bold">
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>{item.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a 
            href="https://www.instagram.com/atelieglegle123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shine-button inline-flex items-center gap-3 bg-luxury-graphite text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-luxury-gold transition-all rounded-sm shadow-md"
          >
            <Instagram className="w-4 h-4" />
            Acessar Perfil Completo
          </a>
        </div>
      </div>
    </section>
  );
};
