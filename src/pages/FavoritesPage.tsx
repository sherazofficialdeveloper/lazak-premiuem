import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface FavoritesPageProps {
  items: Product[];
  onRemove: (id: number) => void;
  onAddToCart: (product: Product) => void;
}

export default function FavoritesPage({ items, onRemove, onAddToCart }: FavoritesPageProps) {
  return (
    <div className="pt-20 min-h-screen bg-zinc-50">
      <div className="bg-white py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="text-brand-gold fill-brand-gold" size={32} />
            <h1 className="text-5xl font-display font-bold uppercase tracking-tighter">YOUR FAVORITES</h1>
          </div>
          <p className="text-black/50 max-w-2xl text-lg">A curated collection of your most-loved cuts and packs. Ready to fire up the grill?</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center space-y-6 border border-black/5 shadow-sm">
            <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-zinc-200">
              <Heart size={48} />
            </div>
            <h2 className="text-2xl font-display font-bold uppercase">Your favorites list is empty</h2>
            <p className="text-black/40 max-w-md mx-auto">Start exploring our premium selection and save the cuts that catch your eye.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-gold hover:text-black transition-all group"
            >
              Browse Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="p-8 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{item.category}</span>
                    <h3 className="text-2xl font-display font-bold uppercase mt-1">{item.name}</h3>
                    <p className="text-brand-gold font-bold text-xl">{item.price}</p>
                  </div>
                  <button 
                    onClick={() => onAddToCart(item)}
                    className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-gold hover:text-black transition-all flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
