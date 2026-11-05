'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, ScreenTab } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { AboutScreen } from '@/components/screens/AboutScreen';
import { EventsScreen } from '@/components/screens/EventsScreen';
import { LearningPathsScreen } from '@/components/screens/LearningPathsScreen';
import { ResourcesScreen } from '@/components/screens/ResourcesScreen';
import { NewsScreen } from '@/components/screens/NewsScreen';
import { TeamScreen } from '@/components/screens/TeamScreen';
import { ContactScreen } from '@/components/screens/ContactScreen';

export function AppContent() {
  const [currentTab, setCurrentTab] = useState<ScreenTab>('home');

  // Sync with window.location.hash on mount & hashchange
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace('#', '') as ScreenTab;
      const validTabs: ScreenTab[] = [
        'home',
        'about',
        'events',
        'learning-paths',
        'resources',
        'news',
        'team',
        'contact',
      ];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleSelectTab = (tab: ScreenTab) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d14] text-[#f1f5f9] selection:bg-[#00e599]/20 selection:text-[#00e599]">
      {/* Top Fixed Header Navigation */}
      <Navbar currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content-area">
        {currentTab === 'home' && <HomeScreen onSelectTab={handleSelectTab} />}
        {currentTab === 'about' && <AboutScreen onSelectTab={handleSelectTab} />}
        {currentTab === 'events' && <EventsScreen />}
        {currentTab === 'learning-paths' && <LearningPathsScreen />}
        {currentTab === 'resources' && <ResourcesScreen />}
        {currentTab === 'news' && <NewsScreen />}
        {currentTab === 'team' && <TeamScreen />}
        {currentTab === 'contact' && <ContactScreen />}
      </main>

      {/* Global Chapter Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
