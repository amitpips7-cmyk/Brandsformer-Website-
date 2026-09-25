import React, { useState } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, CheckCircle, X } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onOpenBooking: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.filterTag === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white border-b border-[#E9E5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-4">
              OUR WORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight leading-[1.15]">
              Built to Look Better.{' '}
              <br className="hidden sm:inline" />
              <span className="purple-gradient-text">Designed to Perform Better.</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Performance', value: 'performance' },
              { label: 'Web & E-com', value: 'web' },
              { label: 'Social & Video', value: 'social' },
              { label: 'AI Solutions', value: 'ai' },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-[#6C4CE6] text-white shadow-xs'
                    : 'bg-[#FAF9FF] text-[#6B6B78] hover:text-[#15151F] border border-[#E9E5F4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`portfolio-card-${index + 1}`}
              onClick={() => setSelectedProject(item)}
              className="group bg-white rounded-2xl border border-[#E9E5F4] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#8B6FF0]/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col cursor-pointer"
            >
              {/* Card Mockup Visual Container */}
              <div className="h-56 bg-gradient-to-br from-[#FAF9FF] via-[#F2EEFF] to-[#FAF9FF] relative overflow-hidden border-b border-[#E9E5F4] p-6 flex flex-col justify-between">
                {/* Background graphic simulation */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#6C4CE6]/10 blur-xl group-hover:scale-125 transition-transform duration-500" />

                {/* Top Badge: Category & Metric */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6C4CE6] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#E9E5F4]">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metric}</span>
                  </div>
                </div>

                {/* Center Stylized Graphical Element */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                  <div className="text-3xl sm:text-4xl font-black text-[#15151F] tracking-tight group-hover:text-[#6C4CE6] transition-colors duration-300">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold text-[#6B6B78] uppercase tracking-wider mt-0.5">
                    {item.metricLabel}
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-[#6B6B78] bg-white/80 px-2 py-0.5 rounded border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#15151F] group-hover:text-[#6C4CE6] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B6B78] leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-[#6C4CE6] pt-3 border-t border-gray-100">
                  <span>View Case Breakdown</span>
                  <div className="w-7 h-7 rounded-full bg-[#F2EEFF] flex items-center justify-center group-hover:bg-[#6C4CE6] group-hover:text-white transition-all transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Reassurance & CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-all glow-purple cursor-pointer"
          >
            <span>Discuss Your Campaign Results</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          id="portfolio-case-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-[#E9E5F4] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-[#6B6B78] hover:text-[#15151F] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-2">
              <span>{selectedProject.category}</span>
              <span>•</span>
              <span className="text-emerald-600">{selectedProject.metric} {selectedProject.metricLabel}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#15151F] mb-4">
              {selectedProject.title}
            </h3>

            <div className="bg-[#FAF9FF] rounded-xl p-4 border border-[#E9E5F4] mb-6">
              <div className="text-xs font-bold text-[#6B6B78] uppercase mb-1">Impact Metric</div>
              <div className="text-3xl font-extrabold text-[#6C4CE6]">{selectedProject.metric}</div>
              <div className="text-xs text-[#6B6B78]">{selectedProject.metricLabel} recorded in client attribution window.</div>
            </div>

            <p className="text-sm sm:text-base text-[#6B6B78] leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#15151F] mb-2">
                Implemented Strategy Pillars:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-[#15151F] bg-[#F2EEFF] px-3 py-1 rounded-full border border-[#E9E5F4]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-full text-xs font-bold text-[#6B6B78] hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-colors cursor-pointer"
              >
                <span>Replicate These Results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
