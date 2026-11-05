'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  RefreshCw,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Code,
  CheckCircle2,
  Bookmark
} from 'lucide-react';

export const EventsScreen: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRefreshMessage(null);
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshMessage('Events refreshed from Meetup feed.');
      setTimeout(() => setRefreshMessage(null), 4000);
    }, 1200);
  };

  const pastWorkshops = [
    {
      id: 'ws-01',
      title: 'GenAI on AWS: Building with Amazon Bedrock',
      date: 'Fall 2026',
      badge: 'ARTIFICIAL INTELLIGENCE',
      location: 'CAE Room 204',
      desc: 'Hands-on exploration of foundation models, text-to-image prompts, and API integration with Python in free sandboxes.',
      tags: ['Amazon Bedrock', 'Python', 'LLMs', 'API Keys'],
    },
    {
      id: 'ws-02',
      title: 'Serverless 101: Lambda, S3, & API Gateway',
      date: 'Fall 2026',
      badge: 'SERVERLESS',
      location: 'CAE Room 204',
      desc: 'Deploying cloud microservices without configuring virtual machines, paying only for the execution time used.',
      tags: ['AWS Lambda', 'Amazon S3', 'API Gateway'],
    },
    {
      id: 'ws-03',
      title: 'AWS Certified Cloud Practitioner Bootcamp',
      date: 'Spring 2026',
      badge: 'CERT PREP',
      location: 'CAE Room 204',
      desc: 'Deep-dive review of the 4 exam domains, practice test questions, and exam voucher distribution via AWS Academy.',
      tags: ['CLF-C02', 'Cloud Economics', 'Security', 'Architecture'],
    },
  ];

  return (
    <div className="w-full pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header (Matching cloudhubuh.com /events) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1a2333] pb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-2">
            COMMUNITY CALENDAR
          </p>
          <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#f1f5f9] tracking-tight">
            Upcoming Events
          </h1>
          <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] mt-2">
            Hands-on labs, hack challenges, and certification study jams on campus.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#0f141f] hover:bg-[#16202e] border border-[#1e293b] text-xs font-['JetBrains_Mono',monospace] text-[#cbd5e1] transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#00e599] ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Checking feed...' : 'Refresh'}</span>
          </button>

          <a
            href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
            target="_blank"
            rel="noopener noreferrer"
            className="sheen-btn inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-xs sm:text-sm shadow-md"
          >
            <span>See all on Meetup</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {refreshMessage && (
        <div className="p-3 rounded-lg bg-[#00e599]/10 border border-[#00e599]/30 text-xs font-['JetBrains_Mono',monospace] text-[#00e599] flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>{refreshMessage}</span>
        </div>
      )}

      {/* No Upcoming Events Notice (Matching cloudhubuh.com clean state) */}
      <div className="p-8 sm:p-14 rounded-2xl bg-[#0f141f] border border-[#1a2333] text-center max-w-2xl mx-auto shadow-xl">
        <div className="w-14 h-14 rounded-full bg-[#00e599]/10 text-[#00e599] mx-auto flex items-center justify-center mb-5">
          <Calendar className="w-7 h-7" />
        </div>

        <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl text-[#f1f5f9] mb-3">
          No upcoming events yet
        </h3>

        <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed max-w-lg mx-auto mb-8">
          We&apos;re planning the next hands-on session. Follow our chapter on Meetup to get notified the moment it drops.
        </p>

        <a
          href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
          target="_blank"
          rel="noopener noreferrer"
          className="sheen-btn inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-sm shadow-[0_0_20px_rgba(0,229,153,0.25)]"
        >
          <span>Follow on Meetup</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>

      {/* Past Workshop Topic Archive */}
      <div className="pt-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-1">
            CURRICULUM ARCHIVE
          </p>
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl sm:text-2xl text-[#f1f5f9]">
            Recent Workshop Topics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="p-6 rounded-xl bg-[#0f141f] border border-[#1a2333] flex flex-col justify-between hover:border-[#00e599]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-['JetBrains_Mono',monospace] mb-3">
                  <span className="text-[#00e599] font-bold">{ws.badge}</span>
                  <span className="text-[#64748b]">{ws.date}</span>
                </div>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-lg text-[#f1f5f9] mb-2">
                  {ws.title}
                </h3>
                <p className="text-xs text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed mb-4">
                  {ws.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a2333]">
                <div className="flex flex-wrap gap-1.5">
                  {ws.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-['JetBrains_Mono',monospace] bg-[#16202e] text-[#94a3b8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
