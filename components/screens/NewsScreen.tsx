'use client';

import React, { useState } from 'react';
import {
  Newspaper,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Tag,
  Clock
} from 'lucide-react';

export const NewsScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const newsItems = [
    {
      id: 'news-01',
      title: 'Amazon Bedrock Expands Multi-Modal Foundation Model Capabilities',
      date: 'October 2026',
      category: 'genai',
      categoryLabel: 'GENERATIVE AI',
      source: 'AWS What\'s New',
      summary: 'Developers can now seamlessly integrate frontier image and speech generation models with zero server provisioning using unified Bedrock SDK endpoints.',
      url: 'https://aws.amazon.com/new/',
    },
    {
      id: 'news-02',
      title: 'AWS Certified AI Practitioner (AIF-C01) Exam Now Generally Available',
      date: 'Fall 2026',
      category: 'cert',
      categoryLabel: 'CERTIFICATIONS',
      source: 'AWS Training & Cert',
      summary: 'The new foundational credential validates broad knowledge of machine learning concepts, AI ethics, security, and prompt engineering on AWS.',
      url: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
    },
    {
      id: 'news-03',
      title: 'AWS Student Builder Groups Milestone Badges Launched Worldwide',
      date: 'Fall 2026',
      category: 'community',
      categoryLabel: 'STUDENT COMMUNITY',
      source: 'AWS Education',
      summary: 'Student chapters globally now earn verified digital Credly badges for organizing labs, publishing cloud tutorials, and preparing peer cohorts for exams.',
      url: 'https://builder.aws.com/',
    },
    {
      id: 'news-04',
      title: 'Amazon Q Developer Introduces Automated Security Vulnerability Remediation',
      date: 'Late 2026',
      category: 'dev',
      categoryLabel: 'DEVELOPER TOOLS',
      source: 'AWS News Blog',
      summary: 'Amazon Q Developer now scans repositories and proposes automated inline code pull requests to patch Common Vulnerabilities and Exposures (CVEs).',
      url: 'https://aws.amazon.com/blogs/aws/',
    },
    {
      id: 'news-05',
      title: 'AWS Free Tier Expands Always-Free Limits for Serverless Lambda Invocations',
      date: 'Late 2026',
      category: 'cloud',
      categoryLabel: 'INFRASTRUCTURE',
      source: 'AWS Cloud News',
      summary: 'Students and early-stage builders benefit from extended always-free compute tiers across Amazon DynamoDB, AWS Lambda, and CloudWatch metrics.',
      url: 'https://aws.amazon.com/free/',
    },
  ];

  const filteredNews =
    selectedCategory === 'all'
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header (Matching cloudhubuh.com /news) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1a2333] pb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-2">
            CURATED FEED
          </p>
          <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#f1f5f9] tracking-tight">
            Cloud News
          </h1>
          <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] mt-2">
            The latest AWS announcements, updates, and cloud industry news hand-picked for campus builders.
          </p>
        </div>

        <a
          href="https://aws.amazon.com/new/"
          target="_blank"
          rel="noopener noreferrer"
          className="sheen-btn inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-xs sm:text-sm shadow-md"
        >
          <span>Open AWS What&apos;s New</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'all', label: 'All News' },
          { id: 'genai', label: 'Generative AI' },
          { id: 'cert', label: 'Certifications' },
          { id: 'community', label: 'Student Community' },
          { id: 'dev', label: 'Developer Tools' },
          { id: 'cloud', label: 'Free Tier & Cloud' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-['JetBrains_Mono',monospace] transition-colors ${
              selectedCategory === cat.id
                ? 'bg-[#00e599] text-[#090d14] font-bold shadow-sm'
                : 'bg-[#0f141f] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1a2333]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* News Feed Cards */}
      <div className="space-y-4">
        {filteredNews.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 sm:p-7 rounded-2xl bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599]/40 hover:bg-[#121824] transition-all group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-['JetBrains_Mono',monospace] mb-2.5">
              <span className="text-[#00e599] font-bold tracking-wider">
                {item.categoryLabel}
              </span>
              <div className="flex items-center gap-3 text-[#64748b]">
                <span>{item.source}</span>
                <span>•</span>
                <span>{item.date}</span>
              </div>
            </div>

            <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl sm:text-2xl text-[#f1f5f9] group-hover:text-[#00e599] transition-colors mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed max-w-3xl">
              {item.summary}
            </p>

            <div className="pt-4 mt-4 border-t border-[#1a2333] flex items-center gap-1.5 text-xs text-[#00e599] font-['Bricolage_Grotesque',sans-serif] font-semibold">
              <span>Read announcement on AWS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
