import React from 'react';
import { METRICS_DATA } from '../data';
import { CheckCircle } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section id="results" className="py-20 md:py-24 bg-[#F2EEFF] relative overflow-hidden">
      {/* Decorative background radial pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#6C4CE6_1px,transparent_1px)] [background-size:24px_24px] opacity-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-4 shadow-2xs">
            DATA-BACKED IMPACT
          </div>
          <h2
            id="results-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight mb-4"
          >
            Focused on <span className="purple-gradient-text">Metrics That Matter</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed">
            We don't count vanity impressions. We benchmark our agency on business pipeline, operational speed, and sustainable customer lifetime value.
          </p>
        </div>

        {/* 4 Large Metric Cards */}
        <div
          id="metrics-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {METRICS_DATA.map((item, index) => (
            <div
              key={item.id}
              id={`metric-card-${index + 1}`}
              className="bg-white rounded-2xl p-7 border border-[#E9E5F4] shadow-sm hover:shadow-md transition-all duration-200 text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#6C4CE6] tracking-tight mb-2">
                  {item.value}
                </div>
                <h3 className="text-base font-extrabold text-[#15151F] mb-3">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-[#6B6B78] leading-relaxed border-t border-gray-100 pt-3">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-semibold text-[#6B6B78]">
          <CheckCircle className="w-4 h-4 text-[#6C4CE6]" />
          <span>Real-time attribution & multi-touch tracking provided for every client campaign.</span>
        </div>
      </div>
    </section>
  );
};
