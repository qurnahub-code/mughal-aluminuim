"use client";

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu, 
  Layers, 
  Grid, 
  Shield, 
  Maximize, 
  Columns, 
  Sparkles, 
  Volume2, 
  Box, 
  Scaling, 
  Info,
  ExternalLink,
  CheckCircle2,
  Sliders,
  X
} from 'lucide-react';

export default function MughalAluminum() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculator states
  const [shape, setShape] = useState<'rectangle' | 'circle' | 'triangle' | 'oval'>('rectangle');
  const [unit, setUnit] = useState<'mm' | 'cm' | 'm' | 'in' | 'ft'>('in');
  const [width, setWidth] = useState<string>('36');
  const [height, setHeight] = useState<string>('72');
  const [thickness, setThickness] = useState<number>(6); // in mm
  const [glassType, setGlassType] = useState<string>('clear');

  // Outputs
  const [areaSqFt, setAreaSqFt] = useState<number>(0);
  const [areaSqM, setAreaSqM] = useState<number>(0);
  const [weightKg, setWeightKg] = useState<number>(0);
  const [weightLbs, setWeightLbs] = useState<number>(0);

  // Quote modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string>('General Inquiry');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [quoteNotes, setQuoteNotes] = useState<string>('');
  const [includeSpecs, setIncludeSpecs] = useState<boolean>(false);

  const openQuoteModal = (serviceName: string = 'General Inquiry', attachCalculator: boolean = false) => {
    setQuoteService(serviceName);
    setIncludeSpecs(attachCalculator);
    setIsQuoteModalOpen(true);
  };

  const glassTypes = [
    { id: 'clear', name: 'Clear Tempered Glass', priceMultiplier: 1.0 },
    { id: 'frosted', name: 'Frosted/Acid Etched Glass', priceMultiplier: 1.3 },
    { id: 'tinted', name: 'Tinted Glass (Bronze/Grey)', priceMultiplier: 1.25 },
    { id: 'reflective', name: 'Reflective Glass (One-Way)', priceMultiplier: 1.4 },
    { id: 'double', name: 'Double Glazed (Acoustic/Insulated)', priceMultiplier: 2.2 }
  ];

  // Weight Calculation formulas:
  // Weight (kg) = Area (m2) * Thickness (mm) * 2.5 (density constant of glass is 2500 kg/m3)
  useEffect(() => {
    const w = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;

    // Convert dimension to meters
    let wMeters = 0;
    let hMeters = 0;

    switch (unit) {
      case 'mm':
        wMeters = w / 1000;
        hMeters = h / 1000;
        break;
      case 'cm':
        wMeters = w / 100;
        hMeters = h / 100;
        break;
      case 'm':
        wMeters = w;
        hMeters = h;
        break;
      case 'in':
        wMeters = w * 0.0254;
        hMeters = h * 0.0254;
        break;
      case 'ft':
        wMeters = w * 0.3048;
        hMeters = h * 0.3048;
        break;
    }

    // Calculate Area in m2 based on shape
    let calculatedAreaSqM = 0;
    if (shape === 'rectangle') {
      calculatedAreaSqM = wMeters * hMeters;
    } else if (shape === 'circle') {
      // Width is considered the diameter
      const radius = wMeters / 2;
      calculatedAreaSqM = Math.PI * Math.pow(radius, 2);
    } else if (shape === 'triangle') {
      calculatedAreaSqM = 0.5 * wMeters * hMeters;
    } else if (shape === 'oval') {
      calculatedAreaSqM = Math.PI * (wMeters / 2) * (hMeters / 2);
    }

    const calculatedAreaSqFt = calculatedAreaSqM * 10.7639;
    const calculatedWeightKg = calculatedAreaSqM * thickness * 2.5;
    const calculatedWeightLbs = calculatedWeightKg * 2.20462;

    setAreaSqM(Number(calculatedAreaSqM.toFixed(3)));
    setAreaSqFt(Number(calculatedAreaSqFt.toFixed(2)));
    setWeightKg(Number(calculatedWeightKg.toFixed(2)));
    setWeightLbs(Number(calculatedWeightLbs.toFixed(2)));
  }, [shape, unit, width, height, thickness]);

  // Construct WhatsApp messages
  const getWhatsAppLink = (isQuote = false) => {
    const phoneNum = '923274643132';
    if (isQuote) {
      const typeName = glassTypes.find(t => t.id === glassType)?.name || 'Tempered Glass';
      const text = encodeURIComponent(
        `Hi Mughal Aluminium & Glass,\n\n` +
        `I would like a customized quote based on these dimensions:\n` +
        `- *Shape*: ${shape.toUpperCase()}\n` +
        `- *Dimensions*: ${width} x ${height} ${unit}\n` +
        `- *Thickness*: ${thickness} mm\n` +
        `- *Glass Type*: ${typeName}\n` +
        `- *Calculated Area*: ${areaSqFt} sq ft (${areaSqM} sq m)\n` +
        `- *Est. Weight*: ${weightKg} kg (${weightLbs} lbs)\n\n` +
        `Please provide availability and pricing details for delivery and installation in Lahore.`
      );
      return `https://wa.me/${phoneNum}?text=${text}`;
    }
    const generalText = encodeURIComponent(
      `Hello Mughal Aluminium, I am visiting your website and would like to inquire about your premium aluminum and glass services.`
    );
    return `https://wa.me/${phoneNum}?text=${generalText}`;
  };

  const getModalWhatsAppLink = () => {
    const phoneNum = '923274643132';
    const typeName = glassTypes.find(t => t.id === glassType)?.name || 'Tempered Glass';
    
    let specsText = '';
    if (includeSpecs) {
      specsText = 
        `\n\n*Calculator Specifications:*` +
        `\n- *Shape*: ${shape.toUpperCase()}` +
        `\n- *Dimensions*: ${width} x ${height} ${unit}` +
        `\n- *Thickness*: ${thickness} mm` +
        `\n- *Glass Type*: ${typeName}` +
        `\n- *Calculated Area*: ${areaSqFt} sq ft (${areaSqM} sq m)` +
        `\n- *Est. Weight*: ${weightKg} kg (${weightLbs} lbs)`;
    }

    const text = encodeURIComponent(
      `Hi Mughal Aluminium & Glass,\n\n` +
      `I would like to request a quote for *${quoteService}*.\n\n` +
      `*Contact Details:*` +
      `\n- *Name*: ${customerName.trim() || 'Not Provided'}` +
      `\n- *Phone*: ${customerPhone.trim() || 'Not Provided'}` +
      (quoteNotes.trim() ? `\n\n*Additional Details/Requirements:*\n${quoteNotes.trim()}` : '') +
      specsText +
      `\n\nPlease contact me with pricing and installation details in Lahore.`
    );
    return `https://wa.me/${phoneNum}?text=${text}`;
  };

  const services = [
    {
      title: 'Glass Doors & Entrances',
      description: 'Frameless, sliding, hinged, and automatic glass doors built with high-tensile tempered safety glass.',
      icon: <Grid className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      features: ['12mm Tempered Safety Glass', 'Premium Hydraulic Floor Springs', 'Sleek Stainless Steel Pull Handles', 'Custom Sandblasted Patterns']
    },
    {
      title: 'Aluminum Office Partitions',
      description: 'Sleek, double-glazed soundproof cabins and slim-profile partitions for premium office environments.',
      icon: <Columns className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      features: ['Double-Glazed Soundproofing', 'Slimline Profile Aluminum Sections', 'Integrated Venetian Blinds Option', 'Anodized or Powder-Coated Finishes']
    },
    {
      title: 'Tempered Shower Cabins',
      description: 'Custom-fit sliding and swing shower enclosures featuring luxury gold, black, or chrome stainless hardware.',
      icon: <Layers className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      features: ['8mm/10mm Safety Glass', 'Anti-Limescale Water Repellent Coating', 'Solid Brass Heavy-Duty Hinges', 'Magnetic Leak-Proof Closures']
    },
    {
      title: 'Thermal Break Windows',
      description: 'Energy-efficient insulated aluminum frames designed to minimize heat transfer and block outside noise.',
      icon: <Box className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      features: ['Polyamide Thermal Barriers', 'Multipoint Secure Locking System', 'Double EPDM Weather Stripping', 'Saves up to 30% on AC/Heating Bills']
    },
    {
      title: 'Premium Kitchen Cabinets',
      description: 'Corrosion-free, water-resistant aluminum modular kitchen structures finished with sleek glass fronts.',
      icon: <Sparkles className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      features: ['100% Water & Termite-Proof', 'Soft-Close Drawers & Blum Hinges', 'Hydraulic Lift-Up Upper Cabinets', 'Toughened Colored Glass Door Fronts']
    },
    {
      title: 'Smart LED Touch Mirrors',
      description: 'Luxury back-lit mirrors equipped with integrated touch sensors, dimmable lights, and anti-fog systems.',
      icon: <Scaling className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1620626011160-9928f1b2b64a?auto=format&fit=crop&w=800&q=80',
      features: ['Intuitive Smart Touch Sensors', 'Dimmable Warm, Cool & Natural Lights', 'Integrated Anti-Fog Demister Pad', '5mm Copper-Free Silver Mirror']
    },
    {
      title: 'Structural Curtain Walls',
      description: 'Elegant commercial building facades featuring heavy-duty aluminum mullions and high-performance safety glass.',
      icon: <Maximize className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      features: ['High Wind-Load Resistance Profiles', 'High-Performance Low-E Double Glass', 'Seismic Movement & Settlement Buffers', 'Superior Structural Glazing Adhesive']
    },
    {
      title: 'Spider Glass Shopfronts',
      description: 'Ultra-modern, highly transparent frameless storefront solutions utilizing structural steel spider fittings.',
      icon: <Shield className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
      features: ['Maximum Visible Light Transmission', 'Grade 316 Stainless Steel Spiders', 'Heavy-Duty Tempered Glass Fins', 'Custom Tailored Architectural Design']
    },
    {
      title: 'Double-Glazed Windows',
      description: 'Acoustic-grade windows integrating inert gas layers to deliver unparalleled thermal and sound insulation.',
      icon: <Volume2 className="w-6 h-6 text-brand" />,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      features: ['Argon Gas Filled Chamber', 'High Sound Transmission Class Rating', 'Eliminates Internal Condensation', 'Dual Safety Glass Composition']
    }
  ];

  const activeProduct = services.find(s => s.title === quoteService) || {
    title: quoteService === 'Glass Calculation Estimate' ? 'Glass Estimator Quote' : 'Mughal Aluminium & Glass',
    description: quoteService === 'Glass Calculation Estimate' 
      ? 'Get a customized price estimation based on your glass dimensions, safety thickness, and choice of glass type.'
      : 'Lahore\'s premium source for custom tempered glass shower cabins, office partitions, double-glazed windows, and luxury smart mirrors.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    features: quoteService === 'Glass Calculation Estimate' ? [
      `Shape: ${shape.toUpperCase()}`,
      `Size: ${width} x ${height} ${unit}`,
      `Thickness: ${thickness} mm`,
      `Glass Type: ${glassTypes.find(t => t.id === glassType)?.name || glassType}`
    ] : [
      '4.8 Star Rated Premium Service',
      '100% Toughened Safety Glass',
      'Lahore DHA & Bahria Town Preferred',
      'Millimeter-Accurate Site Measurement'
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className="bg-white/90 border-b border-neutral-100 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-charcoal flex items-center">
              MUGHAL <span className="text-brand ml-2">ALUMINIUM</span>
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
              & Glass Custom Craftsmanship
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-neutral-600 hover:text-brand font-medium transition-colors text-sm">Services</a>
            <a href="#calculator" className="text-neutral-600 hover:text-brand font-medium transition-colors text-sm">Glass Calculator</a>
            <a href="#process" className="text-neutral-600 hover:text-brand font-medium transition-colors text-sm">Our Process</a>
            <a href="#location" className="text-neutral-600 hover:text-brand font-medium transition-colors text-sm">Location</a>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href="tel:03274643132" 
              className="flex items-center text-charcoal bg-neutral-100 hover:bg-neutral-200 px-4 py-2.5 rounded-lg border border-neutral-200 transition-all font-semibold text-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-brand" />
              0327 4643132
            </a>
            <button 
              onClick={() => openQuoteModal('General Inquiry')}
              className="flex items-center text-white bg-whatsapp hover:brightness-110 px-4 py-2.5 rounded-lg transition-all font-semibold text-sm shadow-lg shadow-whatsapp/20 cursor-pointer"
            >
              <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.791.001-2.621-1.013-5.086-2.86-6.937C16.37 2.033 13.914.819 11.998.819c-5.41 0-9.811 4.38-9.813 9.792-.001 1.77.464 3.491 1.346 5.04l-.993 3.633 3.731-.976zm11.453-7.291c-.292-.146-1.727-.852-1.995-.95-.266-.099-.462-.146-.655.146-.194.291-.749.95-.918 1.14-.168.19-.337.213-.63.067-.292-.146-1.236-.456-2.355-1.453-.872-.778-1.46-1.737-1.631-2.03-.17-.291-.018-.449.128-.593.132-.131.293-.34.44-.51.145-.17.193-.291.291-.485.097-.194.049-.364-.025-.51-.072-.146-.655-1.579-.897-2.161-.236-.574-.475-.497-.655-.506-.17-.008-.364-.01-.559-.01-.195 0-.511.073-.78.364-.268.292-1.022.997-1.022 2.431 0 1.435 1.047 2.82 1.193 3.014.145.195 2.062 3.149 4.996 4.413.698.301 1.243.481 1.668.617.7.223 1.338.192 1.843.117.563-.083 1.727-.706 1.972-1.389.244-.683.244-1.267.171-1.389-.073-.122-.268-.218-.559-.365z"/>
              </svg>
              Get Free Quote
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-neutral-600 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100 px-4 pt-2 pb-6 space-y-3 shadow-md">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-600 hover:text-brand font-medium">Services</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-600 hover:text-brand font-medium">Glass Calculator</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-600 hover:text-brand font-medium">Our Process</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-600 hover:text-brand font-medium">Location</a>
            <div className="pt-2 flex flex-col gap-3">
              <a href="tel:03274643132" className="flex items-center justify-center text-charcoal bg-neutral-100 px-4 py-2.5 rounded-lg border border-neutral-200 font-bold text-sm">
                <Phone className="w-4 h-4 mr-2 text-brand" /> Call 0327 4643132
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); openQuoteModal('General Inquiry'); }} 
                className="flex items-center justify-center text-white bg-whatsapp px-4 py-2.5 rounded-lg font-bold text-sm cursor-pointer"
              >
                WhatsApp Chat
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#FDFCFA] text-charcoal overflow-hidden py-24 sm:py-32 border-b border-neutral-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/70 via-[#FDFCFA] to-[#FDFCFA] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              {/* Trust Badges */}
              <div className="inline-flex items-center space-x-2 bg-neutral-50 border border-neutral-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <Star className="w-4 h-4 text-brand fill-brand" />
                <span className="text-[11px] sm:text-xs text-neutral-700 font-medium tracking-wide">
                  Premium Fabricator & Installer in Lahore • 4.8 Google Rated
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-charcoal">
                Elite Aluminum & <br className="hidden sm:inline"/>
                <span className="text-brand">Glass Engineering</span> for Modern Homes
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl font-light leading-relaxed">
                Serving DHA, Bahria Town, and Gulberg with top-tier tempered shower cabins, luxury slim-profile sliding doors, acoustic insulation windows, and custom smart mirrors. 
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openQuoteModal('General Inquiry')}
                  className="bg-brand hover:bg-brand-hover text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all duration-300 shadow-xl shadow-brand/10 transform hover:-translate-y-0.5 text-base cursor-pointer"
                >
                  Get Quote on WhatsApp
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <a 
                  href="#calculator" 
                  className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-semibold py-4 px-8 rounded-lg flex items-center justify-center transition-all text-base shadow-sm"
                >
                  Estimate Glass Weight
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-10 border-t border-neutral-200 max-w-xl">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-charcoal">100%</p>
                  <p className="text-xs text-neutral-500 font-medium mt-1">Tempered Safety Glass</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-charcoal">DHA</p>
                  <p className="text-xs text-neutral-500 font-medium mt-1">Preferred Provider</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-charcoal">24hr</p>
                  <p className="text-xs text-neutral-500 font-medium mt-1">Fast Site Measurement</p>
                </div>
              </div>
            </div>

            {/* Right Column: High-contrast Image Showcase */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
                  alt="Premium Glass & Aluminium Showcase" 
                  className="w-full h-[460px] object-cover"
                />
                {/* Gold accent border inlay */}
                <div className="absolute inset-0 border border-brand/25 rounded-xl pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Info strip */}
      <div className="bg-white border-b border-neutral-100 py-6 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand" />
              </div>
              <div>
                <strong className="block text-neutral-900 font-semibold text-sm">Showroom & Workshop</strong>
                <span className="text-neutral-500 text-xs">Service Line, Ring Road, Bedian Rd, near M Block, Lahore</span>
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand" />
              </div>
              <div>
                <strong className="block text-neutral-900 font-semibold text-sm">Hours of Operation</strong>
                <span className="text-neutral-500 text-xs">Open Daily • 9:00 AM - 7:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-brand" />
              </div>
              <div>
                <strong className="block text-neutral-900 font-semibold text-sm">Call Direct Lines</strong>
                <a href="tel:03274643132" className="text-brand hover:underline font-semibold text-xs">0327 4643132</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs uppercase font-bold text-brand tracking-widest mb-3">Our Core Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-5">
              Precision Crafted Architectural Glass & Aluminium
            </h3>
            <p className="text-neutral-550 text-neutral-500 font-light text-base leading-relaxed">
              We leverage premium alloy profiles and fully tempered safety glass to build durable, beautiful, and secure architectural fittings tailored to local architectural styles in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <button 
                key={idx} 
                onClick={() => openQuoteModal(svc.title)}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer text-left focus:outline-none w-full"
              >
                {/* Background Image */}
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Glassmorphic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-1.5 bg-brand transition-all duration-500 group-hover:w-full" />

                {/* Content Container */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-105">
                    {React.cloneElement(svc.icon as React.ReactElement<any>, { className: "w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" })}
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight transition-transform duration-300 group-hover:translate-x-1">{svc.title}</h4>
                  <p className="text-neutral-300 text-xs font-light leading-relaxed mt-2 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {svc.description}
                  </p>
                  
                  <span className="inline-flex items-center text-xs font-bold text-brand mt-4 group-hover:text-brand-hover transition-colors">
                    View Details & Get Quote
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="calculator" className="py-24 bg-warm-beige border-y border-neutral-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
            
            {/* Left explanation text */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase font-bold text-brand tracking-widest mb-3 block">Smart Planning</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-6">
                Interactive Glass Area & Weight Calculator
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Different glass types, thicknesses, and dimensions have distinct structural weight loads. Use our live estimator to instantly compute structural attributes. 
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</div>
                  <p className="text-xs sm:text-sm text-neutral-650 text-neutral-600 font-light">
                    Select the architectural glass cut (Rectangle, Circle, Triangle, or Oval).
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</div>
                  <p className="text-xs sm:text-sm text-neutral-650 text-neutral-600 font-light">
                    Input your required site measurements and choose your unit (inches, feet, mm, cm, m).
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</div>
                  <p className="text-xs sm:text-sm text-neutral-650 text-neutral-600 font-light">
                    Pick a safety thickness profile. Glass weight density is calculated at 2.5 kg per millimeter thickness per square meter area.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-neutral-100 p-6 rounded-lg mt-8 flex items-start space-x-3 shadow-sm">
                <Info className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  <strong>Formulas used:</strong> Area = shape calculation converted to meters. Weight = Area (m²) × Glass Thickness (mm) × Density constant (2.5). Calculations are estimates for general tempered structural glass.
                </p>
              </div>
            </div>

            {/* Right Calculator Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
                <div className="bg-charcoal px-8 py-6 text-white flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">Estimator</h3>
                    <p className="text-xs text-neutral-400">Live Glass Specifications Estimator</p>
                  </div>
                  <Sliders className="w-5 h-5 text-brand" />
                </div>

                <div className="p-8 space-y-6">
                  {/* Step 1: Shape Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-3">1. Select Shape</label>
                    <div className="grid grid-cols-4 gap-3">
                      {(['rectangle', 'circle', 'triangle', 'oval'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setShape(s)}
                          className={`py-3 px-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center capitalize cursor-pointer ${
                            shape === s
                              ? 'border-brand bg-brand/5 text-brand font-semibold shadow-sm'
                              : 'border-neutral-200 hover:border-neutral-400 text-neutral-500 bg-white'
                          }`}
                        >
                          <span className="text-xs">{s}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Dimensions & Unit */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-2">Unit</label>
                      <select 
                        value={unit} 
                        onChange={(e) => setUnit(e.target.value as any)}
                        className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand cursor-pointer"
                      >
                        <option value="in">Inches (in)</option>
                        <option value="ft">Feet (ft)</option>
                        <option value="mm">Millimeters (mm)</option>
                        <option value="cm">Centimeters (cm)</option>
                        <option value="m">Meters (m)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-2">
                        {shape === 'circle' ? 'Diameter' : 'Width / Base'}
                      </label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="Width"
                        className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
                      />
                    </div>

                    {shape !== 'circle' && (
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-2">Height</label>
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          placeholder="Height"
                          className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
                        />
                      </div>
                    )}
                  </div>

                  {/* Step 3: Thickness & Glass Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-2">Glass Thickness</label>
                      <select 
                        value={thickness} 
                        onChange={(e) => setThickness(Number(e.target.value))}
                        className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand cursor-pointer"
                      >
                        <option value={4}>4 mm (Standard Partition)</option>
                        <option value={5}>5 mm (Standard Window)</option>
                        <option value={6}>6 mm (Heavy Window)</option>
                        <option value={8}>8 mm (Cabin Glass)</option>
                        <option value={10}>10 mm (Heavy Door / Partition)</option>
                        <option value={12}>12 mm (Premium Storefront)</option>
                        <option value={19}>19 mm (Bulletproof / Structural)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-2">Glass Type</label>
                      <select 
                        value={glassType} 
                        onChange={(e) => setGlassType(e.target.value)}
                        className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand cursor-pointer"
                      >
                        {glassTypes.map((type) => (
                          <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Output Card display */}
                  <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider mb-1">Calculated Area</p>
                      <p className="text-xl sm:text-2xl font-extrabold text-charcoal">{areaSqFt} <span className="text-xs font-semibold text-neutral-500">sq ft</span></p>
                      <p className="text-xs text-neutral-400 mt-0.5">{areaSqM} sq meters</p>
                    </div>
                    <div>
                      <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider mb-1">Est. Weight</p>
                      <p className="text-xl sm:text-2xl font-extrabold text-charcoal">{weightKg} <span className="text-xs font-semibold text-neutral-500">kg</span></p>
                      <p className="text-xs text-neutral-400 mt-0.5">{weightLbs} lbs</p>
                    </div>
                  </div>

                  {/* WhatsApp CTA Action */}
                  <button
                    onClick={() => openQuoteModal('Glass Calculation Estimate', true)}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md shadow-whatsapp/10 mt-6 text-sm cursor-pointer"
                  >
                    Send Calculation to WhatsApp for Free Quote
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Workflow Process */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs uppercase font-bold text-brand tracking-widest mb-3">Professional Standards</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-5">
              Our 4-Step Professional Fabrication Process
            </h3>
            <p className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed">
              We manage the entire project lifecycle with precise control, ensuring absolute accuracy and structural reliability in every building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-brand/5 border border-brand/20 flex items-center justify-center mx-auto mb-6 text-brand font-extrabold text-xl">1</div>
              <h4 className="font-bold text-base text-charcoal mb-2">Free Consultation</h4>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">Discuss architectural blueprints, material options, thermal properties, and budget constraints.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-brand/5 border border-brand/20 flex items-center justify-center mx-auto mb-6 text-brand font-extrabold text-xl">2</div>
              <h4 className="font-bold text-base text-charcoal mb-2">Site Measurement</h4>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">Our engineer visits your property in Lahore to capture exact dimensional data to the millimeter.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-brand/5 border border-brand/20 flex items-center justify-center mx-auto mb-6 text-brand font-extrabold text-xl">3</div>
              <h4 className="font-bold text-base text-charcoal mb-2">Precision Fabrication</h4>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">Glass is tempered and aluminum is cut in our workshop using heavy-duty industrial machinery.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-brand/5 border border-brand/20 flex items-center justify-center mx-auto mb-6 text-brand font-extrabold text-xl">4</div>
              <h4 className="font-bold text-base text-charcoal mb-2">Expert Installation</h4>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">Our team performs secure final mounting on-site, verifying gaskets and silicon weather insulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served - Local SEO Trust Factor */}
      <section className="py-16 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-8">Serving High-End Neighborhoods & Commercial Hubs in Lahore</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['DHA Lahore (Phase 1 - 11)', 'Bahria Town Lahore', 'Gulberg I - V', 'Model Town', 'Johar Town', 'Cantt & Askari', 'Wapda Town', 'State Life Housing Society', 'Lake City', 'DHA Rahbar', 'Cavalry Ground', 'Valencia Lahore'].map((area, idx) => (
              <span key={idx} className="bg-neutral-800 border border-neutral-700/80 rounded-full px-5 py-2 text-xs font-medium text-neutral-300 flex items-center shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand mr-2 flex-shrink-0" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Footer */}
      <footer id="location" className="bg-charcoal text-neutral-300 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-[10px] text-brand uppercase tracking-widest font-extrabold block mb-2">Mughal Aluminium & Glass</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Lahore’s Trusted Home Glass Partner</h2>
            <p className="mb-8 text-neutral-450 text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-lg">
              Visit our workshop or call us to receive professional consultation on double-glazed acoustic glass, safety glass structures, shower cabins, and modern windows.
            </p>
            
            <div className="space-y-4 text-sm font-light">
              <p className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-brand flex-shrink-0 mt-0.5" /> <span>Service Line, Ring Road, Bedian Rd, near M Block, Lahore</span></p>
              <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-brand flex-shrink-0" /> <a href="tel:03274643132" className="hover:underline">0327 4643132</a></p>
              <p className="flex items-center"><Clock className="w-5 h-5 mr-3 text-brand flex-shrink-0" /> <span>Open Daily: 9:00 AM - 7:00 PM (Friday timings subject to prayer breaks)</span></p>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Google Maps CTA Card */}
            <a 
              href="https://maps.app.goo.gl/7N5btMYjkMgg3PAm8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-neutral-800/80 border border-neutral-700/80 rounded-2xl p-8 sm:p-12 text-center hover:bg-neutral-800 transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <MapPin className="w-12 h-12 mx-auto text-brand mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-bold text-white mb-2">Find Us on Google Maps</h3>
              <p className="text-neutral-400 mb-8 text-xs font-light">FC5R+7G Lahore, Punjab, Pakistan</p>
              <span className="inline-flex items-center bg-brand hover:bg-brand-hover text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm shadow-md shadow-brand/10">
                Open Location in Maps App
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Mughal Aluminium & Glass. All Rights Reserved. Designed with premium reference aesthetics.</p>
        </div>
      </footer>

      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden border border-neutral-150 relative animate-in fade-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]">
            
            {/* Left Pane - Product Media & Highlights */}
            <div className="md:w-5/12 bg-neutral-950 text-white flex flex-col border-r border-neutral-850">
              {/* Product Photo */}
              <div className="relative h-44 md:h-52 w-full overflow-hidden flex-shrink-0">
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
              </div>
              
              {/* Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 overflow-y-auto">
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand tracking-widest">PRODUCT DETAILS</span>
                  <h4 className="font-extrabold text-xl tracking-tight text-white mt-1">{activeProduct.title}</h4>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed mt-2.5">
                    {activeProduct.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest block mb-2.5">KEY HIGHLIGHTS</span>
                  <ul className="space-y-2">
                    {activeProduct.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs font-light text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand mr-2 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Pane - Form Details */}
            <div className="md:w-7/12 p-6 flex flex-col justify-between bg-white overflow-y-auto">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-extrabold text-xl text-neutral-950 tracking-tight">Request Free Quote</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Fill in the details to get pricing on WhatsApp</p>
                  </div>
                  <button 
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="text-neutral-400 hover:text-neutral-650 p-1.5 rounded-full hover:bg-neutral-100 transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Fields */}
                <div className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Muhammad Ali"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-1.5">Phone Number / WhatsApp</label>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 0327 4643132"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-1.5">Service Type</label>
                    <select
                      value={quoteService}
                      onChange={(e) => setQuoteService(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:bg-white cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry / Other</option>
                      <option value="Glass Calculation Estimate">Glass Calculation Estimate</option>
                      {services.map((svc) => (
                        <option key={svc.title} value={svc.title}>{svc.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Calculator Specifications attachment option */}
                  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-3">
                    <label className="flex items-center space-x-2 text-xs font-bold text-neutral-650 text-neutral-600 uppercase tracking-wider cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeSpecs}
                        onChange={(e) => setIncludeSpecs(e.target.checked)}
                        className="rounded text-brand focus:ring-brand h-4 w-4"
                      />
                      <span>Attach Calculator Dimensions</span>
                    </label>
                    {includeSpecs && (
                      <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500 pt-1 border-t border-neutral-100">
                        <p><strong>Shape:</strong> <span className="capitalize">{shape}</span></p>
                        <p><strong>Size:</strong> {width} x {height} {unit}</p>
                        <p><strong>Thickness:</strong> {thickness} mm</p>
                        <p><strong>Glass Type:</strong> {glassTypes.find(t => t.id === glassType)?.name || glassType}</p>
                        <p className="col-span-2"><strong>Area:</strong> {areaSqFt} sq ft ({areaSqM} m²)</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 tracking-wider mb-1.5">Project Details / Requirements</label>
                    <textarea
                      value={quoteNotes}
                      onChange={(e) => setQuoteNotes(e.target.value)}
                      placeholder="e.g. Need tempered glass sliding door for office partition. Please specify timeline for site measurement in DHA Phase 6."
                      rows={3}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:bg-white resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end space-x-3 pt-4 mt-4 border-t border-neutral-150">
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="text-neutral-650 hover:text-neutral-800 hover:bg-neutral-100 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <a
                  href={getModalWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="bg-brand hover:bg-brand-hover text-white font-bold px-6 py-2.5 rounded-lg text-sm shadow-md transition-all flex items-center justify-center cursor-pointer"
                >
                  Request Quote via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
