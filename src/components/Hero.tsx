import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { SITE } from '../data/staticContent';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal-950 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 -z-10 bg-tech-grid opacity-90" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-charcoal-900" />

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-400"
            >
              <span className="inline-block h-1.5 w-1.5 animate-pulse-slow rounded-full bg-gold-400" />
              1st Formula Student Team · University of Ruhuna
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 heading-display text-5xl text-white sm:text-7xl lg:text-[5.5rem]"
            >
              Formula
              <br />
              <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-crimson-500 bg-clip-text text-transparent">
                Student
              </span>{' '}
              <span className="text-crimson-500">Ruhuna</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              <span className="font-display tracking-[0.2em] text-gold-400">
                ENGINEERING DEFIANCE.
              </span>{' '}
              Design. Build. Innovate. Race. The official portfolio of {SITE.shortName},
              operating under Marvel Crew — racing toward Formula Bharat 2028.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/join" className="btn-primary">
                Join the Team <ArrowRight size={16} />
              </Link>
              <Link to="/sponsors" className="btn-gold">
                Become a Sponsor
              </Link>
              <a
                href="#showcase"
                className="btn-ghost"
              >
                <Play size={14} /> Watch Showcase
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-crimson-600/40 via-transparent to-gold-500/30 blur-2xl" />
            <div className="card overflow-hidden p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
                <span>Spec Snapshot</span>
                <span className="text-gold-400">Leona 2.0</span>
              </div>
              <div className="mt-6 aspect-[16/10] rounded-xl bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-950 ring-1 ring-white/5">
                <CarSilhouette />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: 'Status', v: 'Built' },
                  { k: 'Class', v: 'IC' },
                  { k: 'Year', v: '2025' },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-lg border border-white/5 bg-charcoal-900/60 px-2 py-3"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {s.k}
                    </div>
                    <div className="mt-1 font-display text-lg text-gold-400">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CarSilhouette() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <defs>
        <linearGradient id="bodyGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#A30B0B" />
          <stop offset="100%" stopColor="#6B0000" />
        </linearGradient>
        <linearGradient id="rim" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E6C158" />
          <stop offset="100%" stopColor="#7E6310" />
        </linearGradient>
      </defs>
      <path
        d="M30 200 L90 150 L200 130 L260 90 L380 90 L440 130 L530 150 L570 200 L520 220 L490 220 A40 40 0 0 0 410 220 L240 220 A40 40 0 0 0 160 220 L80 220 Z"
        fill="url(#bodyGrad)"
        opacity="0.95"
      />
      <path
        d="M260 100 L380 100 L420 130 L240 130 Z"
        fill="#0F0F11"
        opacity="0.7"
      />
      <circle cx="200" cy="225" r="32" fill="#0F0F11" stroke="url(#rim)" strokeWidth="3" />
      <circle cx="200" cy="225" r="10" fill="url(#rim)" />
      <circle cx="450" cy="225" r="32" fill="#0F0F11" stroke="url(#rim)" strokeWidth="3" />
      <circle cx="450" cy="225" r="10" fill="url(#rim)" />
      <rect x="30" y="200" width="540" height="2" fill="#C9A227" opacity="0.5" />
    </svg>
  );
}
