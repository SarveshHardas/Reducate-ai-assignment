'use client';

import { Navbar, Footer } from '@/components';
import {
  HeroSection,
  PartnersSection,
  AboutSection,
  ProgramsSection,
  WhyChooseUsSection,
  PresidentDirectorGeneralSection,
  CampusExperienceSection,
  TestimonialsSection,
  LeadershipSection,
  CTASection,
} from '@/sections';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).tagName === 'A') {
        handleSmoothScroll(e as any);
      }
    });

    return () => {
      document.removeEventListener('click', handleSmoothScroll as any);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <PresidentDirectorGeneralSection />
        <CampusExperienceSection />
        <TestimonialsSection />
        <LeadershipSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
