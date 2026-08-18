import { motion } from "motion/react";

const galleryItems = [
  {
    title: "Cenário Magia Rosa",
    category: "Infantil de Luxo",
    image: "https://lh3.googleusercontent.com/d/16joYF3IfqYYNTot3Ly9kzVNN_R63IofU",
    size: "col-span-1 row-span-2"
  },
  {
    title: "Elegância em Azul",
    category: "Eventos Sociais",
    image: "https://lh3.googleusercontent.com/d/1DoRRllRjGyAJZClbSreXpcfiu-d7sZtg",
    size: "col-span-2 row-span-1"
  },
  {
    title: "Arte com Balões",
    category: "Design Orgânico",
    image: "https://lh3.googleusercontent.com/d/1E7CQvp7cCOiKhjbWRJXQiOlA28BC0Cub",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Celebração Radiant",
    category: "Premium Edition",
    image: "https://lh3.googleusercontent.com/d/1H--_lmR8eN_jTFy2y9mB2Cm7xhMNp3dw",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Momento Inesquecível",
    category: "Exclusividade",
    image: "https://lh3.googleusercontent.com/d/1eNGGGuakllBWHzcqO-TWTDPmHwkC7fvo",
    size: "col-span-2 row-span-2"
  },
  {
    title: "Sonhos Flutuantes",
    category: "Curadoria Artística",
    image: "https://lh3.googleusercontent.com/d/1eQgWZ4xNxw22CWSDk6_U1pi8glohIMli",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Luxo Atemporal",
    category: "Cenografias",
    image: "https://lh3.googleusercontent.com/d/1hiL9QCjC1DXK3gXwlB0PyiGrTB2Jc-XC",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Festa Extraordinária",
    category: "Sociais Manaus",
    image: "https://lh3.googleusercontent.com/d/1nT4McUU6w0GG8i8RhNf5izZQ30sNuNby",
    size: "col-span-1 row-span-1"
  }
];

export const Gallery = () => {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-[0.02] w-full max-w-7xl">
        <img 
          src="https://lh3.googleusercontent.com/d/1MpQR6Xn-_gWJEHQ1dxYBjK7F4arBueIV" 
          alt="" 
          className="w-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-6xl font-bold">Galeria <span className="italic font-normal">Momentos</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              viewport={{ once: true }}
              className={`${item.size} relative group overflow-hidden cursor-pointer`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-display transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
