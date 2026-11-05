'use client';

import React from 'react';
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Award,
  Shield,
  Layers,
  Terminal,
  Gamepad2,
  Users,
  Compass
} from 'lucide-react';

export const ResourcesScreen: React.FC = () => {
  const resources = [
    {
      id: 'res-01',
      title: 'Create Your First AWS Account',
      badge: 'START HERE',
      badgeColor: 'text-[#00e599] bg-[#00e599]/10 border-[#00e599]/30',
      desc: 'Get started with AWS by creating a free account and accessing the AWS Free Tier. Takes about 10 minutes to configure IAM root protection.',
      linkText: 'Create AWS Account',
      url: 'https://aws.amazon.com/free/',
      icon: Terminal,
    },
    {
      id: 'res-02',
      title: 'AWS Skill Builder',
      badge: 'FREE TRAINING',
      badgeColor: 'text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/30',
      desc: 'Access 500+ free cloud training courses on AWS Skill Builder, including foundational, associate, and specialized GenAI paths.',
      linkText: 'Explore Skill Builder',
      url: 'https://skillbuilder.aws/',
      icon: BookOpen,
    },
    {
      id: 'res-03',
      title: 'AWS Free Tier',
      badge: 'HANDS-ON PRACTICE',
      badgeColor: 'text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/30',
      desc: 'Practice building on real AWS infrastructure with the AWS Free Tier at no cost for eligible services within monthly limits.',
      linkText: 'Get Started Free',
      url: 'https://aws.amazon.com/free/',
      icon: Layers,
    },
    {
      id: 'res-04',
      title: 'Free Exam Vouchers via AWS Academy',
      badge: 'STUDENTS ONLY',
      badgeColor: 'text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30',
      desc: 'We assist active student members in accessing exam discount vouchers and curriculum through institutional AWS Academy programs.',
      linkText: 'Request Voucher Info',
      url: 'https://aws.amazon.com/training/awsacademy/',
      icon: Award,
    },
    {
      id: 'res-05',
      title: 'AWS Cloud Quest: Cloud Practitioner',
      badge: 'GAME-BASED LEARNING',
      badgeColor: 'text-[#f472b6] bg-[#f472b6]/10 border-[#f472b6]/30',
      desc: 'An immersive 3D RPG where you complete hands-on missions in an AWS console sandbox to restore power and infrastructure to a virtual city.',
      linkText: 'Play Cloud Quest',
      url: 'https://aws.amazon.com/training/digital/aws-cloud-quest/',
      icon: Gamepad2,
    },
    {
      id: 'res-06',
      title: 'AWS Builder Center',
      badge: 'DEVELOPER BLUEPRINTS',
      badgeColor: 'text-[#34d399] bg-[#34d399]/10 border-[#34d399]/30',
      desc: 'Architecture diagrams, starter GitHub repositories, and step-by-step guides straight from official AWS Developer Advocates.',
      linkText: 'Open Builder Center',
      url: 'https://builder.aws.com/',
      icon: Compass,
    },
  ];

  return (
    <div className="w-full pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header (Matching cloudhubuh.com /resources) */}
      <div className="border-b border-[#1a2333] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-2">
          TOOLKIT & ESSENTIALS
        </p>
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#f1f5f9] tracking-tight">
          Resources
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] mt-2 max-w-2xl">
          Everything you need to launch servers, study for certifications, and build real applications on AWS.
        </p>
      </div>

      {/* Grid of Curated Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => {
          const Icon = res.icon;
          return (
            <div
              key={res.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599]/40 flex flex-col justify-between transition-all group shadow-sm hover:shadow-[0_0_25px_rgba(0,229,153,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00e599]/10 text-[#00e599] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-['JetBrains_Mono',monospace] font-bold border ${res.badgeColor}`}
                  >
                    {res.badge}
                  </span>
                </div>

                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl text-[#f1f5f9] group-hover:text-[#00e599] transition-colors mb-2">
                  {res.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed mb-6">
                  {res.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a2333]">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-['Bricolage_Grotesque',sans-serif] font-bold text-[#00e599] hover:text-[#00c77b] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{res.linkText}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Help Banner */}
      <div className="p-8 rounded-2xl bg-[#0c111a] border border-[#1a2333] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9]">
            Need help navigating free tier setup?
          </h3>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif]">
            Drop into our campus workshops at CAE 204. Our leadership will walk you through billing alarms and root account MFA step-by-step.
          </p>
        </div>
        <a
          href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
          target="_blank"
          rel="noopener noreferrer"
          className="sheen-btn shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00e599] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-xs sm:text-sm"
        >
          <span>RSVP on Meetup</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
};
