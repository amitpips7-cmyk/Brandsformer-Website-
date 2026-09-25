import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { NAV_LINKS } from '../data';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E9E5F4] py-3'
          : 'bg-[#FAF9FF]/85 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CE6] rounded-xl p-1 shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-[#0B1020] border border-[#E9E5F4] shadow-xs flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200">
              <img
                src={logoImg}
                alt="Brandsformer Logo"
                className="w-full h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#15151F] group-hover:text-[#6C4CE6] transition-colors leading-none">
                BRANDFORMER
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B6B78] mt-1 hidden sm:block leading-none">
                Digital Growth Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] xl:text-[15px] font-semibold text-[#6B6B78] hover:text-[#6C4CE6] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CE6] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Controls: Social Icons + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Header Social Media Icons */}
            <div
              id="header-social-links"
              aria-label="Social Media Channels"
              className="hidden md:flex items-center gap-1 bg-white border border-[#E9E5F4] rounded-full px-2 py-1 shadow-2xs"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandformer on Instagram"
                title="Instagram"
                className="w-7 h-7 rounded-full text-[#6B6B78] hover:text-[#E1306C] hover:bg-[#FAF9FF] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandformer on LinkedIn"
                title="LinkedIn"
                className="w-7 h-7 rounded-full text-[#6B6B78] hover:text-[#0A66C2] hover:bg-[#FAF9FF] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandformer on Facebook"
                title="Facebook"
                className="w-7 h-7 rounded-full text-[#6B6B78] hover:text-[#1877F2] hover:bg-[#FAF9FF] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Brandformer on YouTube"
                title="YouTube"
                className="w-7 h-7 rounded-full text-[#6B6B78] hover:text-[#FF0000] hover:bg-[#FAF9FF] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Desktop CTA Button */}
            <button
              id="header-cta-button"
              type="button"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] active:scale-[0.98] transition-all shadow-sm hover:shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6C4CE6] shrink-0"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-[#15151F] hover:bg-[#F2EEFF] focus:outline-none focus:ring-2 focus:ring-[#6C4CE6] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-white border-b border-[#E9E5F4] px-5 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#15151F] hover:text-[#6C4CE6] py-1 border-b border-gray-50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#6B6B78]">→</span>
              </a>
            ))}

            {/* Mobile Strategy Call CTA */}
            <div className="pt-2">
              <button
                id="mobile-drawer-cta"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-colors shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Book a Free Strategy Call</span>
              </button>
            </div>

            {/* Mobile Social Media Icons */}
            <div className="pt-4 border-t border-[#E9E5F4]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#6B6B78] mb-3">
                Follow Brandformer
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-semibold text-[#15151F] hover:text-[#6C4CE6]"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-semibold text-[#15151F] hover:text-[#6C4CE6]"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-semibold text-[#15151F] hover:text-[#6C4CE6]"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-semibold text-[#15151F] hover:text-[#6C4CE6]"
                >
                  <Youtube className="w-4 h-4 text-[#FF0000]" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
