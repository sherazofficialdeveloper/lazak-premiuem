import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-gold flex items-center justify-center rounded-lg">
                <span className="text-black font-bold text-lg tracking-tighter">LA</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">LAZAK</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium BBQ meat packs and gourmet selections. Farm-to-flame quality delivered fresh to your door.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest">Menu</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-brand-gold transition-colors">BBQ Packs</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Prime Steaks</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sausages</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Specialty Cuts</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Butcher's Blog</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Recipes</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-white/50 mb-6">Join the Pitmaster Club for exclusive recipes and meat drop alerts.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-brand-gold text-black rounded-full hover:scale-105 transition-transform">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/30">
          <p>© 2024 LAZAK BBQ & MEAT PACKS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
