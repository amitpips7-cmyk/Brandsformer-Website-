import React from 'react';
import { PROCESS_STEPS } from '../data';
import { ArrowRight, Check } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-b border-[#E9E5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-4">
            HOW WE WORK
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight mb-4"
          >
            Simple Process.{' '}
            <span className="purple-gradient-text">Serious Results.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed">
            No guesswork. We run a structured, battle-tested sprint methodology to turn strategic roadmap into compounding revenue.
          </p>
        </div>

        {/* 6-Step Process Cards Grid with Connecting Visuals */}
        <div
          id="process-timeline"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative"
        >
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              id={`process-step-${step.step}`}
              className="bg-[#FAF9FF] rounded-2xl p-7 border border-[#E9E5F4] relative hover:bg-white hover:shadow-md hover:border-[#8B6FF0]/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Circle + Timeline Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E5F4] text-[#6C4CE6] font-extrabold text-base flex items-center justify-center group-hover:bg-[#6C4CE6] group-hover:text-white transition-colors shadow-2xs">
                    {step.step}
                  </div>
                  <span className="text-[11px] font-bold text-[#6B6B78] uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-[#E9E5F4]">
                    {step.timeline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#15151F] group-hover:text-[#6C4CE6] transition-colors mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B6B78] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-[#E9E5F4] flex items-center justify-between text-xs text-[#6B6B78]">
                <span>Phase {step.step} of 06</span>
                <span className="text-[#6C4CE6] font-bold">Execution Milestone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
