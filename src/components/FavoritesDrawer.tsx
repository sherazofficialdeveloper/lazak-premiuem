import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (id: number) => void;
  onAddToCart: (product: Product) => void;
}

export default function FavoritesDrawer({ isOpen, onClose, items, onRemove, onAddToCart }: FavoritesDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-black/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Heart className="text-brand-gold fill-brand-gold" />
                <h2 className="text-xl font-display font-bold uppercase tracking-tight">Your Favorites ({items.length})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300">
                    <Heart size={40} />
                  </div>
                  <p className="text-black/40 font-medium">No favorites yet</p>
                  <button 
                    onClick={onClose}
                    className="text-brand-gold font-bold uppercase tracking-widest text-xs border-b-2 border-brand-gold pb-1"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 bg-zinc-100 rounded-xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-display font-bold text-sm uppercase">{item.name}</h3>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-black/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-brand-gold font-bold text-sm">{item.price}</p>
                      </div>
                      <button 
                        onClick={() => onAddToCart(item)}
                        className="w-full py-2 bg-zinc-100 text-black text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-brand-gold transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={12} />
                        Move to Cart
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
