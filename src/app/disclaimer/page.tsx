"use client";

import React from 'react';
import { Info, Calculator, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Disclaimer() {
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
      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto">
            <Info className="w-12 h-12 text-brand mx-auto mb-4" />
            <h1 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
              Legal Disclaimer
            </h1>
            <p className="text-neutral-500 font-light mt-2 text-xs sm:text-sm">
              Last Updated: July 2026
            </p>
          </div>

          {/* Disclaimer content */}
          <div className="prose prose-neutral max-w-none text-neutral-600 font-light text-sm leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal flex items-center">
                <Calculator className="w-4 h-4 text-brand mr-2" /> 1. Estimator Calculator Accuracy
              </h2>
              <p>
                The Glass Weight & Area Calculator available on this website is provided solely as an introductory estimation tool. Calculations are computed using standard formulas:
                <br />
                <code className="bg-neutral-100 text-brand px-1.5 py-0.5 rounded text-xs">Area (m²) = Shape-specific dimension conversion</code> and
                <br />
                <code className="bg-neutral-100 text-brand px-1.5 py-0.5 rounded text-xs">Weight (kg) = Area (m²) × thickness (mm) × 2.5 (glass density constant)</code>.
                <br />
                These values represent estimations for general architectural float and tempered safety glass. Actual values may fluctuate based on raw material batch variants, chemical profiles, structural lamination layers, custom beveling/edging cuts, and custom framing hardware components. Mughal Aluminium & Glass does not guarantee absolute mathematical accuracy for structural engineering calculations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal flex items-center">
                <ExternalLink className="w-4 h-4 text-brand mr-2" /> 2. Pricing and Quotations
              </h2>
              <p>
                Any price ranges, estimate guidelines, or quote projections shared during communications are preliminary. The final binding cost is subject to direct site verification, precise laser measurements by our engineer on location, raw material market index updates in Lahore, safety tempering protocols, custom fittings, and custom logistics factors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal">3. WhatsApp Service Standard</h2>
              <p>
                Communications initiated through the WhatsApp redirection CTAs represent direct negotiations. While we strive to reply within minutes, response velocity may vary during prayer breaks, holidays, or out-of-work hours (after 7:00 PM PST).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal">4. Structural Safety Disclaimer</h2>
              <p>
                Mughal Aluminium & Glass fabricates architectural elements according to local building guidelines. We highly recommend customers consult with qualified structural engineers or building architects before installing heavy glass shopfronts, frameless windows, double-glazed soundproof curtain walls, or custom suspended mirrors in commercial high-rises.
              </p>
            </section>
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
            <Link href="/disclaimer" className="hover:text-white transition-colors text-white font-bold">Disclaimer</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <p>© {new Date().getFullYear()} Mughal Aluminium & Glass. All Rights Reserved. Crafted by <a href="https://netizenlabs.online" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-semibold">Abu Sufyan @NetizenLabs</a>.</p>
        </div>
      </footer>
    </div>
  );
}
