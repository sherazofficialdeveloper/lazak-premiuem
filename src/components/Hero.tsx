import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FDFCF0]">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 -z-10 skew-x-12 transform origin-top-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-brand-gold text-black text-xs font-bold uppercase tracking-widest rounded-full mb-6"
            >
              Premium BBQ Meat Packs
            </motion.span>
            <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
              THE ART OF <br />
              <span className="text-brand-gold">GRILLING</span> <br />
              REDEFINED.
            </h1>
            <p className="text-lg text-black/60 max-w-md mb-10 leading-relaxed">
              Experience the finest cuts, expertly curated for your next BBQ. From succulent steaks to gourmet sausages, LAZAK brings the smokehouse to your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-brand-gold hover:text-black transition-all duration-300 flex items-center gap-2 group">
                Shop Meat Packs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300">
                View Menu
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl relative z-10">
              <img 
                src="/pic2.jpeg" 
                alt="Premium BBQ Meat"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold rounded-full flex items-center justify-center p-6 text-center z-20 shadow-xl"
            >
              <span className="font-display font-bold text-sm leading-tight text-black">100% ORGANIC & FRESH CUTS</span>
            </motion.div>
            <div className="absolute -bottom-6 -left-6 w-64 h-32 bg-white rounded-2xl shadow-xl z-20 p-6 flex items-center gap-4 border border-black/5">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <ShoppingBag size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-black/40 uppercase">Best Seller</p>
                <p className="font-display font-bold">Family BBQ Pack</p>
                <p className="text-brand-gold font-bold">$89.00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
