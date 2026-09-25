import React from 'react';
import {
  Sparkles,
  CheckCircle,
  Globe2,
  Cpu,
  Layers,
  BarChart4,
  ArrowRight,
} from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-[#E9E5F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual / Growth Ecosystem Representation */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="bg-[#FAF9FF] border border-[#E9E5F4] rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              {/* Background gradient element */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#8B6FF0]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Header inside visual card */}
              <div className="flex items-center justify-between border-b border-[#E9E5F4] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#6C4CE6] text-white flex items-center justify-center font-bold text-xs">
                    BF
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#15151F]">The Brandformer Stack</div>
                    <div className="text-[10px] text-[#6B6B78]">Unified Growth Framework</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#6C4CE6] bg-[#F2EEFF] px-2.5 py-1 rounded-full">
                  2026 Engine
                </span>
              </div>

              {/* Ecosystem Interactive Nodes */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-[#E9E5F4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#15151F]">High-Velocity Web Systems</div>
                      <div className="text-[11px] text-[#6B6B78]">WordPress • Headless • CRO</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600">Sub-1s Load</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E9E5F4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center">
                      <BarChart4 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#15151F]">Paid & Organic Acquisition</div>
                      <div className="text-[11px] text-[#6B6B78]">Google Ads • Meta Ads • SEO</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#6C4CE6]">Scalable ROAS</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E9E5F4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#15151F]">AI-Assisted Video & Creative</div>
                      <div className="text-[11px] text-[#6B6B78]">Rapid Visuals • Synthetic Sprints</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-600">4x Faster</span>
                </div>
              </div>

              {/* Bottom Ecosystem Badge */}
              <div className="mt-6 pt-4 border-t border-[#E9E5F4] flex items-center justify-between text-xs text-[#6B6B78]">
                <span>All connected directly to client business KPIs.</span>
                <span className="font-bold text-[#6C4CE6]">brandformer.in</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div
              id="about-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Strategy • Technology • Creativity</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight leading-[1.15] mb-6"
            >
              Building Brands for the{' '}
              <span className="purple-gradient-text">Digital-First World</span>
            </h2>

            <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed mb-6">
              Brandformer is a digital marketing and growth agency focused on helping businesses build stronger brands, better digital experiences and measurable marketing systems.
            </p>

            <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed mb-8">
              We combine website development, SEO, paid advertising, social media, creative production and AI-powered workflows to create a complete digital growth ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-all glow-purple cursor-pointer"
              >
                <span>Partner with Brandformer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-[#15151F] bg-[#FAF9FF] border border-[#E9E5F4] hover:bg-white transition-colors text-center"
              >
                Request an Agency Deck
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
