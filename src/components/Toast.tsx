import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl border border-brand-gold/20 min-w-[300px]"
        >
          <div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
            <CheckCircle size={18} />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-bold uppercase tracking-tight">{message}</p>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Added to your cart</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/20 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
