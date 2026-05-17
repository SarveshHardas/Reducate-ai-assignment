'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container, Section, GradientText } from '@/components';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LeaderProfile {
  name: string;
  title: string;
  bio: string;
  imagePath: string;
}

const leaders: LeaderProfile[] = [
  {
    name: 'M.P Chandran',
    title: 'Chairperson',
    bio: 'A postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry. He is also the chairman of ASIA Charitable Trust (ACT). ACT owns and successfully runs 3 schools, 17 colleges, and JG University.',
    imagePath: '/faculty/president',
  },
  {
    name: 'Dr. CA Achyut Dani',
    title: 'Director General',
    bio: 'More than 21 years of experience and expertise in academics and industry. Holds a doctorate in management and commerce and is a research guide. Fellow member of the Committee for Review of Education and Training (CRET) of ICAI. Senior mentor and faculty at multiple prestigious institutions. On the Governing Council of the Asian-African Chambers of Commerce & Industry. Senior Board Member of CIAC Global and Passion Vista Publications. Multiple awards including Bharat Jyoti Award (National), Gem of CA Profession Award (ICAI), and Brilliance in Education Award (CCS). Author of textbooks for Gujarat Higher Secondary Education Board.',
    imagePath: '/faculty/director-general',
  },
];

export const LeadershipWisdomSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wisdom-heading', {
        duration: 0.8,
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        ease: 'power3.out',
      });
      gsap.from('.leader-card', {
        duration: 0.8,
        opacity: 0,
        y: 40,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        ease: 'power3.out',
      });

      gsap.to('.leader-image', {
        y: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />

      <Container>
        <div className="space-y-4 mb-16 text-center">
          <h2 className="wisdom-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Words from Our <GradientText>Leadership</GradientText>
          </h2>
          <p className="wisdom-heading text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Visionary leaders guiding JG University towards excellence in education and innovation
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <div className="space-y-6">
                {/* Image Container */}
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 z-10" />
                  <div className="leader-image relative w-full h-full">
                    <Image
                      src={`${leader.imagePath}/1.jpg`}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-base md:text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      {leader.title}
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                        <Quote className="text-purple-600" size={24} />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed italic">
                      "{leader.bio}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-600" />
                      <p className="text-sm font-semibold text-slate-900">Guiding JG University towards excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block">
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-200/30 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Learn from the Best
              </h3>
              <p className="text-slate-700 max-w-xl mx-auto mb-6">
                Our leadership brings decades of industry experience and educational excellence to shape the future of our students.
              </p>
              <div className="flex gap-3 justify-center">
                <div className="flex -space-x-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    >
                      +
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">1000+ students guided</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
