import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenBooking: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="cta-section" className="py-20 md:py-24 bg-[#FAF9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Container with Soft Purple & Rich Dark Theme */}
        <div
          id="main-cta-card"
          className="relative rounded-3xl bg-gradient-to-br from-[#15151F] via-[#1D1B2D] to-[#2E2452] text-white p-8 sm:p-12 md:p-16 border border-[#2E284D] shadow-2xl overflow-hidden text-center"
        >
          {/* Subtle Decorative Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-[#6C4CE6]/30 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-[#8B6FF0]/25 rounded-full blur-3xl"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-purple-200 mb-6 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>START YOUR DIGITAL ACCELERATION</span>
            </div>

            {/* Heading */}
            <h2
              id="cta-main-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.15] mb-6 text-white"
            >
              Ready to Turn Your Digital Presence{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                Into Growth?
              </span>
            </h2>

            {/* Subheading */}
            <p
              id="cta-subheading"
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal"
            >
              Let's build a marketing system that attracts attention, generates leads and moves your business forward.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-primary-button"
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-[#15151F] bg-white hover:bg-purple-50 active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 text-[#6C4CE6]" />
              </button>

              <a
                id="cta-secondary-button"
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            <div className="mt-8 text-xs text-gray-400 font-medium">
              Free 30-minute growth audit • No obligation • Direct strategy session with senior marketers
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
