'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button, Container, Section, GradientText } from '@/components';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/herosection/1.png',
    '/herosection/2.png',
    '/herosection/3.png',
    '/herosection/4.png',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from('.hero-text-line', {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: 'power3.out',
      });

      tl.from(
        '.hero-subtext',
        {
          duration: 0.8,
          opacity: 0,
          y: 20,
          ease: 'power3.out',
        },
        0.3
      );

      tl.from(
        '.hero-buttons',
        {
          duration: 0.8,
          opacity: 0,
          y: 20,
          ease: 'power3.out',
        },
        0.5
      );

      gsap.to('.floating-card', {
        duration: 3,
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      });

      gsap.to('#hero-carousel-image', {
        duration: 1.2,
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <Section
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-purple-200 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-amber-200 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-4" ref={textRef}>
              <div className="overflow-hidden">
                <h1 className="hero-text-line text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
                  Welcome to
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1 className="hero-text-line text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
                  <GradientText>JG University</GradientText>
                </h1>
              </div>
            </div>

            <p className="hero-subtext text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Experience premium education with cutting-edge programs in AI,
              Data Science, Cybersecurity, and more. Join thousands of
              successful alumni.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base">
                Explore Programs
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base"
              >
                Request Info
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div>
                <p className="text-sm text-slate-500 mb-1">Students</p>
                <p className="text-3xl font-bold text-slate-900">15,000+</p>
              </div>

              <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  Placement Rate
                </p>
                <p className="text-3xl font-bold text-slate-900">95%</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-screen w-full">
            <div
              id="hero-carousel-image"
              className="relative w-full h-full overflow-hidden rounded-[2rem] opacity-0 scale-95"
            >
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentImageIndex
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Campus life ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              ))}

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-xl transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="text-slate-900" size={24} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-xl transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="text-slate-900" size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-10'
                        : 'bg-white/50 hover:bg-white/80 w-2'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="text-slate-400" size={24} />
          </div>
        </div>
      </Container>
    </Section>
  );
};