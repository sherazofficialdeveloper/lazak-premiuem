import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Secret to the Perfect Reverse Sear",
    excerpt: "Master the technique that top steakhouse chefs use to get a perfect edge-to-edge pink center every single time.",
    author: "Master Butcher Jack",
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Wood vs. Charcoal: Which Smoke is Best?",
    excerpt: "We break down the flavor profiles of different fuels to help you choose the right one for your next BBQ session.",
    author: "Pitmaster Sarah",
    date: "Oct 08, 2024",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "5 Marinades That Will Change Your Life",
    excerpt: "From zesty citrus to deep coffee rubs, these marinades are designed to penetrate deep and enhance the natural flavor of the meat.",
    author: "Chef Marcus",
    date: "Sep 28, 2024",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6e946a8b8?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold tracking-tight mb-4 uppercase">THE PITMASTER'S JOURNAL</h2>
            <p className="text-black/50">Expert tips, mouth-watering recipes, and behind-the-scenes stories from our master butchers and pitmasters.</p>
          </div>
          <button className="text-sm font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors uppercase tracking-widest">
            View All Stories
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-gold text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Grilling Tips
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-black/40">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold group-hover:text-brand-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-black/60 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} className="text-brand-gold" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
