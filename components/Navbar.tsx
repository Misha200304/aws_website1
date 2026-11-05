'use client';

import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export type ScreenTab =
  | 'home'
  | 'about'
  | 'events'
  | 'learning-paths'
  | 'resources'
  | 'news'
  | 'team'
  | 'contact';

interface NavbarProps {
  currentTab: ScreenTab;
  onSelectTab: (tab: ScreenTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: ScreenTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: ScreenTab; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'learning-paths', label: 'Learning Paths' },
    { id: 'resources', label: 'Resources' },
    { id: 'news', label: 'News' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d14]/90 backdrop-blur-md border-b border-[#1a2333] transition-all">
        <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Chapter Title */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group cursor-pointer"
            id="nav-brand-logo"
          >
            <div className="relative">
              <img
                alt="AWS Student Builder Group Program Icon"
                className="h-8 w-8 object-contain rounded transition-transform duration-200 group-hover:scale-105"
                src="/assets/aws-sbg-chip-logo.svg"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00e599] ring-2 ring-[#090d14]" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Bricolage_Grotesque',sans-serif] text-sm sm:text-base font-bold text-[#f1f5f9] tracking-tight group-hover:text-[#00e599] transition-colors">
                AWS Student Builder Group
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[10.5px] text-[#94a3b8] uppercase tracking-wider">
                Mercyhurst University
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (matching cloudhubuh.com) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav-links">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-[#00e599] bg-[#00e599]/10 font-semibold'
                      : 'text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#131b2a]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA: Join the Club button */}
          <div className="flex items-center gap-3">
            <a
              className="sheen-btn inline-flex items-center gap-2 px-4 py-2 rounded bg-[#00e599] hover:bg-[#00c77b] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-xs sm:text-sm transition-all duration-150 shadow-[0_0_20px_rgba(0,229,153,0.25)] hover:shadow-[0_0_25px_rgba(0,229,153,0.4)] active:scale-[0.98]"
              href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
              rel="noopener noreferrer"
              target="_blank"
              id="cta-join-meetup"
            >
              <span>Join the Club</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#131b2a] transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c111a] border-b border-[#1a2333] px-4 py-4 space-y-1 shadow-2xl">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium flex items-center justify-between ${
                currentTab === 'home'
                  ? 'bg-[#00e599]/10 text-[#00e599] font-semibold'
                  : 'text-[#94a3b8] hover:bg-[#131b2a]'
              }`}
            >
              <span>Home</span>
            </button>
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#00e599]/10 text-[#00e599] font-semibold'
                      : 'text-[#94a3b8] hover:bg-[#131b2a]'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#1a2333] mt-2">
              <a
                href="https://www.meetup.com/aws-sbg-at-mercyhurst-university/?eventOrigin=your_groups"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded bg-[#00e599] text-[#090d14] font-['Bricolage_Grotesque',sans-serif] font-bold text-sm shadow-md"
              >
                <span>Join on Meetup</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
