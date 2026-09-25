import React from 'react';
import {
  Compass,
  Crosshair,
  BarChart3,
  Layers,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data';

export const ValueProposition: React.FC = () => {
  const renderIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-[#6C4CE6]' };
    switch (name) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Crosshair':
        return <Crosshair {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  return (
    <section
      id="value-proposition"
      className="py-20 md:py-24 bg-white border-y border-[#E9E5F4] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-4">
            OUR PHILOSOPHY
          </div>
          <h2
            id="value-prop-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight mb-4"
          >
            More Than Marketing.{' '}
            <span className="purple-gradient-text">A Complete Growth Partner.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed">
            We reject disconnected tactics. We build coordinated digital ecosystems designed for measurable business traction.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div
          id="value-prop-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {VALUE_PROPOSITIONS.map((prop, index) => (
            <div
              key={prop.id}
              id={`value-card-${index + 1}`}
              className="p-7 rounded-2xl bg-[#FAF9FF] border border-[#E9E5F4] hover:bg-white hover:shadow-md hover:border-[#8B6FF0]/40 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#E9E5F4] flex items-center justify-center mb-5 group-hover:bg-[#F2EEFF] transition-colors shadow-2xs">
                {renderIcon(prop.iconName)}
              </div>
              <h3 className="text-lg font-bold text-[#15151F] mb-2 group-hover:text-[#6C4CE6] transition-colors">
                {prop.title}
              </h3>
              <p className="text-sm text-[#6B6B78] leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
