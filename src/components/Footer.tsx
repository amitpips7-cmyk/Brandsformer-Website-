import React, { useState } from 'react';
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowUp,
  Shield,
  FileText,
  X,
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="agency-footer" className="bg-[#15151F] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-gray-800">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#0A0E1A] border border-gray-700 flex items-center justify-center p-0.5 shrink-0">
                <img
                  src={logoImg}
                  alt="Brandsformer Logo"
                  className="w-full h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                BRANDFORMER
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Building brands. Driving growth. We combine high-converting web engineering, performance acquisition, and modern AI creative workflows into an integrated growth engine.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-3">
                Connect Across Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Brandformer Instagram"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#6C4CE6] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Brandformer Facebook"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#6C4CE6] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Brandformer LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#6C4CE6] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Brandformer YouTube"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#6C4CE6] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">SEO & Search Organic</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Google Ads Management</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Meta Ads & Social Ads</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Social Media Strategy</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Creative & AI Video</a>
              </li>
            </ul>
          </div>

          {/* Agency Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <p>Email: hello@brandformer.in</p>
              <p>Domain: brandformer.in</p>
              <p>Global Hub: India</p>
              <div className="pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B6FF0] hover:text-white transition-colors"
                >
                  <span>Request Custom Audit</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Brandformer. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              title="Back to top"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#6C4CE6] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActivePolicy(null)}
        >
          <div
            className="bg-white text-[#15151F] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePolicy(null)}
              className="absolute top-5 right-5 p-2 text-[#6B6B78] hover:text-[#15151F] rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center">
                {activePolicy === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <h3 className="text-xl font-extrabold">
                {activePolicy === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-[#6B6B78] space-y-3 leading-relaxed">
              {activePolicy === 'privacy' ? (
                <>
                  <p>
                    Brandformer respects client and visitor confidentiality. Information submitted through our consultation forms is used strictly for campaign evaluation and communication.
                  </p>
                  <p>
                    We never rent, sell, or disclose proprietary company data, marketing assets, or contact information to unauthorized third parties.
                  </p>
                  <p>
                    For inquiries or data modification requests, please contact privacy@brandformer.in.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All growth strategies, performance projections, and creative deliverables developed by Brandformer are governed by formal client service agreements.
                  </p>
                  <p>
                    Campaign performance metrics cited on this website illustrate historical client outcomes and do not constitute an explicit legal guarantee of identical future results.
                  </p>
                  <p>
                    All brand logos and case studies represent past client collaborations or work portfolios.
                  </p>
                </>
              )}
            </div>

            <div className="pt-6 border-t border-gray-100 text-right mt-6">
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
