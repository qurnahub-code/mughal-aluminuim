"use client";

import React from 'react';
import { Heart, Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
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
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold text-brand tracking-widest mb-3 block">OUR STORY</span>
            <h1 className="text-4xl font-extrabold text-charcoal tracking-tight sm:text-5xl leading-tight">
              Crafting Excellence in Lahore since 2012
            </h1>
            <p className="text-neutral-550 text-neutral-500 font-light mt-4 text-base leading-relaxed">
              Mughal Aluminium & Glass has been DHA and Bahria Town's preferred architectural glass and aluminum custom fabricator, delivering premium sliding doors, double-glazed windows, shower enclosures, and smart backlit touch mirrors.
            </p>
          </div>

          {/* Image Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-white h-72 sm:h-96">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Premium Glass & Aluminum Showroom Showcase" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-brand mb-1">DESIGN INTEGRITY</p>
              <h2 className="text-2xl font-extrabold">Workshop & Showroom</h2>
            </div>
          </div>

          {/* History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                <Heart className="w-5 h-5 text-brand mr-2 flex-shrink-0" /> Our Legacy & Passion
              </h3>
              <p className="text-neutral-600 font-light text-sm leading-relaxed space-y-4">
                What began as a localized glass cutting shop in Lahore has grown into a high-precision architectural workshop. We pride ourselves on custom fabrication, sourcing only premium alloy profiles and top-tier tempered glass. Every frame we cut and every glass pane we install is built to last, engineered to withstand high wind load factors, and optimized to deliver superior acoustic insulation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                <Award className="w-5 h-5 text-brand mr-2 flex-shrink-0" /> Architectural Precision
              </h3>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                We believe that windows and doors are not just structures; they are frames to the world. We offer comprehensive services from initial design consultation, precise site laser measurements, customized workshop cutting, and expert final mounting on site. Serving Lahore's premium localities including DHA, Bahria Town, Askari, and Johar Town.
              </p>
            </div>
          </div>

          {/* Digital Creation Credits */}
          <div className="bg-warm-beige border border-neutral-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">WEBSITE CREATOR</span>
              <h4 className="text-2xl font-extrabold text-charcoal">Abu Sufyan @NetizenLabs</h4>
              <p className="text-neutral-650 text-neutral-600 font-light text-xs sm:text-sm max-w-md">
                This digital web app is crafted with premium reference aesthetics, optimized for lightning-fast Vercel edge deployment, responsive mobile viewports, and local search performance.
              </p>
            </div>
            <a 
              href="https://netizenlabs.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand hover:bg-brand-hover text-white font-bold py-3 px-6 rounded-lg text-sm transition-all shadow-md shadow-brand/10 inline-flex items-center flex-shrink-0"
            >
              Visit Netizen Labs
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-neutral-400 py-12 border-t border-neutral-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors text-white font-bold">About Us</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <p>© {new Date().getFullYear()} Mughal Aluminium & Glass. All Rights Reserved. Crafted by <a href="https://netizenlabs.online" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-semibold">Abu Sufyan @NetizenLabs</a>.</p>
        </div>
      </footer>
    </div>
  );
}
