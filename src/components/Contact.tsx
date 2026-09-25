import React, { useState } from 'react';
import {
  Mail,
  Globe,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  Sparkles,
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: initialService || 'WordPress Website',
    budgetRange: '$2,500 - $5,000 / month',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@brandformer.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a phone number for call scheduling';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please briefly describe your project or growth goals';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-converting frontend agency lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#E9E5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9FF] border border-[#E9E5F4] text-xs font-bold uppercase tracking-wider text-[#6C4CE6] mb-4">
            INITIATE PARTNERSHIP
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#15151F] tracking-tight mb-4"
          >
            Let's Build Something <span className="purple-gradient-text">That Grows</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B78] leading-relaxed">
            Tell us about your brand, challenges, and goals. We'll audit your digital footprint and return with a customized growth roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Agency Contact Info & Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF9FF] border border-[#E9E5F4] rounded-2xl p-7 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#15151F]">
                Agency Headquarters & Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E9E5F4] text-[#6C4CE6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#6B6B78] uppercase">Email Inquiries</div>
                    <div className="text-base font-bold text-[#15151F] flex items-center gap-2">
                      <span>hello@brandformer.in</span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        title="Copy email to clipboard"
                        className="text-[#6C4CE6] hover:text-[#5839ce] text-xs font-semibold p-1 hover:bg-[#F2EEFF] rounded transition-colors"
                      >
                        {copiedEmail ? <span className="text-emerald-600 font-bold">Copied!</span> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E9E5F4] text-[#6C4CE6] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6B6B78] uppercase">Official Website</div>
                    <div className="text-base font-bold text-[#15151F]">brandformer.in</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E9E5F4] text-[#6C4CE6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6B6B78] uppercase">Global Operations</div>
                    <div className="text-base font-bold text-[#15151F]">India (Serving Clients Worldwide)</div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="pt-4 border-t border-[#E9E5F4] flex items-center gap-3 text-xs text-[#6B6B78]">
                <Clock className="w-4 h-4 text-[#6C4CE6] shrink-0" />
                <span>We review all inquiries within <strong>24 business hours</strong>.</span>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-white border border-[#E9E5F4] rounded-2xl p-6 shadow-2xs">
              <h4 className="text-sm font-bold text-[#15151F] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#6C4CE6]" />
                What Happens Next?
              </h4>
              <ul className="space-y-2 text-xs text-[#6B6B78] leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C4CE6]" />
                  <span>We conduct a preliminary technical & traffic audit of your current channels.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C4CE6]" />
                  <span>We schedule a 30-min strategy alignment session.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C4CE6]" />
                  <span>You receive a clear proposal with deliverables, milestones, and projected ROAS.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E9E5F4] rounded-3xl p-7 sm:p-10 shadow-lg">
              {submitted ? (
                <div
                  id="contact-success-state"
                  className="py-12 text-center flex flex-col items-center animate-in fade-in duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#F2EEFF] text-[#6C4CE6] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#15151F] mb-3">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B6B78] max-w-md mx-auto mb-6 leading-relaxed">
                    Your inquiry has been logged in the Brandformer growth pipeline. A lead strategist will review your brand details and reach out to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        serviceRequired: 'WordPress Website',
                        budgetRange: '$2,500 - $5,000 / month',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-[#6C4CE6] bg-[#F2EEFF] hover:bg-[#e4dbff] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="agency-lead-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#15151F] placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                            : 'border-[#E9E5F4] bg-[#FAF9FF] focus:border-[#6C4CE6] focus:bg-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Acro Dynamics"
                        className="w-full px-4 py-3 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] placeholder-gray-400 focus:outline-none focus:border-[#6C4CE6] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#15151F] placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                            : 'border-[#E9E5F4] bg-[#FAF9FF] focus:border-[#6C4CE6] focus:bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#15151F] placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                            : 'border-[#E9E5F4] bg-[#FAF9FF] focus:border-[#6C4CE6] focus:bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Required Dropdown */}
                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                        Service Required *
                      </label>
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] focus:outline-none focus:border-[#6C4CE6] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="WordPress Website">WordPress Website</option>
                        <option value="SEO">SEO</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Meta Ads">Meta Ads</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Video Editing">Video Editing</option>
                        <option value="AI Video">AI Video</option>
                        <option value="Complete Digital Marketing">Complete Digital Marketing</option>
                      </select>
                    </div>

                    {/* Budget Range Dropdown */}
                    <div>
                      <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                        Anticipated Monthly Budget
                      </label>
                      <select
                        id="budgetRange"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9E5F4] bg-[#FAF9FF] text-sm text-[#15151F] focus:outline-none focus:border-[#6C4CE6] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="$1,000 - $2,500 / month">$1,000 - $2,500 / month</option>
                        <option value="$2,500 - $5,000 / month">$2,500 - $5,000 / month</option>
                        <option value="$5,000 - $10,000 / month">$5,000 - $10,000 / month</option>
                        <option value="$10,000+ / month">$10,000+ / month</option>
                        <option value="One-Time Fixed Project">One-Time Fixed Project</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#15151F] mb-1.5">
                      Tell Us About Your Project & Targets *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Current monthly revenue, target ROAS, target audience, timeline, or specific challenges..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#15151F] placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                          : 'border-[#E9E5F4] bg-[#FAF9FF] focus:border-[#6C4CE6] focus:bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-enquiry-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#6C4CE6] hover:bg-[#5839ce] active:scale-[0.99] transition-all duration-200 glow-purple cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6C4CE6] disabled:opacity-75"
                  >
                    <span>{isSubmitting ? 'Securing Your Priority Slot...' : 'Send My Enquiry'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-[11px] text-[#6B6B78] pt-1">
                    🔒 Strictly confidential. No spam or third-party sharing ever.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
