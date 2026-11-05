'use client';

import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Users
} from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="w-full pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header (Matching cloudhubuh.com /contact) */}
      <div className="border-b border-[#1a2333] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-2">
          GET IN TOUCH
        </p>
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#f1f5f9] tracking-tight">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] mt-2 max-w-2xl">
          Have a question about upcoming workshops, certifications, or collaborating with our campus chapter? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f141f] border border-[#1a2333] shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00e599]/20 text-[#00e599] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl text-[#f1f5f9]">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-[#94a3b8] font-['Figtree',sans-serif] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-[#f1f5f9] font-semibold">{formData.name}</span>. Our chapter lead Mykhailo and the team have received your note and will follow up shortly at <span className="text-[#00e599]">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', topic: 'general', message: '' });
                    }}
                    className="text-xs font-['JetBrains_Mono',monospace] text-[#00e599] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-[#00e599]" />
                  <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9]">
                    Send us a direct message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8] mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090d14] border border-[#1e293b] text-sm text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#00e599] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8] mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. amorgan@mercyhurst.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090d14] border border-[#1e293b] text-sm text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#00e599] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8] mb-1.5">
                    TOPIC
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090d14] border border-[#1e293b] text-sm text-[#f1f5f9] focus:outline-none focus:border-[#00e599] transition-colors"
                  >
                    <option value="general">General Question</option>
                    <option value="workshop">Workshop & Event Info</option>
                    <option value="cert">AWS Certification & Vouchers</option>
                    <option value="leadership">Leadership & Committee Application</option>
                    <option value="partnership">Campus Collaboration / Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8] mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can our student builder group help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090d14] border border-[#1e293b] text-sm text-[#f1f5f9] placeholder-[#475569] focus:outline-none focus:border-[#00e599] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sheen-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,229,153,0.25)] disabled:opacity-50"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#0f141f] border border-[#1a2333] space-y-4">
            <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9]">
              Direct Contact
            </h3>

            <div className="space-y-3">
              <a
                href="mailto:polishukmisha895@gmail.com"
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#090d14] border border-[#1a2333] hover:border-[#00e599]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8]">EMAIL CHAPTER LEAD</div>
                  <div className="text-sm font-semibold text-[#f1f5f9] group-hover:text-[#00e599] transition-colors">
                    polishukmisha895@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#090d14] border border-[#1a2333] hover:border-[#00e599]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8]">COMMUNITY CHAPTER</div>
                  <div className="text-sm font-semibold text-[#f1f5f9] group-hover:text-[#00e599] transition-colors">
                    Meetup: aws-sbg-at-mercyhurst
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#090d14] border border-[#1a2333]">
                <div className="w-9 h-9 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8]">CAMPUS VENUE</div>
                  <div className="text-sm font-semibold text-[#f1f5f9]">
                    CAE Room 204
                  </div>
                  <div className="text-xs text-[#64748b] mt-0.5">
                    Mercyhurst University · Erie, PA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
