"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, ArrowRight, Star, ShieldCheck, Zap, Instagram, Facebook, Heart, Wind, Flame, Utensils } from "lucide-react";

const MENU_ITEMS = [
  { 
    name: "Espresso Intense", 
    price: "250 DA", 
    desc: "Un shot court, une explosion de noisette. Pour ceux qui codent jusqu'à l'aube.", 
    icon: <Zap size={20} />, 
    // Image d'un espresso avec une belle "crema" épaisse
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000", 
    rotate: "-2deg"
  },
  { 
    name: "Latte Pistache", 
    price: "450 DA", 
    desc: "La douceur absolue. Un lait soyeux dessiné avec amour pour vos pauses créatives.", 
    icon: <Heart size={20} />, 
    // Image d'un latte art avec des reflets légèrement verts/pistache
    img: "latte-pist.png", 
    rotate: "1deg"
  },
  { 
    name: "Signature DZ", 
    price: "500 DA", 
    desc: "Notre héritage revisité avec une sélection de grains torréfiés localement.", 
    icon: <ShieldCheck size={20} />, 
    // Image de café traditionnel servi élégamment (style oriental/DZ)
    img: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1000", 
    rotate: "-1.5deg"
  },
  { 
    name: "V60 Artisanal", 
    price: "600 DA", 
    desc: "Café filtré goutte à goutte. Des notes florales qui rappellent les montagnes.", 
    icon: <Wind size={20} />, 
    // Image de l'extraction manuelle en cours (Dripper V60)
    img: "artisan2.png", 
    rotate: "2deg"
  },
  { 
    name: "Affogato Gold", 
    price: "550 DA", 
    desc: "La rencontre brûlante de l'espresso et de la glace vanille artisanale.", 
    icon: <Flame size={20} />, 
    // Image de l'espresso versé sur une boule de glace
    img: "affogato.png",
    rotate: "-1deg"
  },
  { 
    name: "Iced Caramel", 
    price: "500 DA", 
    desc: "Fraîcheur intense et rubans de caramel. Le boost parfait pour l'été.", 
    icon: <Star size={20} />, 
    // Image d'un café glacé avec des coulures de caramel (comme sur ta capture)
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1000",
    rotate: "2.5deg"
  }
];

const FOOD_ITEMS = [
  { 
    name: "Croissant Beurre", 
    price: "180 DA", 
    desc: "Feuilletage artisanal pur beurre, croustillant à souhait pour vos matins.", 
    icon: <Utensils size={20} />, 
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800",
    rotate: "1.5deg"
  },
  { 
    name: "Cookie Choco-Sel", 
    price: "220 DA", 
    desc: "Pépites de chocolat noir et pointe de sel marin. Le compagnon idéal du café.", 
    icon: <Star size={20} />, 
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
    rotate: "-2deg"
  },
  { 
    name: "Brownie cremeux", 
    price: "350 DA", 
    desc: "Un coeur fondant intense en cacao avec des éclats de noisettes grillées.", 
    icon: <Flame size={20} />, 
    img: "brownie.png",
    rotate: "1deg"
  },
  { 
    name: "Avocado Toast", 
    price: "750 DA", 
    desc: "Pain au levain, avocat frais et oeuf poché. Pour un brunch salé et équilibré.", 
    icon: <ShieldCheck size={20} />, 
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800",
    rotate: "1deg"
  },
  { 
    name: "Tiramisu Pistache", 
    price: "550 DA", 
    desc: "Crème mascarpone onctueuse et éclat de pistaches torréfiées. Un délice italien revisité.", 
    icon: <Heart size={20} />, 
    img: "tiramisu-pistache.png",
    rotate: "1deg"
  },
  { 
    name: "Cheesecake Citron", 
    price: "480 DA", 
    desc: "Fraîcheur acidulée sur un biscuit sablé croquant. Parfait avec un thé ou un V60.", 
    icon: <Wind size={20} />, 
    img: "cheesecake-citron.png",
    rotate: "-1.5deg"
  },
];

