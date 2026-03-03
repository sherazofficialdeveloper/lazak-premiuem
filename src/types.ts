export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ViewState = 'home' | 'products' | 'blog' | 'contact' | 'favorites' | 'cart' | 'checkout';
