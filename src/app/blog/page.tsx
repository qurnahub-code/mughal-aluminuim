"use client";

import React from 'react';
import { Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "How to Choose the Best Glass Thickness for Office Partitions",
      excerpt: "Sleek office partitions require the perfect balance of visual aesthetics and safety. Sizing up 10mm vs 12mm safety profiles and frame tolerances.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
      date: "June 28, 2026",
      author: "Abu Sufyan",
      slug: "glass-thickness-office-partitions"
    },
    {
      id: 2,
      title: "The Benefits of Double-Glazed Windows in Lahore's Heat",
      excerpt: "Beat the summer heat and reduce your AC utility bills by up to 30%. Discover how double glazing blocks sound and temperature transfer.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      date: "June 15, 2026",
      author: "Abu Sufyan",
      slug: "double-glazed-windows-lahore-heat"
    },
    {
      id: 3,
      title: "Top 5 Bathroom Mirrors for Modern Homes: The Smart LED Shift",
      excerpt: "Elevate your bathroom styling with dimmable backlights, smart touch sensors, and integrated demister pads. A comprehensive look.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
      date: "May 22, 2026",
      author: "Abu Sufyan",
      slug: "smart-led-mirrors-modern-homes"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col justify-between selection:bg-brand selection:text-white">
      {/* Mini Nav */}
      <nav className="bg-white border-b border-neutral-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-charcoal flex items-center">
              MUGHAL <span className="text-brand ml-2">ALUMINIUM</span>
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
              & Glass Custom Craftsmanship
            </span>
          </div>
          <Link 
            href="/"
            className="flex items-center text-xs font-bold text-brand hover:text-brand-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold text-brand tracking-widest mb-3 block">RESOURCES & INSIGHTS</span>
            <h1 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
              Architectural Glass & Aluminum Blog
            </h1>
            <p className="text-neutral-550 text-neutral-500 font-light mt-4 text-sm sm:text-base leading-relaxed">
              Professional guidelines, design updates, and structural material reviews curated by our engineering team to help you execute your next home improvement project in Lahore.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center text-[10px] text-neutral-400 font-medium space-x-4">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {post.date}</span>
                      <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1" /> {post.author}</span>
                    </div>
                    <h3 className="font-bold text-lg text-charcoal line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-550 text-neutral-500 text-xs font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="inline-flex items-center text-xs font-semibold text-brand group-hover:text-brand-hover transition-colors">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-neutral-400 py-12 border-t border-neutral-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/blog" className="hover:text-white transition-colors text-white font-bold">Blog</Link>
          </div>
          <p>© {new Date().getFullYear()} Mughal Aluminium & Glass. All Rights Reserved. Crafted by <a href="https://netizenlabs.online" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-semibold">Abu Sufyan @NetizenLabs</a>.</p>
        </div>
      </footer>
    </div>
  );
}
