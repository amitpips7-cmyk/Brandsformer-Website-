import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

interface WhyBrandformerProps {
  onOpenBooking: () => void;
}

export const WhyBrandformer: React.FC<WhyBrandformerProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAF9FF] relative overflow-hidden">
      {/* Decorative subtle background gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#8B6FF0]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Context, and Direct Action */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-5">
              THE BRANDFORMER ADVANTAGE
            </div>
            
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight leading-[1.15] mb-6"
            >
              Why Businesses Choose{' '}
              <span className="purple-gradient-text">Brandformer</span>
            </h2>

            <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed mb-8">
              Most agencies operate in fragmented pieces—designers who do not understand ROAS, media buyers who ignore brand voice, or developers who neglect conversion architecture. We unite these disciplines into a cohesive, high-velocity growth engine.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#15151F]">
                <CheckCircle2 className="w-5 h-5 text-[#6C4CE6] shrink-0" />
                <span>Zero bloated agency overhead or hidden fees</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#15151F]">
                <CheckCircle2 className="w-5 h-5 text-[#6C4CE6] shrink-0" />
                <span>Weekly sprints with transparent performance dashboards</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#15151F]">
                <CheckCircle2 className="w-5 h-5 text-[#6C4CE6] shrink-0" />
                <span>Modern AI-leveraged production velocity</span>
              </div>
            </div>

            <button
              id="why-us-cta-button"
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] active:scale-[0.98] transition-all duration-200 glow-purple cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CE6]"
            >
              <span>Let's Talk About Your Growth</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: 5 Benefit Points */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US.map((point) => (
              <div
                key={point.number}
                id={`why-card-${point.number}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E5F4] shadow-xs hover:border-[#8B6FF0]/50 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 group"
              >
                {/* Purple Numbering Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#F2EEFF] text-[#6C4CE6] font-extrabold text-lg flex items-center justify-center shrink-0 group-hover:bg-[#6C4CE6] group-hover:text-white transition-colors">
                  {point.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#15151F] group-hover:text-[#6C4CE6] transition-colors mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#6B6B78] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
