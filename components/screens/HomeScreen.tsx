'use client';

import React, { useState } from 'react';
import { ScreenTab } from '../Navbar';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Award,
  BookOpen,
  Code,
  Users,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Laptop,
  GraduationCap
} from 'lucide-react';

interface HomeScreenProps {
  onSelectTab: (tab: ScreenTab) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectTab }) => {
  const [activeFocus, setActiveFocus] = useState<number>(0);

  const focusPoints = [
    {
      num: '01',
      title: 'Build Projects for Your Resume',
      desc: 'Workshops, labs, and live cloud demos built around real AWS services. From S3, EC2, and Lambda to Amazon Bedrock GenAI APIs, we learn by building tangible software, not watching passive slide decks.',
      badge: 'HANDS-ON',
      linkText: 'Explore learning paths',
      tab: 'learning-paths' as ScreenTab,
    },
    {
      num: '02',
      title: 'Certifications + Free Exam Vouchers',
      desc: 'We prep you for AWS certifications with structured roadmaps, official practice exams, and faculty-supported AWS Academy study guides. Target the Certified Cloud Practitioner, AI Practitioner, and Solutions Architect Associate.',
      badge: 'CREDENTIALS',
      linkText: 'View certification roadmaps',
      tab: 'learning-paths' as ScreenTab,
    },
    {
      num: '03',
      title: 'Meeting up with the wider AWS builder community',
      desc: 'Connect with fellow student builders across Data Science, Cybersecurity, Business, and Tech. Network with alumni, participate in collaborative campus hack challenges, and join the global AWS Student Builder Groups ecosystem.',
      badge: 'NETWORK',
      linkText: 'Meet our leadership',
      tab: 'team' as ScreenTab,
    },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00e599]/10 via-[#00b85c]/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section (Replicating cloudhubuh.com hero with green palette) */}
      <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] bg-[#00e599]/10 px-3 py-1.5 rounded-full border border-[#00e599]/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] animate-pulse" />
            <span>AWS Student Builder Group · Mercyhurst University</span>
          </div>

          {/* Headline */}
          <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-[#f1f5f9] mb-8">
            Build cloud skills.
            <br />
            Find your <span className="text-[#00e599] drop-shadow-[0_0_35px_rgba(0,229,153,0.35)]">people.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#94a3b8] text-lg sm:text-xl font-['Figtree',sans-serif] leading-relaxed max-w-2xl mb-10">
            Mercyhurst students building real AWS skills, earning certifications, and supporting each other through the cloud journey — 100% free.
          </p>

          {/* Hero Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
              target="_blank"
              rel="noopener noreferrer"
              className="sheen-btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-sm sm:text-base transition-all duration-150 shadow-[0_0_25px_rgba(0,229,153,0.3)] hover:shadow-[0_0_35px_rgba(0,229,153,0.5)] active:scale-[0.98]"
            >
              <span>Join our community</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <button
              onClick={() => onSelectTab('events')}
              className="inline-flex items-center gap-2 text-sm sm:text-base text-[#94a3b8] hover:text-[#f1f5f9] font-medium transition-colors px-3 py-2 group"
            >
              <span>Upcoming events</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00e599]" />
            </button>
          </div>
        </div>
      </section>

      {/* Metric Strip (Dark bordered row) */}
      <section className="border-y border-[#1a2333] bg-[#0c111a]/60 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-1">
              <div className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#00e599]">
                100% Free
              </div>
              <div className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif]">
                Open to all campus majors & experience levels
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#f1f5f9]">
                Real Sandboxes
              </div>
              <div className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif]">
                Live AWS console labs with zero billing hazard
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#f1f5f9]">
                Cert Pathways
              </div>
              <div className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif]">
                Cloud Practitioner, AI & Solutions Architect
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#00e599]">
                CAE Room 204
              </div>
              <div className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif]">
                Center for Academic Engagement, Erie, PA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Leadership Spotlight Card (Featuring Mykhailo Polishchuk) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#111827] to-[#0c111a] border border-[#1e293b] p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00e599]/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Lead Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#00e599]/40 shadow-[0_0_30px_rgba(0,229,153,0.2)] bg-[#131b2a]">
                  <img
                    src="/assets/aistudio/personal_56b1f7b9.jpeg"
                    alt="Mykhailo Polishchuk - Chapter Lead"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-full bg-[#00e599] text-[#090d14] text-xs font-['Bricolage_Grotesque',sans-serif] font-bold shadow-lg">
                  CHAPTER LEAD
                </div>
              </div>

              <div className="mt-5 text-center sm:text-left">
                <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#f1f5f9]">
                  Mykhailo Polishchuk
                </h3>
                <p className="text-xs font-['JetBrains_Mono',monospace] text-[#00e599] mt-0.5">
                  Double Major: Marketing & Data Science / AI
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <a
                    href="https://www.linkedin.com/in/mykhailo-polishchuk2508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#94a3b8] hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <span className="text-[#334155]">•</span>
                  <a
                    href="https://mykhailopolishchuk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#94a3b8] hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Website</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Community Story */}
            <div className="lg:col-span-8 space-y-5">
              <div className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599]">
                OUR CHAPTER MISSION
              </div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-2xl sm:text-4xl font-extrabold text-[#f1f5f9] leading-tight">
                Empowering Mercyhurst students with production cloud and artificial intelligence skills.
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
                Whether you are writing your first line of Python, curious about generative AI models, or aiming to pass the AWS Certified Cloud Practitioner exam, our chapter provides the curriculum, peer mentorship, and sandboxes so you never have to navigate it alone.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectTab('about')}
                  className="px-4 py-2 rounded-md bg-[#16202e] hover:bg-[#1c293d] border border-[#1e293b] text-xs font-medium text-[#f1f5f9] inline-flex items-center gap-2 transition-colors"
                >
                  <span>Learn about our governance & values</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#00e599]" />
                </button>
                <button
                  onClick={() => onSelectTab('learning-paths')}
                  className="px-4 py-2 rounded-md bg-[#16202e] hover:bg-[#1c293d] border border-[#1e293b] text-xs font-medium text-[#f1f5f9] inline-flex items-center gap-2 transition-colors"
                >
                  <span>View Certification Roadmaps</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#00e599]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section (Exact 2-column layout matching cloudhubuh.com!) */}
      <section className="py-20 border-t border-[#1a2333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="text-xs uppercase tracking-[0.18em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-3">
                WHAT WE DO
              </p>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#f1f5f9] leading-tight">
                Three things
                <br />
                we focus on
              </h2>
              <p className="text-sm text-[#94a3b8] mt-4 font-['Figtree',sans-serif]">
                Everything we run on campus is engineered to help you build real experience and launch your cloud career.
              </p>
              <button
                onClick={() => onSelectTab('events')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00e599] mt-6 hover:gap-2.5 transition-all duration-150 group"
              >
                <span>See upcoming events</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Column: 3 Cards */}
            <div className="space-y-4">
              {focusPoints.map((point, index) => (
                <div
                  key={point.num}
                  className={`p-6 sm:p-8 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeFocus === index
                      ? 'bg-[#121824] border-[#00e599]/50 shadow-[0_0_25px_rgba(0,229,153,0.1)]'
                      : 'bg-[#0f141f] border-[#1a2333] hover:border-[#2d3a4f] hover:bg-[#121824]'
                  }`}
                  onClick={() => setActiveFocus(index)}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-['JetBrains_Mono',monospace] text-xs font-bold text-[#00e599]">
                      {point.num} {'//'} {point.badge}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTab(point.tab);
                      }}
                      className="text-xs text-[#94a3b8] hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{point.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl sm:text-2xl font-bold text-[#f1f5f9] mb-2">
                    {point.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps to Join Strip */}
      <section className="py-20 border-t border-[#1a2333] bg-[#0c1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.18em] font-['JetBrains_Mono',monospace] text-[#00e599]">
              HOW TO JOIN
            </span>
            <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#f1f5f9] mt-2">
              Get started in three steps
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-2 font-['Figtree',sans-serif]">
              No membership dues, no applications, and no prior prerequisites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0f141f] border border-[#1a2333] relative">
              <div className="w-10 h-10 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-base mb-4">
                1
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9] mb-2">
                Join our Meetup Group
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-['Figtree',sans-serif] mb-4">
                Our official Meetup chapter is where all campus workshop dates, room notices, and RSVP slots are published first.
              </p>
              <a
                href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#00e599] font-medium inline-flex items-center gap-1 hover:underline"
              >
                <span>Join on Meetup</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-xl bg-[#0f141f] border border-[#1a2333] relative">
              <div className="w-10 h-10 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-base mb-4">
                2
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9] mb-2">
                Create Free AWS Account
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-['Figtree',sans-serif] mb-4">
                Access 12 months of free tier computing and 500+ free self-paced courses on AWS Skill Builder with your student account.
              </p>
              <button
                onClick={() => onSelectTab('resources')}
                className="text-xs text-[#00e599] font-medium inline-flex items-center gap-1 hover:underline"
              >
                <span>View Setup Resources</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 rounded-xl bg-[#0f141f] border border-[#1a2333] relative">
              <div className="w-10 h-10 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-base mb-4">
                3
              </div>
              <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9] mb-2">
                Show Up & Start Building
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-['Figtree',sans-serif] mb-4">
                Bring your laptop to CAE 204. We provide the curriculum, guided sandboxes, snacks, and peer mentors to guide you.
              </p>
              <button
                onClick={() => onSelectTab('about')}
                className="text-xs text-[#00e599] font-medium inline-flex items-center gap-1 hover:underline"
              >
                <span>Venue & Gathering Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1622] via-[#101b2a] to-[#0d1622] border border-[#00e599]/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,229,153,0.1)]">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599]">
              START YOUR CLOUD JOURNEY TODAY
            </span>
            <h2 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#f1f5f9]">
              Ready to start building?
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
              Connect with fellow Mercyhurst builders, earn industry-recognized digital credentials, and supercharge your resume.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
                target="_blank"
                rel="noopener noreferrer"
                className="sheen-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(0,229,153,0.3)]"
              >
                <span>Join our Meetup Group</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <button
                onClick={() => onSelectTab('contact')}
                className="px-6 py-3.5 rounded-lg bg-[#16202e] hover:bg-[#1c293d] border border-[#1e293b] text-sm sm:text-base font-semibold text-[#f1f5f9] transition-colors"
              >
                Contact Leadership
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
