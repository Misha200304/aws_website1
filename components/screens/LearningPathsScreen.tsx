'use client';

import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Gamepad2,
  Layers,
  FileText
} from 'lucide-react';

interface CertTrack {
  id: string;
  code: string;
  title: string;
  level: string;
  desc: string;
  badge: string;
  stages: {
    stageNum: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      meta: string;
      url: string;
    }[];
  }[];
}

export const LearningPathsScreen: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string>('clf-c02');

  const tracks: CertTrack[] = [
    {
      id: 'clf-c02',
      code: 'CLF-C02',
      title: 'AWS Certified Cloud Practitioner',
      level: 'Foundational',
      badge: 'RECOMMENDED FIRST',
      desc: 'The best entry point to AWS. Validates overall understanding of cloud concepts, security, architecture, pricing, and support.',
      stages: [
        {
          stageNum: '01',
          title: 'Get Oriented',
          subtitle: "Understand what the exam covers and how it's structured before you dive in.",
          items: [
            {
              name: 'AWS CCP Certification Page',
              meta: 'Official AWS overview · What the cert covers + exam basics',
              url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
            },
            {
              name: 'Official Exam Guide PDF (CLF-C02)',
              meta: 'Official PDF · Domains, scope, question formats, and scoring breakdown',
              url: 'https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf',
            },
          ],
        },
        {
          stageNum: '02',
          title: 'Learn the Fundamentals',
          subtitle: 'Official AWS training: a free 12-hour course and an engaging RPG game-based learning track.',
          items: [
            {
              name: 'AWS Cloud Practitioner Essentials',
              meta: 'Free · ~12 hrs · Official AWS video course on AWS Skill Builder',
              url: 'https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials/8D79F3AVR7',
            },
            {
              name: 'AWS Cloud Quest: Cloud Practitioner',
              meta: 'Free game · Solve 3D city challenges using real AWS infrastructure',
              url: 'https://aws.amazon.com/training/digital/aws-cloud-quest/',
            },
          ],
        },
        {
          stageNum: '03',
          title: 'Get Hands-On',
          subtitle: 'Create your AWS account and start building on real infrastructure. Console time beats theory.',
          items: [
            {
              name: 'AWS Free Tier: Create Your Account',
              meta: '12 months free · Launch EC2 instances, S3 buckets, and Lambda functions',
              url: 'https://aws.amazon.com/free/',
            },
            {
              name: 'AWS Builder Center Tutorials',
              meta: 'Step-by-step beginner blueprints and code repositories',
              url: 'https://builder.aws.com/',
            },
          ],
        },
        {
          stageNum: '04',
          title: 'Practice & Pass',
          subtitle: 'Structured prep plan, official practice exams, and faculty exam voucher resources.',
          items: [
            {
              name: 'Official AWS Practice Exam Questions',
              meta: 'Skill Builder 20-question practice set with detailed explanations',
              url: 'https://explore.skillbuilder.aws/',
            },
            {
              name: 'AWS Academy Student Exam Vouchers',
              meta: 'Access discounted exam vouchers through campus educator pipelines',
              url: 'https://aws.amazon.com/training/awsacademy/',
            },
          ],
        },
      ],
    },
    {
      id: 'aif-c01',
      code: 'AIF-C01',
      title: 'AWS Certified AI Practitioner',
      level: 'Foundational',
      badge: 'NEW · GENAI',
      desc: 'Validates foundational knowledge of artificial intelligence, machine learning concepts, and prompt engineering on Amazon Bedrock.',
      stages: [
        {
          stageNum: '01',
          title: 'Get Oriented',
          subtitle: 'Review the AI Practitioner exam scope and key foundation model concepts.',
          items: [
            {
              name: 'AWS AI Practitioner Certification Overview',
              meta: 'Official AWS details · Exam domains and AI governance standards',
              url: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
            },
            {
              name: 'Amazon Bedrock Documentation',
              meta: 'Core API concepts: Foundation models, embeddings, RAG, and safety guardrails',
              url: 'https://docs.aws.amazon.com/bedrock/',
            },
          ],
        },
        {
          stageNum: '02',
          title: 'Learn AI Fundamentals',
          subtitle: 'Free interactive courses covering machine learning pipelines and GenAI apps.',
          items: [
            {
              name: 'Generative AI Learning Plan on Skill Builder',
              meta: 'Free curriculum curated by AWS AI researchers',
              url: 'https://skillbuilder.aws/',
            },
            {
              name: 'Amazon Q Developer Primer',
              meta: 'Hands-on coding assistance and multi-agent AI development',
              url: 'https://aws.amazon.com/q/developer/',
            },
          ],
        },
        {
          stageNum: '03',
          title: 'Build Real AI Demos',
          subtitle: 'Work with LLMs, prompt engineering, and cloud vector databases.',
          items: [
            {
              name: 'Deploying Bedrock with Python Boto3',
              meta: 'Mercyhurst campus workshop sandbox guide and code samples',
              url: 'https://builder.aws.com/',
            },
          ],
        },
      ],
    },
    {
      id: 'saa-c03',
      code: 'SAA-C03',
      title: 'AWS Solutions Architect – Associate',
      level: 'Associate',
      badge: 'CAREER ACCELERATOR',
      desc: 'The gold standard technical certification. Demonstrates knowledge of how to architect cost-effective, high-performing, and resilient distributed systems.',
      stages: [
        {
          stageNum: '01',
          title: 'Architecture Overview',
          subtitle: 'Master the 6 Pillars of the AWS Well-Architected Framework.',
          items: [
            {
              name: 'AWS Well-Architected Framework Whitepaper',
              meta: 'Official Whitepaper · Operational excellence, security, reliability, performance, cost',
              url: 'https://aws.amazon.com/architecture/well-architected/',
            },
            {
              name: 'Solutions Architect Associate Exam Guide',
              meta: 'Official blueprint and domain weighting for SAA-C03',
              url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
            },
          ],
        },
        {
          stageNum: '02',
          title: 'Deep-Dive Services',
          subtitle: 'Multi-tier VPC networking, RDS Aurora clustering, and asynchronous SQS/SNS messaging.',
          items: [
            {
              name: 'AWS Skill Builder SAA Learning Plan',
              meta: 'Architectural case studies and exam-style scenario questions',
              url: 'https://skillbuilder.aws/',
            },
          ],
        },
      ],
    },
  ];

  const currentTrackData = tracks.find((t) => t.id === activeTrack) || tracks[0];

  return (
    <div className="w-full pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header (Matching cloudhubuh.com /learning-paths) */}
      <div className="border-b border-[#1a2333] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] font-['JetBrains_Mono',monospace] text-[#00e599] mb-2">
          OFFICIAL CURRICULUM
        </p>
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#f1f5f9] tracking-tight">
          Learning Paths
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] font-['Figtree',sans-serif] mt-2 max-w-2xl">
          Your step-by-step roadmap to AWS certification with free official curriculum, hands-on console practice, and exam vouchers.
        </p>

        {/* Track Switcher */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          {tracks.map((t) => {
            const isActive = t.id === activeTrack;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTrack(t.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-['Bricolage_Grotesque',sans-serif] font-bold transition-all duration-150 ${
                  isActive
                    ? 'bg-[#00e599] text-[#090d14] shadow-[0_0_20px_rgba(0,229,153,0.3)]'
                    : 'bg-[#0f141f] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1a2333] hover:border-[#2d3a4f]'
                }`}
              >
                <span>{t.code}</span>
                <span className="ml-1.5 opacity-80 font-normal hidden sm:inline">· {t.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Track Overview Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0f141f] border border-[#1a2333] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-['JetBrains_Mono',monospace] font-bold bg-[#00e599]/10 text-[#00e599] border border-[#00e599]/20">
              {currentTrackData.badge}
            </span>
            <span className="text-xs font-['JetBrains_Mono',monospace] text-[#94a3b8]">
              {currentTrackData.level} Level
            </span>
          </div>
          <h2 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-2xl sm:text-3xl text-[#f1f5f9]">
            {currentTrackData.title} ({currentTrackData.code})
          </h2>
          <p className="text-sm text-[#94a3b8] font-['Figtree',sans-serif] mt-2 max-w-2xl leading-relaxed">
            {currentTrackData.desc}
          </p>
        </div>

        <a
          href="https://aws.amazon.com/certification/"
          target="_blank"
          rel="noopener noreferrer"
          className="sheen-btn shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-sm shadow-md"
        >
          <span>Official Certification Portal</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>

      {/* Four Stages Breakdown */}
      <div className="space-y-8">
        {currentTrackData.stages.map((stage) => (
          <div
            key={stage.stageNum}
            className="p-6 sm:p-8 rounded-2xl bg-[#0f141f] border border-[#1a2333] space-y-6"
          >
            <div className="flex items-start gap-4">
              <span className="font-['JetBrains_Mono',monospace] text-base font-bold text-[#00e599] px-3 py-1 rounded bg-[#00e599]/10 border border-[#00e599]/20">
                STAGE {stage.stageNum}
              </span>
              <div>
                <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-xl sm:text-2xl text-[#f1f5f9]">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] font-['Figtree',sans-serif] mt-1">
                  {stage.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {stage.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#090d14] border border-[#1a2333] hover:border-[#00e599]/50 hover:bg-[#121824] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[#f1f5f9] group-hover:text-[#00e599] transition-colors font-['Bricolage_Grotesque',sans-serif] font-bold text-base mb-1.5">
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00e599]" />
                    </div>
                    <p className="text-xs text-[#94a3b8] font-['Figtree',sans-serif] leading-relaxed">
                      {item.meta}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
