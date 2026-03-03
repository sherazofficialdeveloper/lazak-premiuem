import React from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Truck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#FDFCF0] py-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl font-display font-bold uppercase tracking-tighter mb-6">GET IN TOUCH</h1>
            <p className="text-black/50 text-lg leading-relaxed">
              Whether you're planning a massive backyard BBQ or just have a question about our premium cuts, our team of pitmasters and butchers is ready to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Section (Reused) */}
      <ContactSection />

      {/* Additional Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center p-8 rounded-3xl bg-zinc-50 border border-black/5">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <Clock size={24} />
              </div>
              <h3 className="font-display font-bold text-xl uppercase">Opening Hours</h3>
              <div className="text-sm text-black/50 space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed for Grilling</p>
              </div>
            </div>

            <div className="space-y-4 text-center p-8 rounded-3xl bg-zinc-50 border border-black/5">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <Truck size={24} />
              </div>
              <h3 className="font-display font-bold text-xl uppercase">Delivery Area</h3>
              <p className="text-sm text-black/50">
                We deliver within a 50-mile radius of our smokehouse. Check our delivery map for specific zones and schedules.
              </p>
            </div>

            <div className="space-y-4 text-center p-8 rounded-3xl bg-zinc-50 border border-black/5">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-display font-bold text-xl uppercase">Quality Guarantee</h3>
              <p className="text-sm text-black/50">
                Not satisfied with your cut? Contact us within 24 hours of delivery for a full replacement or refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Map Placeholder */}
      <section className="h-[400px] bg-zinc-200 relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Map Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-black/5 flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-black">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-bold uppercase text-xs tracking-widest">LAZAK SMOKEHOUSE</p>
              <p className="text-[10px] text-black/40">123 Pitmaster Lane, TX</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { MapPin } from 'lucide-react';
