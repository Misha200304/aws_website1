'use client';

import React from 'react';
import { ScreenTab } from '../Navbar';
import {
  MapPin,
  Clock,
  ArrowUpRight,
  Shield,
  Laptop,
  GraduationCap,
  Award,
  Globe,
  Terminal,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface AboutScreenProps {
  onSelectTab: (tab: ScreenTab) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onSelectTab }) => {
  return (
    <div className="w-full pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Hero Section (Replicating cloudhubuh.com /about) */}
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-4">
          ABOUT US
        </p>
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-4xl sm:text-6xl text-[#f1f5f9] tracking-tight leading-[1.05] mb-6">
          Built by students,
          <br />
          for students.
        </h1>
        <p className="text-base sm:text-xl text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
          We bring cloud computing education, community, and career opportunities to Mercyhurst University students, for free.
        </p>
      </section>

      {/* Three Core Pillars (from cloudhubuh.com About) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 sm:p-8 rounded-xl bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599]/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center mb-6">
            <Terminal className="w-6 h-6" />
          </div>
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#f1f5f9] mb-3">
            Hands-On Learning
          </h3>
          <p className="text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
            Workshops, labs, and live cloud demos built around real AWS services. From S3 and EC2 to Bedrock GenAI APIs, we learn by building, not watching slides.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599]/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center mb-6">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#f1f5f9] mb-3">
            AWS Badge Progression
          </h3>
          <p className="text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
            Club events count toward official AWS Student Builder Groups recognition milestones. Track your progress and earn verifiable digital badges along the way.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599]/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center mb-6">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#f1f5f9] mb-3">
            A Global Builder Network
          </h3>
          <p className="text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
            Mercyhurst is recognized as an official node in the worldwide AWS Student Builder Groups ecosystem. Connect with Student Builder Leaders and ambassadors globally.
          </p>
        </div>
      </section>

      {/* Leadership Spotlight (Featuring Mykhailo Polishchuk) */}
      <section className="pt-6 border-t border-[#1a2333]">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-2">
            CHAPTER LEADERSHIP
          </p>
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#f1f5f9]">
            Meet the Chapter Lead
          </h2>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-[#0f141f] border border-[#1a2333] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center sm:items-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#00e599]/40 shadow-[0_0_25px_rgba(0,229,153,0.15)] bg-[#131b2a]">
              <img
                src="/assets/aistudio/personal_56b1f7b9.jpeg"
                alt="Mykhailo Polishchuk photo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#00e599] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-xs shadow-md">
                LEAD
              </span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-['JetBrains_Mono',monospace] text-[#00e599]">
                MERCYHURST UNIVERSITY CHAPTER
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl sm:text-3xl text-[#f1f5f9]">
                Mykhailo Polishchuk
              </h3>
              <p className="text-sm font-['JetBrains_Mono',monospace] text-[#94a3b8] mt-1">
                AWS Student Builder Group Lead · Double Major in Marketing & Data Science & AI
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
              Leading chapter operations, organizing hands-on cloud labs, and connecting marketing strategy with artificial intelligence and data science to empower the Mercyhurst builder community.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Marketing Strategy', 'Data Science & AI', 'AWS Cloud', 'Python', 'Leadership'].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded bg-[#16202e] border border-[#1e293b] text-xs font-['JetBrains_Mono',monospace] text-[#cbd5e1]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-3 text-sm font-medium">
              <a
                href="https://www.linkedin.com/in/mykhailo-polishchuk2508"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e599] hover:text-[#00c77b] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>linkedin.com/in/mykhailo-polishchuk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://mykhailopolishchuk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#f1f5f9] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>mykhailopolishchuk.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gathering Space */}
      <section className="pt-6 border-t border-[#1a2333]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599]">
              CAMPUS GATHERING SPACE
            </span>
            <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#f1f5f9]">
              Where Builders Connect
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
              Our in-person sessions take place at the Center for Academic Engagement (CAE) on the Mercyhurst University campus in Erie, Pennsylvania.
            </p>

            <div className="space-y-3 pt-2 text-xs font-['JetBrains_Mono',monospace]">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#0f141f] border border-[#1a2333]">
                <MapPin className="w-4 h-4 text-[#00e599] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#f1f5f9] block">Center for Academic Engagement (CAE), Room 204</strong>
                  <span className="text-[#94a3b8]">Mercyhurst University, 501 E 38th St, Erie, PA 16546</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#0f141f] border border-[#1a2333]">
                <Clock className="w-4 h-4 text-[#00e599] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#f1f5f9] block">Scheduled Workshop Dates</strong>
                  <span className="text-[#94a3b8]">Check our official Meetup group for scheduled session dates & times.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#1a2333] bg-[#0f141f] p-5">
              <div className="flex items-center justify-between text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8] pb-3 border-b border-[#1a2333]">
                <span>MERCYHURST_CAMPUS // ERIE_PA</span>
                <span className="text-[#00e599]">42.1009° N, 80.0543° W</span>
              </div>
              <div className="h-44 rounded-lg bg-[#090d14] border border-[#1a2333] flex flex-col items-center justify-center text-center p-4 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#00e599]/20 border border-[#00e599] flex items-center justify-center text-[#00e599] mb-2 animate-pulse">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-base text-[#f1f5f9]">
                  CAE 204 Computer Lab
                </div>
                <div className="text-xs text-[#94a3b8] mt-1 font-['Figtree',sans-serif]">
                  Equipped with dual monitors and high-speed network connections
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
