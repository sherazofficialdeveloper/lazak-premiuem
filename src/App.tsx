import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import FavoritesDrawer from './components/FavoritesDrawer';
import CheckoutModal from './components/CheckoutModal';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import FavoritesPage from './pages/FavoritesPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Toast from './components/Toast';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = React.useState<CartItem[]>(() => {
    const saved = localStorage.getItem('lazak_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [favorites, setFavorites] = React.useState<Product[]>(() => {
    const saved = localStorage.getItem('lazak_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = React.useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  const [toast, setToast] = React.useState<{ message: string; isVisible: boolean }>({
    message: '',
    isVisible: false
  });

  // Sync state to localStorage
  React.useEffect(() => {
    localStorage.setItem('lazak_cart', JSON.stringify(cart));
  }, [cart]);

  React.useEffect(() => {
    localStorage.setItem('lazak_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Listen for storage changes from other tabs
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'lazak_cart') setCart(JSON.parse(e.newValue || '[]'));
      if (e.key === 'lazak_favorites') setFavorites(JSON.parse(e.newValue || '[]'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    setToast({
      message: `${product.name} added to cart`,
      isVisible: true
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.id === product.id);
      if (isFav) return prev.filter(f => f.id !== product.id);
      return [...prev, product];
    });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const completeCheckout = () => {
    setCart([]);
    setIsCheckoutOpen(false);
    alert("Thank you for your order! Your BBQ pack is being prepared.");
  };

  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-gold selection:text-black scroll-smooth">
        <Navbar 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          favoritesCount={favorites.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} onAddToFavorites={toggleFavorite} favorites={favorites} />} />
            <Route path="/products" element={<ProductsPage onAddToCart={addToCart} onAddToFavorites={toggleFavorite} favorites={favorites} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/favorites" element={<FavoritesPage items={favorites} onRemove={(id) => setFavorites(prev => prev.filter(f => f.id !== id))} onAddToCart={addToCart} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage items={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} onCheckout={handleCheckout} />} />
          </Routes>
        </main>

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />

        <FavoritesDrawer 
          isOpen={isFavoritesOpen}
          onClose={() => setIsFavoritesOpen(false)}
          items={favorites}
          onRemove={(id) => setFavorites(prev => prev.filter(f => f.id !== id))}
          onAddToCart={addToCart}
        />

        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          onComplete={completeCheckout}
        />

        <Toast 
          message={toast.message}
          isVisible={toast.isVisible}
          onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
        />

        <Footer />
      </div>
    </Router>
  );
}
