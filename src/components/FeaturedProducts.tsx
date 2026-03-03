import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Star, Check } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: "Premium Ribeye Steak",
    price: "$45.00",
    category: "Beef",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80&w=600",
    rating: 4.9
  },
  {
    id: 2,
    name: "Gourmet BBQ Pack",
    price: "$89.00",
    category: "Bundles",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600",
    rating: 5.0
  },
  {
    id: 3,
    name: "Smoked Pork Ribs",
    price: "$38.00",
    category: "Pork",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    rating: 4.8
  },
  {
    id: 4,
    name: "Artisan Sausages",
    price: "$24.00",
    category: "Specialty",
    image: "https://images.unsplash.com/photo-1541048028917-3829163f99b2?auto=format&fit=crop&q=80&w=600",
    rating: 4.7
  }
];

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  onAddToFavorites: (product: Product) => void;
  favorites: Product[];
}

export default function FeaturedProducts({ onAddToCart, onAddToFavorites, favorites }: FeaturedProductsProps) {
  const [addingId, setAddingId] = React.useState<number | null>(null);
  const [addedId, setAddedId] = React.useState<number | null>(null);

  const handleAddToCart = async (product: Product) => {
    setAddingId(product.id);
    
    // Simulate a "process" delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onAddToCart(product);
    setAddingId(null);
    setAddedId(product.id);
    
    // Reset "Added" state after 2 seconds
    setTimeout(() => {
      setAddedId(null);
    }, 2000);
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold tracking-tight mb-4">OUR SIGNATURE CUTS</h2>
            <p className="text-black/50 max-w-md">Hand-selected and expertly butchered for the perfect flavor profile.</p>
          </div>
          <button className="hidden md:block text-sm font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">
            VIEW ALL PRODUCTS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const isFavorite = favorites.some(f => f.id === product.id);
            const isAdding = addingId === product.id;
            const isAdded = addedId === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => onAddToFavorites(product)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        isFavorite ? 'bg-brand-gold text-black' : 'bg-white hover:bg-brand-gold'
                      }`}
                    >
                      <Heart size={18} className={isFavorite ? 'fill-black' : ''} />
                    </button>
                  </div>
                  <button 
                    disabled={isAdding || isAdded}
                    onClick={() => handleAddToCart(product)}
                    className={`absolute bottom-4 left-4 right-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      isAdding ? 'bg-zinc-200 text-black/40 translate-y-0' : 
                      isAdded ? 'bg-emerald-500 text-white translate-y-0' :
                      'bg-white/90 backdrop-blur-sm translate-y-12 group-hover:translate-y-0 hover:bg-brand-gold'
                    }`}
                  >
                    {isAdding ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <ShoppingCart size={16} />
                      </motion.div>
                    ) : isAdded ? (
                      <Check size={16} />
                    ) : (
                      <ShoppingCart size={16} />
                    )}
                    {isAdding ? 'Adding...' : isAdded ? 'Added!' : 'Add to Cart'}
                  </button>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star size={10} className="fill-brand-gold text-brand-gold" />
                      <span className="text-[10px] font-bold">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg">{product.name}</h3>
                  <p className="text-brand-gold font-bold">{product.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
