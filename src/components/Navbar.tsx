import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  favoritesCount: number;
  onOpenCart: () => void;
  onOpenFavorites: () => void;
}

export default function Navbar({ cartCount, favoritesCount, onOpenCart, onOpenFavorites }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
           <img src="public/LA-Logo.png" alt="" className="w-20"/>
             </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">Products</Link>
            <Link to="/blog" className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <Link 
              to="/favorites"
              className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
            >
              <Heart size={20} className={favoritesCount > 0 ? 'fill-brand-gold text-brand-gold' : ''} />
              {favoritesCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link 
              to="/cart"
              className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <motion.span 
                  key={cartCount}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-1 right-1 w-4 h-4 bg-brand-gold text-[10px] font-bold flex items-center justify-center rounded-full text-black shadow-[0_0_10px_rgba(226,177,91,0.5)]"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-black/5 px-4 pt-2 pb-6 space-y-1"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold uppercase tracking-widest hover:bg-brand-gold/10 rounded-lg">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold uppercase tracking-widest hover:bg-brand-gold/10 rounded-lg">Products</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold uppercase tracking-widest hover:bg-brand-gold/10 rounded-lg">Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold uppercase tracking-widest hover:bg-brand-gold/10 rounded-lg">Contact</Link>
          <div className="pt-4 flex items-center gap-6 px-3">
            <Link to="/favorites" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <Heart size={20} /> Favorites ({favoritesCount})
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <ShoppingBag size={20} /> Cart ({cartCount})
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
