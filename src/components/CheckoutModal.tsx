import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Package, Truck, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export default function CheckoutModal({ isOpen, onClose, onComplete }: CheckoutModalProps) {
  const [step, setStep] = React.useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onComplete();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Checkout Process</h2>
                <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-100 -translate-y-1/2 -z-10" />
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                      step >= s ? 'bg-brand-gold text-black scale-110' : 'bg-zinc-100 text-black/20'
                    }`}
                  >
                    {step > s ? <CheckCircle2 size={20} /> : s}
                  </div>
                ))}
              </div>

              <div className="min-h-[300px]">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                        <Package size={24} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg uppercase">Order Review</h3>
                        <p className="text-black/40 text-sm">Review your items before proceeding</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-zinc-50 rounded-xl border border-black/5">
                        <p className="text-sm font-medium">LAZAK BBQ Family Pack x 1</p>
                        <p className="text-xs text-black/40">Premium selection of hand-cut meats</p>
                      </div>
                      <div className="p-4 bg-zinc-50 rounded-xl border border-black/5">
                        <p className="text-sm font-medium">Artisan Sausages x 2</p>
                        <p className="text-xs text-black/40">Hand-crafted gourmet sausages</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                        <Truck size={24} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg uppercase">Shipping Details</h3>
                        <p className="text-black/40 text-sm">Where should we send your BBQ pack?</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input placeholder="First Name" className="col-span-1 bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-sm" />
                      <input placeholder="Last Name" className="col-span-1 bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-sm" />
                      <input placeholder="Address" className="col-span-2 bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-sm" />
                      <input placeholder="City" className="col-span-1 bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-sm" />
                      <input placeholder="Zip Code" className="col-span-1 bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-sm" />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                        <CreditCard size={24} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg uppercase">Payment Method</h3>
                        <p className="text-black/40 text-sm">Secure payment for your order</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-6 border-2 border-brand-gold rounded-2xl bg-brand-gold/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-6 bg-black rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                          <p className="font-bold">**** **** **** 4242</p>
                        </div>
                        <CheckCircle2 size={20} className="text-brand-gold" />
                      </div>
                      <button className="w-full py-4 border-2 border-black/5 rounded-2xl text-sm font-bold text-black/40 hover:border-black hover:text-black transition-all">
                        + Add New Payment Method
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="mt-12 flex gap-4">
                {step > 1 && (
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="flex-1 py-4 border-2 border-black font-bold rounded-xl hover:bg-black hover:text-white transition-all"
                  >
                    Back
                  </button>
                )}
                <button 
                  onClick={handleNext}
                  className="flex-[2] py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-gold hover:text-black transition-all"
                >
                  {step === 3 ? 'Complete Purchase' : 'Continue'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
