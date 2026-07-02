"use client";

import React from 'react';
import { Shield, Lock, Eye, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            <Shield className="w-12 h-12 text-brand mx-auto mb-4" />
            <h1 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-neutral-500 font-light mt-2 text-xs sm:text-sm">
              Last Updated: July 2026
            </p>
          </div>

          {/* Policy content */}
          <div className="prose prose-neutral max-w-none text-neutral-600 font-light text-sm leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal flex items-center">
                <Eye className="w-4 h-4 text-brand mr-2" /> 1. Information Collection
              </h2>
              <p>
                At Mughal Aluminium & Glass, we respect your privacy. Our website does not record, harvest, or store personal customer information on any server database. When you utilize the Glass Estimator Calculator or the Request Quote Modal, any information you provide (such as your full name, phone number, dimensions, and specifications) is instantly compiled and forwarded as a text query directly to our secure WhatsApp business account via standard redirection links.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal flex items-center">
                <Lock className="w-4 h-4 text-brand mr-2" /> 2. WhatsApp Communications
              </h2>
              <p>
                By clicking "Request Quote via WhatsApp" or "Send Calculation to WhatsApp," you explicitly initiate a conversation with Mughal Aluminium & Glass. We use the information provided solely to discuss your requirements, provide custom pricing estimates, schedule site measurements in Lahore, and manage your fabrication project. We do not sell, trade, or distribute your telephone number or contact data to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal">3. Cookies and Analytics</h2>
              <p>
                Our landing page uses basic functional elements to store calculator status parameters locally on your browser. No persistent cross-site tracking cookies are deployed by Mughal Aluminium & Glass. Basic anonymous analytical metrics may be gathered by host systems (such as Vercel Analytics) to monitor server status and load parameters.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal">4. Third-Party Integrations</h2>
              <p>
                Our services link directly to WhatsApp (Meta Platforms Inc.) and Google Maps (Google LLC) for geolocation purposes. Any data exchanged on these channels is governed by their respective corporate privacy policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-charcoal">5. Contact Details</h2>
              <p>
                If you have any questions regarding data usage or want to request a revision to any correspondence, please call us directly at <strong>0327 4643132</strong> or visit our showroom on Bedian Road near Ring Road, Lahore.
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
            <Link href="/privacy" className="hover:text-white transition-colors text-white font-bold">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <p>© {new Date().getFullYear()} Mughal Aluminium & Glass. All Rights Reserved. Crafted by <a href="https://netizenlabs.online" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-semibold">Abu Sufyan @NetizenLabs</a>.</p>
        </div>
      </footer>
    </div>
  );
}
