import React, { useState } from 'react';
import {
  Layout,
  Search,
  Target,
  Share2,
  TrendingUp,
  Palette,
  Film,
  Sparkles,
  Cpu,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Helper to render icons dynamically
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Layout':
        return <Layout {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'Target':
        return <Target {...props} />;
      case 'Share2':
        return <Share2 {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Film':
        return <Film {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF9FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight mb-5">
            Everything You Need to <span className="purple-gradient-text">Win Online</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed">
            From building your digital foundation to driving traffic, leads and sales, Brandformer brings strategy, creativity and performance together.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${index + 1}`}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl p-7 border border-[#E9E5F4] shadow-xs hover:shadow-md hover:border-[#8B6FF0]/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Icon with Purple Background */}
                <div className="w-13 h-13 rounded-xl bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center mb-6 group-hover:bg-[#6C4CE6] group-hover:text-white transition-colors duration-200">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#15151F] group-hover:text-[#6C4CE6] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-[#6B6B78] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Micro Deliverables Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-semibold text-[#6B6B78] bg-[#FAF9FF] border border-[#E9E5F4] px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                  {service.deliverables.length > 2 && (
                    <span className="text-[11px] font-semibold text-[#6C4CE6] bg-[#F2EEFF] px-2 py-1 rounded-md">
                      +{service.deliverables.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Small Arrow */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#6C4CE6]">
                <span className="group-hover:underline">Explore Deliverables</span>
                <div className="w-7 h-7 rounded-full bg-[#F2EEFF] flex items-center justify-center group-hover:bg-[#6C4CE6] group-hover:text-white transition-all transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#6B6B78]">
            Need a tailored omnichannel strategy?{' '}
            <button
              type="button"
              onClick={() => onSelectServiceForBooking('Complete Digital Marketing')}
              className="text-[#6C4CE6] font-bold underline hover:text-[#5839ce] cursor-pointer inline-flex items-center gap-1 ml-1"
            >
              Get a custom growth proposal →
            </button>
          </p>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E9E5F4] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-[#6B6B78] hover:text-[#15151F] rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center shrink-0">
                {renderIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6C4CE6]">
                  Service Scope
                </span>
                <h3 className="text-xl font-extrabold text-[#15151F]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#6B6B78] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#15151F] mb-3">
                Key Deliverables & Execution Plan:
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((deliv) => (
                  <li key={deliv} className="flex items-start gap-2.5 text-sm text-[#15151F]">
                    <CheckCircle2 className="w-4 h-4 text-[#6C4CE6] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-full text-xs font-bold text-[#6B6B78] hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const sName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForBooking(sName);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-colors cursor-pointer"
              >
                <span>Request {selectedService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
