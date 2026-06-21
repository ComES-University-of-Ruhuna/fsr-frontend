import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Cpu, Gauge, Shield, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import AchievementCounters from '../components/AchievementCounters';
import SectionTitle from '../components/SectionTitle';

const PILLARS = [
  {
    icon: Cpu,
    title: 'Design',
    body: 'CAD-driven engineering across mechanical, electrical, and aero subsystems.',
  },
  {
    icon: Gauge,
    title: 'Build',
    body: 'In-house fabrication of chassis, suspension, and electronics packages.',
  },
  {
    icon: Shield,
    title: 'Innovate',
    body: 'Active EV development with custom battery and high-voltage safety architecture.',
  },
  {
    icon: Sparkles,
    title: 'Race',
    body: 'Roadmap targeting Formula Bharat 2028 and global Formula Student events.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <AchievementCounters />

      {/* About strip */}
      <section className="bg-charcoal-900 py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="About FSR"
              title={
                <>
                  Sri Lanka's first <span className="text-crimson-500">Formula Student</span> team from the South.
                </>
              }
              description="Formula Student Ruhuna is the official student motorsports programme of the Faculty of Engineering, University of Ruhuna — operating under Marvel Crew. We design, build, and race a Formula Student-style race car while training engineers for global competition."
            />
            <div className="mt-8 flex gap-3">
              <Link to="/about" className="btn-ghost text-xs">
                Read our story <ChevronRight size={14} />
              </Link>
              <Link to="/team" className="btn-ghost text-xs">
                Meet the team
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="card-hover p-6"
              >
                <p.icon size={22} className="text-gold-400" />
                <h3 className="mt-4 font-display text-xl text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase video block */}
      <section id="showcase" className="relative overflow-hidden bg-charcoal-950 py-24">
        <div className="absolute inset-0 -z-10 bg-ember-radial opacity-60" />
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="Project Showcase"
            title={
              <>
                Leona 2.0 — <span className="text-crimson-500">Live Reel</span>
              </>
            }
            description="A look at our debut IC build that celebrates 25 years of engineering excellence at the Faculty of Engineering, University of Ruhuna."
          />
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-gold-500/20 bg-charcoal-800 shadow-glow">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold-500/40 bg-charcoal-900/60 text-gold-400 shadow-glow">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-5 text-sm uppercase tracking-[0.3em] text-gold-400">
                    Leona 2.0 Project Showcase
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Drop a YouTube embed iframe here — or replace with /assets/leona.mp4
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-tech-grid opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors strip */}
      <section className="border-y border-white/5 bg-charcoal-900 py-14">
        <div className="container-page">
          <p className="text-center text-[11px] uppercase tracking-[0.32em] text-zinc-500">
            Backed by partners who believe in engineering excellence
          </p>
          <div className="mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-16 opacity-70">
              {[
                'University of Ruhuna',
                'Marvel Crew',
                'Become a Sponsor',
                'University of Ruhuna',
                'Marvel Crew',
                'Become a Sponsor',
              ].map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  className="font-display text-2xl tracking-[0.25em] text-zinc-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/sponsors" className="btn-gold text-xs">
              Become a Sponsor <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-charcoal-950 py-24">
        <div className="absolute inset-0 -z-10 bg-ember-radial opacity-70" />
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow"><span className="h-px w-8 bg-gold-500" /> Engineer the next car</p>
            <h2 className="mt-3 heading-display text-4xl text-white sm:text-5xl">
              Apply to Marvel Crew — <span className="text-gold-400">join FSR.</span>
            </h2>
            <p className="mt-4 max-w-xl text-zinc-300">
              Mechanical. Electrical. Simulation. Operations. We're scaling to seven specialized
              sub-teams — and we want builders, thinkers, racers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/join" className="btn-primary">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-ghost">
              Explore the cars
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
