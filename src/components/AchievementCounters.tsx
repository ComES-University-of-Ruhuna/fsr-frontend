import { motion } from 'framer-motion';
import Counter from './Counter';
import { ACHIEVEMENT_COUNTERS } from '../data/staticContent';

export default function AchievementCounters() {
  return (
    <section className="relative bg-charcoal-900 py-20">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {ACHIEVEMENT_COUNTERS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card-hover relative overflow-hidden p-5 text-center"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
              <div className="font-display text-4xl text-gold-400 sm:text-5xl">
                <Counter to={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
