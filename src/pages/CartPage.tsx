import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Trash2, Minus, Plus, ArrowRight, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

export default function CartPage({ items, onUpdateQuantity, onRemove, onCheckout }: CartPageProps) {
  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="pt-20 min-h-screen bg-zinc-50">
      <div className="bg-white py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <ShoppingBag className="text-brand-gold" size={32} />
            <h1 className="text-5xl font-display font-bold uppercase tracking-tighter">YOUR SHOPPING CART</h1>
          </div>
          <p className="text-black/50 max-w-2xl text-lg">Review your selection of premium cuts before we fire up the delivery truck.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center space-y-6 border border-black/5 shadow-sm">
            <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-zinc-200">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-2xl font-display font-bold uppercase">Your cart is empty</h2>
            <p className="text-black/40 max-w-md mx-auto">Looks like you haven't added any meat packs yet. Ready to start your BBQ journey?</p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-gold hover:text-black transition-all group"
            >
              Browse Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm flex gap-6 items-center"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display font-bold text-xl uppercase">{item.name}</h3>
                        <p className="text-brand-gold font-bold">{item.price}</p>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-black/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-black/5 rounded-lg bg-zinc-50">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-2 hover:bg-black/5 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-2 hover:bg-black/5 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-bold ml-auto">
                        Total: ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm sticky top-24 space-y-8">
                <h3 className="text-2xl font-display font-bold uppercase border-b border-black/5 pb-4">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/50">Subtotal</span>
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/50">Shipping</span>
                    <span className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest">Calculated at checkout</span>
                  </div>
                  <div className="pt-4 border-t border-black/5 flex justify-between items-end">
                    <span className="font-display font-bold text-lg uppercase">Total</span>
                    <span className="text-3xl font-display font-bold text-brand-gold">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={onCheckout}
                  className="w-full py-5 bg-black text-white font-bold rounded-2xl hover:bg-brand-gold hover:text-black transition-all flex items-center justify-center gap-3 group"
                >
                  <CreditCard size={20} />
                  Proceed to Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="pt-6 text-center">
                  <p className="text-[10px] text-black/30 uppercase tracking-widest font-bold">
                    Secure checkout powered by LAZAK Pay
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
