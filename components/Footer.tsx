'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components';
import { Mail, Phone, MapPin, Users, X as TwitterIcon, Share2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    academic: [
      { label: 'Programs', href: '#' },
      { label: 'Admissions', href: '#' },
      { label: 'Faculty', href: '#' },
      { label: 'Research', href: '#' },
    ],
    student: [
      { label: 'Campus Life', href: '#' },
      { label: 'Student Services', href: '#' },
      { label: 'Scholarships', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    about: [
      { label: 'About Us', href: '#' },
      { label: 'News & Events', href: '#' },
      { label: 'Alumni', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  };

  const socials = [
    { icon: Users, href: '#', label: 'LinkedIn' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: Share2, href: '#', label: 'Facebook' },
    { icon: Heart, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo/logo.png"
                    alt="JG University"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-slate-900">JG University</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Excellence in education, innovation, and student success.
              </p>
            </div>

            {Object.entries(links).map(([key, items]) => (
              <div key={key}>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  {key === 'academic' ? 'Academic' : key === 'student' ? 'Students' : 'Company'}
                </h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-8 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Address</p>
                  <p className="text-sm text-slate-600">JG Campus, Tech Park, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+91 (0) 123-456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">admissions@jguniversity.edu</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-slate-600">
                © {currentYear} JG University. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <Icon size={18} className="text-slate-600 hover:text-purple-600" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
