"use client";

import React from 'react';
import { Calendar, User, ArrowLeft, Clock, MessageSquare, Tag, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const postsData: Record<string, {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    readTime: string;
    category: string;
    content: React.ReactNode;
  }> = {
    "glass-thickness-office-partitions": {
      title: "How to Choose the Best Glass Thickness for Office Partitions",
      excerpt: "Sleek office partitions require the perfect balance of visual aesthetics and safety. Sizing up 10mm vs 12mm safety profiles and frame tolerances.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      date: "June 28, 2026",
      author: "Abu Sufyan",
      readTime: "5 min read",
      category: "Office Design",
      content: (
        <div className="space-y-6">
          <p>
            Modern commercial floorplans in Lahore—especially in high-end developments across DHA Phase 6, Phase 8, and Gulberg—increasingly favor glass partitions to divide office spaces. They maximize natural daylight distribution, improve transparency, and offer a premium corporate aesthetic. However, when drafting interior architectural specs, selecting the correct glass thickness is crucial for structural integrity and building safety.
          </p>
          
          <h2 className="text-xl font-bold text-charcoal mt-8">Sizing Up 10mm vs. 12mm Single Tempered Glass</h2>
          <p>
            The two most common specifications for corporate office partitions are <strong>10mm</strong> and <strong>12mm</strong> fully tempered monolithic safety glass. Choosing between them depends on wall height, span width, and acoustic damping expectations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>10mm Tempered Glass:</strong> Best suited for standard office ceiling heights of up to 9 feet. It is lighter, slightly more economical, and fits perfectly inside standard low-profile aluminum channel guides.
            </li>
            <li>
              <strong>12mm Tempered Glass:</strong> Mandatory for floor-to-ceiling heights exceeding 9 feet or for high-traffic zones like main entryways, heavy pivoting doors, and conference room enclosures. The added thickness improves rigidity, minimizes flex during impacts, and yields superior structural safety.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-charcoal mt-8">The Role of Tempering (Toughened Safety Glass)</h2>
          <p>
            Under no circumstances should standard annealed glass be used for office partitions. We use 100% fully tempered safety glass. During the tempering process, the glass is heated to over 600°C and rapidly cooled. This creates high compressive surface stress, making the glass 4 to 5 times stronger than standard float glass. If shattered, it breaks into small, blunt-edged cubical fragments, minimizing puncture injuries.
          </p>

          <h2 className="text-xl font-bold text-charcoal mt-8">Acoustic Performance Guidelines</h2>
          <p>
            If your partition divides a private executive suite or a noisy meeting room, sound transmission control is a primary concern. Monolithic 12mm glass delivers a Sound Transmission Class (STC) rating of approximately 34dB. For absolute privacy, we recommend double-glazed partition systems. By combining two panes of 8mm tempered glass separated by a 12mm desiccated spacer chamber filled with inert argon gas, the STC rating jumps to over 42dB, effectively isolating heavy conversation.
          </p>
        </div>
      )
    },
    "double-glazed-windows-lahore-heat": {
      title: "The Benefits of Double-Glazed Windows in Lahore's Heat",
      excerpt: "Beat the summer heat and reduce your AC utility bills by up to 30%. Discover how double glazing blocks sound and temperature transfer.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      date: "June 15, 2026",
      author: "Abu Sufyan",
      readTime: "6 min read",
      category: "Energy Efficiency",
      content: (
        <div className="space-y-6">
          <p>
            With Lahore's summer temperatures regularly exceeding 45°C, residential cooling systems operate under extreme loads. In typical modern houses in DHA and Bahria Town, up to 40% of indoor cooled air is lost directly through single-pane glass windows. Installing thermally broken double-glazed windows is one of the most effective long-term home investments to mitigate heat gain and control skyrocketing electricity utility bills.
          </p>

          <h2 className="text-xl font-bold text-charcoal mt-8">How Double Glazing Isolates Thermal Transfer</h2>
          <p>
            A double-glazed insulated glass unit (IGU) consists of two glass panels separated by a sealed air pocket. Rather than allowing heat to conduct straight through a single pane of glass, the air or gas gap creates a powerful thermal break:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Argon Gas Spacers:</strong> We inject dry argon gas instead of standard ambient air between the panes. Argon has 34% lower thermal conductivity than air, significantly reducing convective heat loop cycles inside the window.
            </li>
            <li>
              <strong>Low-E Coating:</strong> Adding a microscopic metal-oxide Low-Emissivity (Low-E) layer blocks short-wave solar infrared radiation (which heats up rooms) while letting visible light filter through seamlessly.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-charcoal mt-8">Up to 30% Savings on Cooling Bills</h2>
          <p>
            Because double glazing dramatically reduces heat infiltration, your air conditioners reach their target temperature much faster and cycle off frequently. Our clients in DHA Lahore report an average reduction of 25% to 30% in summer electricity consumption, meaning the initial capital investment of upgrading window profiles pays for itself within a few seasons.
          </p>

          <h2 className="text-xl font-bold text-charcoal mt-8">Acoustic Shielding from Street Noise</h2>
          <p>
            Beyond heat isolation, the dual-pane structure acts as a dense sound barrier. If your home faces a busy commercial sector, Ring Road traffic, or neighborhood security routes, double-glazed windows dampen outside ambient decibel levels by up to 35-40dB, creating a quiet, peaceful sanctuary indoors.
          </p>
        </div>
      )
    },
    "smart-led-mirrors-modern-homes": {
      title: "Top 5 Bathroom Mirrors for Modern Homes: The Smart LED Shift",
      excerpt: "Elevate your bathroom styling with dimmable backlights, smart touch sensors, and integrated demister pads. A comprehensive look.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
      date: "May 22, 2026",
      author: "Abu Sufyan",
      readTime: "4 min read",
      category: "Interior Decor",
      content: (
        <div className="space-y-6">
          <p>
            Bathroom interiors have evolved from purely functional spaces into home sanctuaries. In Lahore's high-end residential builds, standard wall-hung mirrors are rapidly being replaced by customized, smart backlit LED touch mirrors. These modern mirrors combine high-fidelity glass reflection with integrated smart sensors and anti-fog demisters.
          </p>

          <h2 className="text-xl font-bold text-charcoal mt-8">1. Integrated Backlit Smart LED Mirrors</h2>
          <p>
            Unlike front-facing vanity lights that create harsh shadows on the face, backlit LED mirrors emit a soft, diffused glow from behind the mirror frame. This provides even, natural facial lighting—perfect for grooming and makeup application—while creating an elegant floating silhouette on bathroom tiles.
          </p>

          <h2 className="text-xl font-bold text-charcoal mt-8">2. Intuitive Smart Touch Sensor Switches</h2>
          <p>
            Modern smart mirrors feature touch-sensitive buttons sandblasted directly into the glass surface. A simple tap switches the light cycle on and off, while a continuous press dims or brightens the output. Our premium builds store your last brightness setting in an onboard memory chip.
          </p>

          <h2 className="text-xl font-bold text-charcoal mt-8">3. Color Temperature Customization (3-Way Lights)</h2>
          <p>
            A high-quality LED mirror allows users to transition between three distinct lighting color temperatures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Warm Light (3000K):</strong> Creates a relaxing, cozy ambient glow resembling soft candle-light.</li>
            <li><strong>Natural Light (4000K):</strong> Simulates morning daylight, ideal for accurate makeup blending.</li>
            <li><strong>Cool White (6000K):</strong> Ultra-sharp, shadow-free white light optimized for precise shaving and grooming.</li>
          </ul>

          <h2 className="text-xl font-bold text-charcoal mt-8">4. Anti-Fog Demister Pads</h2>
          <p>
            One of the most frustrating aspects of taking a hot shower is a fogged-up mirror. Our smart mirrors integrate a thin, electric heating demister pad behind the glass center. The pad warms the mirror surface slightly, preventing water vapor from condensing on the face of the glass.
          </p>

          <h2 className="text-xl font-bold text-charcoal mt-8">5. Copper-Free Silver Mirror Plates</h2>
          <p>
            Standard mirrors utilize a copper backing layer, which slowly oxidizes over time when exposed to bathroom humidity, causing black edges and corrosion. We use 5mm copper-free silver mirror plates, offering superior reflection quality, no distortion, and ten times the corrosion resistance of cheap commercial options.
          </p>
        </div>
      )
    }
  };

  const post = postsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col justify-between items-center py-24 px-4">
        <div className="text-center space-y-4 max-w-md">
          <ShieldAlert className="w-16 h-16 text-brand mx-auto" />
          <h1 className="text-3xl font-extrabold text-charcoal">Article Not Found</h1>
          <p className="text-neutral-500 font-light text-sm">
            The blog post you are looking for does not exist or may have been relocated.
          </p>
          <Link 
            href="/blog"
            className="inline-block bg-brand hover:bg-brand-hover text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

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
            href="/blog"
            className="flex items-center text-xs font-bold text-brand hover:text-brand-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Blog
          </Link>
        </div>
      </nav>

      {/* Article Body */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <article className="space-y-8">
          {/* Metadata Block */}
          <div className="space-y-4">
            <span className="inline-flex items-center bg-brand/5 border border-brand/10 text-brand text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
              <Tag className="w-3 h-3 mr-1" /> {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-light pt-2">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {post.date}</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {post.author}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-100 h-72 sm:h-[420px] bg-white">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dynamic Rich Text */}
          <div className="prose prose-neutral max-w-none text-neutral-600 font-light text-sm sm:text-base leading-relaxed space-y-6 pt-4">
            {post.content}
          </div>

          {/* Article Footer Quote CTA */}
          <div className="bg-[#F5F4F0] border border-neutral-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mt-12">
            <div className="space-y-1">
              <h4 className="text-xl font-extrabold text-charcoal">Need Custom Aluminum or Glass Fabrication?</h4>
              <p className="text-neutral-500 font-light text-xs sm:text-sm max-w-md">
                Get an instant estimated cost using our automated calculator or connect directly with our engineering team on WhatsApp.
              </p>
            </div>
            <Link 
              href="/#calculator"
              className="bg-brand hover:bg-brand-hover text-white font-bold py-3 px-6 rounded-lg text-sm transition-all shadow-md shadow-brand/10 inline-flex items-center flex-shrink-0"
            >
              Get Custom Quote <MessageSquare className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-neutral-400 py-12 border-t border-neutral-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
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
