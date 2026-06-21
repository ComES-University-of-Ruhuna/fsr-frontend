import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { api, NewsItem } from '../lib/api';

const CATEGORY_COLORS: Record<string, string> = {
  'Public Session': 'bg-gold-500/15 text-gold-400 border-gold-500/30',
  Milestone: 'bg-crimson-500/15 text-crimson-400 border-crimson-500/30',
  'Technical Phase': 'bg-white/10 text-white border-white/15',
};

export default function News() {
  const [items, setItems] = useState<NewsItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    api
      .get<NewsItem[]>('/api/news')
      .then(setItems)
      .catch((e) => setError(e.message));
  }, []);

  const categories = items
    ? ['All', ...Array.from(new Set(items.map((i) => i.category)))]
    : ['All'];
  const filtered =
    items && filter !== 'All' ? items.filter((i) => i.category === filter) : items;

  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title={
          <>
            Milestones, events, and <span className="text-gold-400">technical phases.</span>
          </>
        }
        subtitle="Stay up to date with FSR roll-out notifications, public sessions, and engineering announcements."
      />

      <section className="bg-charcoal-900 py-16">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
                  filter === c
                    ? 'border-gold-500 bg-gold-500 text-charcoal-950'
                    : 'border-white/10 text-zinc-300 hover:border-gold-500/40 hover:text-gold-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {error && <p className="mt-10 text-sm text-crimson-400">Failed to load news: {error}</p>}
          {!items && !error && (
            <p className="mt-10 text-sm text-zinc-500">Loading news…</p>
          )}

          {filtered && (
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {filtered.map((n, idx) => (
                <motion.article
                  key={n.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="card-hover flex flex-col p-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.22em] ${
                        CATEGORY_COLORS[n.category] ??
                        'bg-white/10 text-white border-white/15'
                      }`}
                    >
                      {n.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      <CalendarDays size={12} /> {new Date(n.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-white">{n.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{n.excerpt}</p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">{n.body}</p>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
