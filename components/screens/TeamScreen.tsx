'use client';

import React from 'react';
import {
  Users,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Mail,
  ShieldCheck,
  Code,
  Megaphone,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export const TeamScreen: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header (Matching cloudhubuh.com /team) */}
      <div className="border-b border-[#1a2333] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-2">
          THE PEOPLE
        </p>
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#f1f5f9] tracking-tight">
          The Team
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] mt-2 max-w-2xl leading-relaxed">
          Students who decided to build something instead of waiting for someone else to do it.
        </p>
      </div>

      {/* Chapter Lead Spotlight Card (Featuring Mykhailo Polishchuk with user's authentic photo) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00e599]" />
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl sm:text-2xl text-[#f1f5f9]">
            Chapter Leadership
          </h2>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-[#0f141f] border border-[#1a2333] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative group">
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#00e599]/40 shadow-[0_0_30px_rgba(0,229,153,0.2)] bg-[#131b2a]">
                  <img
                    src="/assets/aistudio/personal_56b1f7b9.jpeg"
                    alt="Mykhailo Polishchuk - AWS Student Builder Group Lead"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded bg-[#00e599] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-xs shadow-md">
                  LEAD & FOUNDER
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] font-['JetBrains_Mono',monospace] text-[#00e599]">
                  MERCYHURST UNIVERSITY
                </span>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#f1f5f9] tracking-tight mt-1">
                  Mykhailo Polishchuk
                </h3>
                <p className="text-sm font-['JetBrains_Mono',monospace] text-[#94a3b8] mt-1">
                  AWS Student Builder Group Lead · Double Major in Marketing & Data Science & AI
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
                Leading chapter operations, curating hands-on cloud labs in CAE 204, and connecting business strategy with artificial intelligence and data science to empower the Mercyhurst builder community.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Marketing Strategy',
                  'Data Science & AI',
                  'AWS Cloud',
                  'Python & Bedrock',
                  'Community Leadership',
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded bg-[#16202e] border border-[#1e293b] text-xs font-['JetBrains_Mono',monospace] text-[#cbd5e1]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1a2333]">
                <a
                  href="https://www.linkedin.com/in/mykhailo-polishchuk2508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-['Bricolage_Grotesque',sans-serif] font-bold text-[#00e599] hover:text-[#00c77b] transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <span className="text-[#334155]">•</span>

                <a
                  href="https://mykhailopolishchuk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-['Bricolage_Grotesque',sans-serif] font-bold text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                >
                  <span>mykhailopolishchuk.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-[#334155]">•</span>

                <a
                  href="mailto:polishukmisha895@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-['Bricolage_Grotesque',sans-serif] font-bold text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00e599]" />
                  <span>Email Lead</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Committee Roles Strip (Matching cloudhubuh.com team expansion) */}
      <section className="space-y-6 pt-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599]">
            CAMPUS COMMITTEES
          </span>
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#f1f5f9] mt-1">
            Get Involved in Chapter Operations
          </h2>
          <p className="text-sm text-[#94a3b8] font-['Figtree',sans-serif] mt-1">
            We are actively recruiting passionate student builders to help run workshops, design marketing, and coordinate events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0f141f] border border-[#1a2333] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9]">
              Technical Education
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
              Design step-by-step console labs, test code samples, and assist beginner students during live workshop sessions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0f141f] border border-[#1a2333] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center">
              <Megaphone className="w-5 h-5" />
            </div>
            <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9]">
              Marketing & Outreach
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
              Create campus posters, craft social announcements, and spread the word across Mercyhurst academic departments.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0f141f] border border-[#1a2333] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9]">
              Event Operations
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
              Coordinate venue setup in CAE Room 204, manage attendee check-ins, snacks, and chapter Meetup RSVP slots.
            </p>
          </div>
        </div>

        {/* Join Leadership CTA */}
        <div className="p-8 rounded-2xl bg-[#0c111a] border border-[#00e599]/30 text-center space-y-4">
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#f1f5f9]">
            Want to help lead the Mercyhurst Builder Chapter?
          </h3>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif] max-w-xl mx-auto leading-relaxed">
            Fill out our interest form or talk directly with Mykhailo at our next workshop. All majors and class years welcome.
          </p>
          <div className="pt-2">
            <a
              href="mailto:polishukmisha895@gmail.com?subject=AWS%20Builder%20Group%20Leadership%20Interest"
              className="sheen-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#00e599] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-sm shadow-md"
            >
              <span>Express Interest via Email</span>
              <Mail className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
