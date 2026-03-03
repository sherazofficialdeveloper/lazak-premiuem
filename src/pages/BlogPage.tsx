import React from 'react';
import BlogSection from '../components/BlogSection';

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-[#1A1A1A] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-display font-bold uppercase tracking-tighter mb-4">THE PITMASTER'S JOURNAL</h1>
          <p className="text-white/50 max-w-2xl text-lg">Expert advice, grilling techniques, and mouth-watering recipes from our master butchers and pitmasters.</p>
        </div>
      </div>
      <BlogSection />
    </div>
  );
}
