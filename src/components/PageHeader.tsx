import { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 pt-36 pb-16">
      <div className="absolute inset-0 -z-10 bg-tech-grid opacity-80" />
      <div className="container-page">
        {eyebrow && <p className="eyebrow"><span className="h-px w-8 bg-gold-500" />{eyebrow}</p>}
        <h1 className="mt-3 heading-display text-5xl text-white sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
