import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { ValueProposition } from './components/ValueProposition';
import { WhyBrandformer } from './components/WhyBrandformer';
import { Portfolio } from './components/Portfolio';
import { Results } from './components/Results';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StrategyModal } from './components/StrategyModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setBookingService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] text-[#15151F] selection:bg-[#6C4CE6] selection:text-white flex flex-col">
      {/* Sticky Top Header Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* 1. Hero Section with 2-column layout and floating stat cards */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Bar / Social Proof Logo Strip */}
        <TrustBar />

        {/* 3. Services Section (3x3 grid of 9 services) */}
        <Services onSelectServiceForBooking={(s) => handleOpenBooking(s)} />

        {/* 4. Value Proposition / Feature Pillars */}
        <ValueProposition />

        {/* 5. Why Brandformer Split-Layout Section */}
        <WhyBrandformer onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Portfolio / Case Studies with Category Filters */}
        <Portfolio onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Results / Large Metrics Section (Soft Purple Background) */}
        <Results />

        {/* 8. Process Timeline (01 to 06) */}
        <Process />

        {/* 9. Testimonials Section (3 Client Cards) */}
        <Testimonials />

        {/* 10. About Section (Split layout with Ecosystem Visual) */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 11. Final High-Converting CTA Banner */}
        <CTA onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Contact Section & Lead Capture Form */}
        <Contact initialService={bookingService} />
      </main>

      {/* 13. Premium Dark Footer */}
      <Footer />

      {/* Interactive Strategy Call Booking Modal */}
      <StrategyModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingService}
      />
    </div>
  );
}
