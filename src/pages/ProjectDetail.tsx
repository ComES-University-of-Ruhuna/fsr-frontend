import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { api, Project } from '../lib/api';

const SPEC_LABELS: Array<{ key: keyof Project['specs']; label: string }> = [
  { key: 'chassis', label: 'Chassis' },
  { key: 'powertrain', label: 'Powertrain' },
  { key: 'suspension', label: 'Suspension' },
  { key: 'battery', label: 'Battery / Electrical' },
  { key: 'aerodynamics', label: 'Aerodynamics' },
];

export default function ProjectDetail() {
  const { slug = '' } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setProject(null);
    setError(null);
    api
      .get<Project>(`/api/projects/${slug}`)
      .then(setProject)
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error) {
    return (
      <>
        <PageHeader title="Project not found" subtitle={error} />
        <div className="container-page py-20">
          <Link to="/projects" className="btn-ghost text-xs">
            <ArrowLeft size={14} /> Back to projects
          </Link>
        </div>
      </>
    );
  }

  if (!project) {
    return (
      <div className="container-page py-40 text-center text-sm text-zinc-500">
        Loading project…
      </div>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={`${project.year} · ${project.status}`}
        title={
          <>
            {project.name} <span className="text-gold-400">/</span>{' '}
            <span className="text-crimson-500">{project.tagline}</span>
          </>
        }
      />

      <section className="bg-charcoal-900 py-16">
        <div className="container-page">
          <Link to="/projects" className="btn-ghost text-xs">
            <ArrowLeft size={14} /> All projects
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-charcoal-900 pb-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow"><span className="h-px w-8 bg-gold-500" /> Overview</p>
            <h2 className="mt-3 heading-display text-4xl text-white">{project.name}</h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-300">{project.overview}</p>

            <div className="mt-10">
              <p className="eyebrow"><span className="h-px w-8 bg-gold-500" /> Design Highlights</p>
              <ul className="mt-4 space-y-3">
                {project.designHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-lg border border-white/5 bg-charcoal-800/60 p-4">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-400" />
                    <span className="text-sm leading-relaxed text-zinc-200">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card p-7">
            <p className="eyebrow"><span className="h-px w-8 bg-gold-500" /> Tech Specs</p>
            <h3 className="mt-3 font-display text-2xl text-white">Detailed Specifications</h3>
            <dl className="mt-6 space-y-4">
              {SPEC_LABELS.map(({ key, label }) => (
                <div
                  key={key}
                  className="grid gap-2 border-b border-white/5 pb-4 last:border-0 last:pb-0 sm:grid-cols-[140px_1fr]"
                >
                  <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</dt>
                  <dd className="text-sm text-zinc-200">{project.specs[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Media gallery placeholder */}
      <section className="border-t border-white/5 bg-charcoal-950 py-20">
        <div className="container-page">
          <p className="eyebrow"><span className="h-px w-8 bg-gold-500" /> Vehicle Media Gallery</p>
          <h2 className="mt-3 heading-display text-3xl text-white">Visuals & CAD highlights</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl border border-white/5 bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-950"
              >
                <div className="grid h-full place-items-center text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  Media slot {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-charcoal-900 py-20">
        <div className="container-page">
          <p className="eyebrow"><span className="h-px w-8 bg-gold-500" /> Development Timeline</p>
          <h2 className="mt-3 heading-display text-3xl text-white">Build milestones</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {project.timeline.map((t, idx) => (
              <motion.div
                key={`${t.year}-${idx}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="card-hover p-6"
              >
                <div className="font-display text-3xl text-crimson-500">{t.year}</div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{t.milestone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
