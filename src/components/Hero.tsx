import React from 'react';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Target,
  BarChart2,
  CheckCircle2,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF9FF] via-[#FAF9FF] to-[#F2EEFF]/40"
    >
      {/* Subtle Background Glows & Shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden opacity-60"
      >
        <div className="absolute -top-32 right-10 w-96 h-96 bg-gradient-to-br from-[#8B6FF0]/20 to-[#6C4CE6]/10 rounded-full blur-3xl" />
        <div className="absolute top-48 -left-20 w-80 h-80 bg-gradient-to-tr from-[#6C4CE6]/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <div
              id="hero-eyebrow-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9E5F4] shadow-xs mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C4CE6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6C4CE6]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6C4CE6]">
                FULL-SERVICE DIGITAL GROWTH AGENCY
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#15151F] leading-[1.08] mb-6"
            >
              Build Your Brand.{' '}
              <br className="hidden sm:inline" />
              <span className="purple-gradient-text">Grow Your Business.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-supporting-text"
              className="text-lg md:text-xl text-[#6B6B78] font-normal leading-relaxed max-w-2xl mb-8"
            >
              From high-converting websites to SEO, Google Ads, Meta Ads, social media and AI-powered creative solutions, Brandformer helps businesses build a stronger digital presence and generate measurable growth.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] active:scale-[0.98] transition-all duration-200 glow-purple cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6C4CE6]"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                id="hero-secondary-cta"
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-[#15151F] bg-white border border-[#E9E5F4] hover:bg-[#FAF9FF] hover:border-[#8B6FF0]/40 transition-colors shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CE6]"
              >
                <span>View Our Services</span>
              </a>
            </div>

            {/* Trust / Reassurance Line */}
            <div
              id="hero-reassurance-line"
              className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-[#6B6B78]"
            >
              <span>Strategy</span>
              <span className="text-[#6C4CE6] font-bold">•</span>
              <span>Creativity</span>
              <span className="text-[#6C4CE6] font-bold">•</span>
              <span>Performance</span>
              <span className="text-[#6C4CE6] font-bold">•</span>
              <span>Growth</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Mockup with Floating Stat Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Background Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6C4CE6]/15 via-[#8B6FF0]/10 to-transparent rounded-3xl blur-2xl transform scale-95" />

            {/* Main Interactive Dashboard Container */}
            <div
              id="hero-dashboard-mockup"
              className="relative bg-white rounded-2xl border border-[#E9E5F4] shadow-xl p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between border-b border-[#E9E5F4] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-bold text-[#15151F]">
                    Brandformer Growth Engine
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F2EEFF] text-[#6C4CE6] text-[11px] font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Real-time ROAS: 4.2x</span>
                </div>
              </div>

              {/* Main Metric Banner */}
              <div className="bg-[#FAF9FF] rounded-xl p-4 border border-[#E9E5F4] mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#6B6B78]">
                    Multichannel Pipeline Revenue
                  </span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    +48.6% MoM
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#15151F] tracking-tight">
                  $184,520
                </div>

                {/* SVG Mini Trend Chart */}
                <div className="h-16 w-full mt-3">
                  <svg
                    viewBox="0 0 280 60"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6C4CE6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#6C4CE6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M0,50 Q40,35 80,42 T160,25 T240,12 L280,8 L280,60 L0,60 Z"
                      fill="url(#purpleGrad)"
                    />
                    {/* Line */}
                    <path
                      d="M0,50 Q40,35 80,42 T160,25 T240,12 L280,8"
                      fill="none"
                      stroke="#6C4CE6"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Dot on high point */}
                    <circle cx="280" cy="8" r="4" fill="#6C4CE6" />
                    <circle cx="280" cy="8" r="7" fill="#6C4CE6" fillOpacity="0.25" />
                  </svg>
                </div>
              </div>

              {/* Active Channels Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-2">
                <div className="p-2.5 rounded-lg border border-[#E9E5F4] bg-white">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#6B6B78] mb-1">
                    <span>Google & Meta Ads</span>
                    <span className="text-[#6C4CE6] font-bold">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#15151F]">
                    <span>Conv. Rate</span>
                    <span className="text-emerald-600">6.8%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-[#6C4CE6] h-full rounded-full w-[82%]" />
                  </div>
                </div>

                <div className="p-2.5 rounded-lg border border-[#E9E5F4] bg-white">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#6B6B78] mb-1">
                    <span>SEO & WordPress</span>
                    <span className="text-[#6C4CE6] font-bold">Optimized</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#15151F]">
                    <span>Core Vitals</span>
                    <span className="text-emerald-600">99 / 100</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-[#8B6FF0] h-full rounded-full w-[94%]" />
                  </div>
                </div>
              </div>

              {/* AI Creative Pipeline Bar */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF9FF] border border-[#E9E5F4] text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6C4CE6]" />
                  <span className="font-semibold text-[#15151F]">
                    AI Video & Creative Engine
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#6C4CE6] bg-white px-2 py-0.5 rounded border border-[#E9E5F4]">
                  Generating 40+ Ads/Mo
                </span>
              </div>
            </div>

            {/* Floating Statistic Card 1: Top-Left */}
            <div
              id="hero-stat-card-1"
              className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-sm border border-[#E9E5F4] shadow-lg rounded-xl p-3 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-[#15151F] leading-tight">120+</div>
                <div className="text-[11px] font-medium text-[#6B6B78]">Projects Delivered</div>
              </div>
            </div>

            {/* Floating Statistic Card 2: Top-Right */}
            <div
              id="hero-stat-card-2"
              className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-sm border border-[#E9E5F4] shadow-lg rounded-xl p-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-[#15151F] leading-tight">35+</div>
                <div className="text-[11px] font-medium text-[#6B6B78]">Brands Helped</div>
              </div>
            </div>

            {/* Floating Statistic Card 3: Bottom-Left */}
            <div
              id="hero-stat-card-3"
              className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-sm border border-[#E9E5F4] shadow-lg rounded-xl p-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-[#15151F] leading-tight">4.8 / 5</div>
                <div className="text-[11px] font-medium text-[#6B6B78]">Client Satisfaction</div>
              </div>
            </div>

            {/* Floating Statistic Card 4: Bottom-Right */}
            <div
              id="hero-stat-card-4"
              className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-sm border border-[#E9E5F4] shadow-lg rounded-xl p-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center shrink-0">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-[#15151F] leading-tight">3X</div>
                <div className="text-[11px] font-medium text-[#6B6B78]">Average Growth Focus</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
