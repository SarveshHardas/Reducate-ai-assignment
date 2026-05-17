import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
    {children}
  </div>
);

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }, ref) => (
    <section className={clsx('py-16 md:py-24 lg:py-32', className)} ref={ref} {...props}>
      {children}
    </section>
  )
);

Section.displayName = 'Section';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={clsx('bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent', className)}>
    {children}
  </span>
);
