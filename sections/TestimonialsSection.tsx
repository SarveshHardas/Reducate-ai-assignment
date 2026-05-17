'use client';

import React, { useRef } from 'react';
import { Container, Section, GradientText } from '@/components';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, rating, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group"
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full hover:border-purple-200 hover:shadow-lg transition-all duration-300">
        <div className="flex gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-slate-700 leading-relaxed mb-8 text-lg">
          "{content}"
        </p>

        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'AI & ML Graduate 2023',
      content: 'The curriculum is incredibly comprehensive. I landed my dream job at a leading tech company right after graduation. The mentorship was invaluable.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Data Science Student',
      content: 'The hands-on projects and industry partnerships gave me practical experience that set me apart. Highly recommend JG University.',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      role: 'Cybersecurity Professional',
      content: 'Best decision of my life. The faculty is world-class and the facilities are top-notch. I grew exponentially as a professional.',
      rating: 5,
    },
    {
      name: 'Anjali Singh',
      role: 'UI/UX Designer',
      content: 'The design program bridged the gap between theory and practice. I built an impressive portfolio that landed me interviews at major studios.',
      rating: 5,
    },
  ];

  return (
    <Section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white" ref={containerRef}>
      <Container>
        <div className="testimonials-header text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">
            Student Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Hear From Our <GradientText>Successful Alumni</GradientText>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from students who transformed their careers at JG University
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              {...testimonial}
              index={idx}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
