import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    preselectedService || 'Full Growth Audit & Scaling Strategy'
  );
  const [preferredTime, setPreferredTime] = useState<string>('Morning (9 AM - 12 PM IST)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      id="strategy-call-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleModalClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E9E5F4] shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleModalClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-[#6B6B78] hover:text-[#15151F] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#15151F] mb-2">
              Strategy Session Requested!
            </h3>
            <p className="text-sm text-[#6B6B78] leading-relaxed mb-6 max-w-sm">
              Thanks {name || 'there'}! A calendar invite & Zoom briefing link will be dispatched to <strong>{email || 'your email'}</strong> within 2 hours.
            </p>
            <div className="bg-[#FAF9FF] border border-[#E9E5F4] rounded-xl p-4 text-xs text-[#15151F] text-left w-full mb-6 space-y-1.5">
              <div><strong>Topic:</strong> {selectedTopic}</div>
              <div><strong>Time Window:</strong> {preferredTime}</div>
              <div><strong>Host:</strong> Senior Growth Strategist @ Brandformer</div>
            </div>
            <button
              type="button"
              onClick={handleModalClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EEFF] text-[#6C4CE6] text-xs font-bold w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPLIMENTARY 30-MIN SESSION</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#15151F] mb-2">
              Book Your Free Strategy Call
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6B78] mb-6">
              Get an executive-level review of your current traffic, conversion rate, and advertising performance.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                  Primary Growth Focus
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] focus:outline-none focus:border-[#6C4CE6] focus:bg-white"
                >
                  <option value="Full Growth Audit & Scaling Strategy">Full Growth Audit & Scaling Strategy</option>
                  <option value="Google & Meta Paid Ads Optimization">Google & Meta Paid Ads Optimization</option>
                  <option value="High-Converting WordPress Development">High-Converting WordPress Development</option>
                  <option value="SEO & Organic Search Dominance">SEO & Organic Search Dominance</option>
                  <option value="AI Video & Creative Production Sprints">AI Video & Creative Production Sprints</option>
                  <option value="Complete Digital Marketing Retainer">Complete Digital Marketing Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                  Preferred Call Time
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] focus:outline-none focus:border-[#6C4CE6] focus:bg-white"
                >
                  <option value="Morning (9 AM - 12 PM IST)">Morning (9 AM - 12 PM IST)</option>
                  <option value="Afternoon (12 PM - 4 PM IST)">Afternoon (12 PM - 4 PM IST)</option>
                  <option value="Evening (4 PM - 8 PM IST)">Evening (4 PM - 8 PM IST)</option>
                  <option value="US / European Timezone Compatible">US / European Timezone Compatible</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] focus:outline-none focus:border-[#6C4CE6] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] focus:outline-none focus:border-[#6C4CE6] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] focus:outline-none focus:border-[#6C4CE6] focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] transition-colors shadow-md cursor-pointer"
                >
                  <span>Confirm Strategy Call Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-[#6B6B78]">
                ✓ 100% Free • No sales pressure • Strict NDA confidentiality
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
