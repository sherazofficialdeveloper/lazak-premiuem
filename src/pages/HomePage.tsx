import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { motion } from 'motion/react';
import { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  onAddToFavorites: (product: Product) => void;
  favorites: Product[];
}

export default function HomePage({ onAddToCart, onAddToFavorites, favorites }: HomePageProps) {
  return (
    <>
      <Hero />
      
      {/* Category Bento Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-8 relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" 
                alt="BBQ Grilling" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10">
                <span className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-2">Master the Flame</span>
                <h3 className="text-white text-4xl font-display font-bold uppercase">PREMIUM BBQ PACKS</h3>
                <p className="text-white/70 mt-2 max-w-xs">Everything you need for the ultimate backyard feast.</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-4 relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1529692236671-f1f6e946a8b8?auto=format&fit=crop&q=80&w=800" 
                alt="Steaks" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display font-bold uppercase">PRIME STEAKS</h3>
                <Link to="/products" className="text-brand-gold text-xs font-bold mt-2 flex items-center gap-2">
                  SHOP CUTS
                </Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-4 relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1541048028917-3829163f99b2?auto=format&fit=crop&q=80&w=800" 
                alt="Sausages" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display font-bold uppercase">ARTISAN SAUSAGES</h3>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-8 relative rounded-3xl overflow-hidden group cursor-pointer bg-brand-gold p-12 flex flex-col justify-center"
            >
              <h3 className="text-black text-4xl font-display font-bold leading-tight uppercase">
                JOIN THE <br /> PITMASTER CLUB
              </h3>
              <p className="text-black/70 mt-4 max-w-md font-medium">
                Get exclusive recipes, early access to limited meat drops, and grilling tips from the pros.
              </p>
              <div className="mt-8">
                <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs">
                  Join Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedProducts 
        onAddToCart={onAddToCart}
        onAddToFavorites={onAddToFavorites}
        favorites={favorites}
      />

      {/* Brand Values */}
      <section className="py-24 border-t border-black/5 bg-[#FDFCF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="font-display font-bold text-xl uppercase tracking-tight">Farm to Flame</h4>
              <p className="text-sm text-black/50">Ethically sourced, pasture-raised meats delivered fresh to your door.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h4 className="font-display font-bold text-xl uppercase tracking-tight">Expertly Butchered</h4>
              <p className="text-sm text-black/50">Hand-cut by master butchers to ensure the perfect texture and flavor.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 21l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.65z"/></svg>
              </div>
              <h4 className="font-display font-bold text-xl uppercase tracking-tight">Grilling Perfection</h4>
              <p className="text-sm text-black/50">Every cut is selected for its marbling and potential for the perfect sear.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
