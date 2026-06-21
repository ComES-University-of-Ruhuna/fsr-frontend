import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const isCenter = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <p className="eyebrow"><span className="h-px w-8 bg-gold-500" />{eyebrow}</p>}
      <h2 className="mt-3 heading-display text-4xl text-white sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-zinc-400">{description}</p>
      )}
    </motion.div>
  );
}