const STORY_STEPS = [
  {
    year: "2020",
    title: "La Genèse",
    text: "Tout a commencé dans un petit garage à Alger, avec une machine manuelle et une passion dévorante pour le grain parfait.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800"
  },
  {
    year: "2022",
    title: "L'Expansion",
    text: "Ouverture de notre premier concept store. Un mélange entre brutalité architecturale et douceur aromatique.",
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800"
  },
  {
    year: "2024",
    title: "Aujourd'hui",
    text: "Plus qu'un café, une communauté. Dz Caffè devient le point de ralliement des créatifs algériens.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800"
  }
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    // CHANGEMENT DU FOND : Gris anthracite chaud (Taupe) au lieu de noir pur
    <main className="min-h-screen bg-[#1c1c1c] text-white selection:bg-amber-500/30">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 backdrop-blur-xl border-b border-white/5">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20">
            <Coffee size={22} />
          </div>
          <span className="text-xl font-black tracking-tighter italic uppercase">Dz Caffè</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
          <a href="#menu" className="hover:text-amber-500 transition-colors">La Carte</a>
          <a href="#about" className="hover:text-amber-500 transition-colors">Concept</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>

        <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all">
          Réserver
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-coffee.jpg" className="w-full h-full object-cover opacity-60" alt="Hero" />
          {/* L'overlay utilise maintenant le même gris chaud */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c] via-transparent to-[#1c1c1c]" />
        </div>

        {/* TES GRAINS ANIMÉS */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.img 
            src="/grain-cafe.png" 
            animate={{ y: [0, 40, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%] w-32 blur-[4px] opacity-40"
          />
          <motion.img 
            src="/grain-cafe.png" 
            animate={{ y: [0, -60, 0], rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[10%] w-12 opacity-60"
          />
          <motion.img 
            src="/grain-cafe.png" 
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[20%] w-20 opacity-50"
          />
        </div>

        <div className="relative z-30 text-center px-4">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-7xl md:text-[160px] font-black tracking-tighter leading-none drop-shadow-2xl">
              L'ÉLITE DU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-900 leading-tight">
                GRAIN.
              </span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto italic">
            "Une immersion brutale et élégante au cœur du café algérien."
          </motion.p>
        </div>
      </section>

      {/* --- SECTION MENU STYLE CARNET --- */}
      <section id="menu" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.4em]">Menu Selection</span>
            <h2 className="text-6xl font-black mt-4 uppercase tracking-tighter italic">La Carte du Barista</h2>
          </div>
          <p className="text-gray-400 max-w-xs text-xs uppercase tracking-widest leading-relaxed font-bold italic text-right">
            Notes de dégustation et sélections exclusives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MENU_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: "0deg", y: -10 }}
              style={{ rotate: item.rotate }}
              className="bg-zinc-800/40 p-5 rounded-[2.5rem] border border-white/5 shadow-2xl transition-all duration-500 group"
            >
              {/* Image Polaroïd - Bien visible */}
              <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                  alt={item.name}
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000"; }}
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white p-2 rounded-xl shadow-lg">
                  {item.icon}
                </div>
              </div>

              {/* Texte Blog Style */}
              <div className="px-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">{item.name}</h3>
                  <span className="text-amber-500 font-black text-xl italic">{item.price}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium italic border-l-2 border-amber-600/30 pl-4">
                  "{item.desc}"
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Popularité ⭐⭐⭐⭐⭐</span>
                    <button className="text-[10px] font-black uppercase tracking-widest text-white hover:text-amber-500 transition-colors">Commander</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-t border-white/5 pt-32">
          <div>
            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.4em]">Bakery & Sweets</span>
            <h2 className="text-6xl font-black mt-4 uppercase tracking-tighter italic">Pour Accompagner</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FOOD_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: "0deg", y: -10 }}
              style={{ rotate: item.rotate }}
              className="bg-zinc-800/40 p-5 rounded-[2.5rem] border border-white/5 shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                  alt={item.name}
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800"; }}
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white p-2 rounded-xl shadow-lg">
                  {item.icon}
                </div>
              </div>

              <div className="px-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">{item.name}</h3>
                  <span className="text-amber-500 font-black text-xl italic">{item.price}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium italic border-l-2 border-amber-600/30 pl-4">
                  "{item.desc}"
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Fait Maison ✨</span>
                    <button className="text-[10px] font-black uppercase tracking-widest text-white hover:text-amber-500 transition-colors">Commander</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* --- SECTION CONCEPT (L'HISTOIRE) --- */}
      <section id="about" className="py-32 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.4em]">Notre Concept</span>
            <h2 className="text-6xl font-black mt-4 uppercase italic">L'Âme de Dz Caffè</h2>
          </div>

          <div className="space-y-32">
            {STORY_STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <img src={step.img} className="rounded-[2rem] h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={step.title} />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 bg-amber-600 text-black font-black italic mb-6">{step.year}</div>
                  <h3 className="text-4xl font-black uppercase mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-lg italic border-l-2 border-amber-600/30 pl-6">"{step.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* --- SECTION CHIFFRES --- */}
      <section className="py-20 bg-amber-600 text-[#1c1c1c]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center font-black uppercase">
          {[["15k", "Cafés servis"], ["4", "Locations"], ["100%", "Artisanal"], ["24/7", "Ouvert"]].map(([num, label], i) => (
            <div key={i}>
              <div className="text-5xl md:text-7xl tracking-tighter leading-none">{num}</div>
              <div className="text-[10px] tracking-widest mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-20 px-6 border-t border-white/5 bg-[#141414]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
          <div className="max-w-xs mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-600 rounded-md flex items-center justify-center text-white"><Coffee size={18} /></div>
              <span className="text-lg font-black italic uppercase tracking-tighter">Dz Caffè</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">Le premier espace de coworking et café spécialisé en Algérie.</p>
          </div>

          <div className="grid grid-cols-2 gap-20 mx-auto md:mx-0 text-left">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest mb-6 text-amber-500">Réseaux</h4>
              <div className="flex flex-col gap-4 text-sm text-gray-400 font-bold">
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Instagram size={14} /> Instagram</a>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Facebook size={14} /> Facebook</a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest mb-6 text-amber-500">Contact</h4>
              <p className="text-sm text-gray-400 italic font-bold">mehdi110500@gmail.com</p>
              <p className="text-sm text-gray-400 mt-1 italic font-bold">+213 (0) 77 995 1394</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
