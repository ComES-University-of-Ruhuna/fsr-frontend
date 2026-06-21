import { motion } from 'framer-motion';
import { TIMELINE } from '../data/staticContent';

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-crimson-600 via-gold-500 to-crimson-600 lg:left-1/2 lg:-translate-x-1/2" />
      <ol className="space-y-12">
        {TIMELINE.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.li
              key={item.title + idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="relative pl-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0"
            >
              <span
                className={`absolute left-4 top-2 -translate-x-1/2 rounded-full p-1.5 ring-4 ring-charcoal-900 lg:left-1/2 ${
                  item.tone === 'crimson' ? 'bg-crimson-500' : 'bg-gold-500'
                }`}
              />

              <div className={`lg:${isLeft ? 'pr-12 text-right' : 'col-start-2 pl-12'}`}>
                <div
                  className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${
                    item.tone === 'crimson' ? 'text-crimson-400' : 'text-gold-400'
                  }`}
                >
                  {item.year}
                </div>
                <h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
