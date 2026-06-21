import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { api, Project } from '../lib/api';

export default function Projects() {
  const [items, setItems] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Project[]>('/api/projects')
      .then(setItems)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Projects & Vehicles Hub"
        title={
          <>
            The <span className="text-crimson-500">cars</span> of <span className="text-gold-400">Marvel Crew.</span>
          </>
        }
        subtitle="Deep-dive specification pages for every vehicle and concept built under FSR's engineering umbrella."
      />
      <section className="bg-charcoal-900 py-20">
        <div className="container-page">
          {error && <p className="text-sm text-crimson-400">Failed to load projects: {error}</p>}
          {!items && !error && <p className="text-sm text-zinc-500">Loading projects…</p>}
          {items && (
            <div className="grid gap-8 lg:grid-cols-3">
              {items.map((p, idx) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="card-hover group relative flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
                    <div className="absolute inset-0 bg-tech-grid opacity-60" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="font-display text-5xl tracking-wider text-white/10 sm:text-6xl">
                        {p.name.toUpperCase()}
                      </div>
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-charcoal-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold-400">
                      {p.status}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {p.year}
                    </div>
                    <h3 className="mt-2 font-display text-2xl text-white">{p.name}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{p.tagline}</p>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {p.overview}
                    </p>
                    <Link
                      to={`/projects/${p.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 transition group-hover:text-gold-300"
                    >
                      View specifications <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
