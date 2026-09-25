import React from 'react';
import { CLIENT_LOGOS } from '../data';

export const TrustBar: React.FC = () => {
  return (
    <section
      id="trust-section"
      className="py-12 border-y border-[#E9E5F4] bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p
            id="trust-heading"
            className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6B6B78]"
          >
            Trusted by Businesses Ready to Grow
          </p>
        </div>

        {/* Logo strip grid */}
        <div
          id="client-logos-strip"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center"
        >
          {CLIENT_LOGOS.map((client, index) => (
            <div
              key={client.name}
              id={`client-logo-${index + 1}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl text-[#6B6B78] hover:text-[#15151F] hover:bg-[#FAF9FF] border border-transparent hover:border-[#E9E5F4] transition-all duration-200 cursor-default group w-full justify-center"
              title={`${client.name} - Partner Client`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center font-extrabold text-xs group-hover:bg-[#6C4CE6] group-hover:text-white transition-colors">
                {client.symbol}
              </div>
              <span className="font-bold text-xs tracking-tight text-[#15151F]/80 group-hover:text-[#15151F] transition-colors whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
