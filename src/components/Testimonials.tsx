import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF9FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-4">
            CLIENT EXPERIENCES
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight mb-4"
          >
            What Our <span className="purple-gradient-text">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed">
            Real feedback from growing businesses, e-commerce brands, and service founders working directly with Brandformer.
          </p>
        </div>

        {/* 3 Cards */}
        <div
          id="testimonials-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={item.id}
              id={`testimonial-card-${index + 1}`}
              className="bg-white rounded-2xl p-8 border border-[#E9E5F4] shadow-xs hover:shadow-md hover:border-[#8B6FF0]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#15151F] ml-2">5.0</span>
                </div>

                {/* Quote Text */}
                <p className="text-base text-[#15151F] font-medium leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info & Verified Outcome */}
              <div className="pt-6 border-t border-[#E9E5F4]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F2EEFF] text-[#6C4CE6] font-bold text-sm flex items-center justify-center border border-[#E9E5F4]">
                      {item.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#15151F] flex items-center gap-1.5">
                        <span>{item.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6C4CE6]" />
                      </div>
                      <div className="text-xs text-[#6B6B78]">
                        {item.role}, {item.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outcome Badge */}
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#6C4CE6] bg-[#F2EEFF] px-2.5 py-1 rounded-md">
                  <span>Growth Impact:</span>
                  <span className="text-[#15151F] font-extrabold">{item.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
