'use client';

import React from 'react';
import { ScreenTab } from './Navbar';
import { ArrowUpRight, Github, Linkedin, Globe, Mail } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: ScreenTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full bg-[#070b10] border-t border-[#1a2333] pt-16 pb-12 text-[#94a3b8] font-['Figtree',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Chapter Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aws-sbg-chip-logo.svg"
                alt="AWS Student Builder Group Icon"
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="font-['Bricolage_Grotesque',sans-serif] font-bold text-base text-[#f1f5f9] block">
                  AWS Student Builder Group
                </span>
                <span className="font-['JetBrains_Mono',monospace] text-xs text-[#00e599]">
                  Mercyhurst University Chapter
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-sm">
              An official campus builder node helping Mercyhurst University students master cloud architecture, artificial intelligence, and earn industry-recognized AWS certifications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599] text-[#94a3b8] hover:text-[#00e599] flex items-center justify-center transition-colors"
                title="Chapter Meetup"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/mykhailo-polishchuk2508"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599] text-[#94a3b8] hover:text-[#00e599] flex items-center justify-center transition-colors"
                title="Lead LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://mykhailopolishchuk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599] text-[#94a3b8] hover:text-[#00e599] flex items-center justify-center transition-colors"
                title="Personal Website"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href="mailto:polishukmisha895@gmail.com"
                className="w-9 h-9 rounded-lg bg-[#0f141f] border border-[#1a2333] hover:border-[#00e599] text-[#94a3b8] hover:text-[#00e599] flex items-center justify-center transition-colors"
                title="Email Leadership"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm uppercase tracking-wider text-[#f1f5f9]">
              Chapter Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-[#00e599] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('events')}
                  className="hover:text-[#00e599] transition-colors"
                >
                  Events & Labs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('learning-paths')}
                  className="hover:text-[#00e599] transition-colors"
                >
                  Learning Paths
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('resources')}
                  className="hover:text-[#00e599] transition-colors"
                >
                  Resources & Free Tier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('news')}
                  className="hover:text-[#00e599] transition-colors"
                >
                  Cloud News
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('team')}
                  className="hover:text-[#00e599] transition-colors"
                >
                  The Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-[#00e599] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Official AWS External Resources */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm uppercase tracking-wider text-[#f1f5f9]">
              Official AWS Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://skillbuilder.aws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
                >
                  <span>AWS Skill Builder</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://aws.amazon.com/free/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
                >
                  <span>AWS Free Tier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://aws.amazon.com/certification/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
                >
                  <span>AWS Certifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://builder.aws.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
                >
                  <span>AWS Builder Center</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00e599] inline-flex items-center gap-1 transition-colors font-semibold text-[#00e599]"
                >
                  <span>Meetup: aws-sbg-at-mercyhurst</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#1a2333] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['JetBrains_Mono',monospace] text-[#64748b]">
          <p>
            © {new Date().getFullYear()} AWS Student Builder Group at Mercyhurst University.
          </p>
          <p className="max-w-md text-center sm:text-right">
            Independent student-led community recognized by the AWS Student Builder Groups program.
          </p>
        </div>
      </div>
    </footer>
  );
};
