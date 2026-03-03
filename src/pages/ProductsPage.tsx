import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import { Product } from '../types';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
  onAddToFavorites: (product: Product) => void;
  favorites: Product[];
}

export default function ProductsPage({ onAddToCart, onAddToFavorites, favorites }: ProductsPageProps) {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-[#FDFCF0] py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-display font-bold uppercase tracking-tighter mb-4">THE BUTCHER'S SHOP</h1>
          <p className="text-black/50 max-w-2xl text-lg">Explore our full range of premium meats, from hand-cut steaks to artisan sausages and gourmet BBQ packs.</p>
        </div>
      </div>
      <FeaturedProducts 
        onAddToCart={onAddToCart}
        onAddToFavorites={onAddToFavorites}
        favorites={favorites}
      />
    </div>
  );
}
