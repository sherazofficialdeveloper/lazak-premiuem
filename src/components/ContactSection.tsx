import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold tracking-tighter mb-8 uppercase leading-tight">
              READY TO <span className="text-brand-gold">FIRE UP</span> <br /> THE GRILL?
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Have questions about our meat packs, delivery schedules, or need a custom order for your next event? Our team of experts is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-tight">Visit Our Smokehouse</h4>
                  <p className="text-white/50 text-sm">123 Pitmaster Lane, BBQ Valley, TX 75001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-tight">Call the Butcher</h4>
                  <p className="text-white/50 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-tight">Email Us</h4>
                  <p className="text-white/50 text-sm">hello@lazakbbq.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-black text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-black text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Subject</label>
                <select className="w-full bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-black text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Custom Meat Pack</option>
                  <option>Event Catering</option>
                  <option>Delivery Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-zinc-50 border border-black/5 rounded-xl py-4 px-6 text-black text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-brand-gold hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
