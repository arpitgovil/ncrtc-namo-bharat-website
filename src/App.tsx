import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RouteMapSection } from './components/RouteMapSection';
import { ImplementationStatus } from './components/ImplementationStatus';
import { VisionSection } from './components/VisionSection';
import { ProjectSection } from './components/ProjectSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { DarkModeProvider, useDarkMode } from './components/DarkModeContext';

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header />
      <main>
        <HeroSection />
        <RouteMapSection />
        <ImplementationStatus />
        <VisionSection />
        <ProjectSection />
        <FacilitiesSection />
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}