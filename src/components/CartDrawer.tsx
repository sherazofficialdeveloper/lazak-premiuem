import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

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
                <ShoppingBag className="text-brand-gold" />
                <h2 className="text-xl font-display font-bold uppercase tracking-tight">Your Cart ({items.length})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300">
                    <ShoppingBag size={40} />
                  </div>
                  <p className="text-black/40 font-medium">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-brand-gold font-bold uppercase tracking-widest text-xs border-b-2 border-brand-gold pb-1"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
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
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-black/5 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-zinc-50 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-zinc-50 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-black/5 space-y-4 bg-zinc-50">
                <div className="flex justify-between items-center">
                  <span className="text-black/40 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="text-2xl font-display font-bold">${total.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-black/40 uppercase tracking-widest text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-gold hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
