import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, UserRound } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { api, TeamData } from '../lib/api';

export default function Team() {
  const [data, setData] = useState<TeamData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<TeamData>('/api/team')
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Team Registry"
        title={
          <>
            The <span className="text-crimson-500">crew</span> behind <span className="text-gold-400">FSR.</span>
          </>
        }
        subtitle="Faculty advisors, the Marvel Crew executive committee, and the division leads driving the build."
      />

      {error && (
        <div className="container-page py-10 text-sm text-crimson-400">
          Failed to load team registry: {error}
        </div>
      )}
      {!data && !error && (
        <div className="container-page py-24 text-center text-sm text-zinc-500">
          Loading registry…
        </div>
      )}

      {data && (
        <>
          {/* Advisors */}
          <section className="bg-charcoal-900 py-20">
            <div className="container-page">
              <SectionTitle eyebrow="Faculty" title={<>Academic Advisors & <span className="text-gold-400">Coordinators</span></>} />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data.advisors.map((m) => (
                  <MemberCard key={m.id} name={m.name} role={m.role} sub={m.affiliation} />
                ))}
              </div>
            </div>
          </section>

          {/* Executive */}
          <section className="border-t border-white/5 bg-charcoal-950 py-20">
            <div className="container-page">
              <SectionTitle eyebrow="Executive Committee" title={<>Marvel Crew — <span className="text-crimson-500">FSR Leadership</span></>} />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data.executive.map((m) => (
                  <MemberCard key={m.id} name={m.name} role={m.role} sub={m.division} accent />
                ))}
              </div>
            </div>
          </section>

          {/* Divisions */}
          <section className="bg-charcoal-900 py-20">
            <div className="container-page">
              <SectionTitle
                eyebrow="Operational Structure"
                title={<>4 Divisions · <span className="text-gold-400">7+ Sub-teams</span></>}
                description="Each division leads a critical engineering or operational pillar — together they form the FSR development pipeline."
              />
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {data.divisions.map((d, idx) => (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="card-hover relative overflow-hidden p-7"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 ${
                        d.color === 'crimson'
                          ? 'bg-gradient-to-r from-crimson-600 via-crimson-500 to-transparent'
                          : 'bg-gradient-to-r from-gold-500 via-gold-400 to-transparent'
                      }`}
                    />
                    <h3 className="font-display text-2xl text-white">{d.name}</h3>
                    <ul className="mt-5 space-y-3">
                      {d.subteams.map((s) => (
                        <li
                          key={s.name}
                          className="flex items-center justify-between rounded-lg border border-white/5 bg-charcoal-900/60 px-4 py-3"
                        >
                          <span className="text-sm text-zinc-200">{s.name}</span>
                          <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                            Lead · {s.lead}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials placeholder */}
          <section className="border-t border-white/5 bg-charcoal-950 py-20">
            <div className="container-page">
              <SectionTitle
                align="center"
                eyebrow="Alumni Spotlight"
                title={<>Industry placement <span className="text-gold-400">stories.</span></>}
                description="A dedicated space for graduating cohorts to share success stories from across the global motorsports and engineering industry."
              />
              <div className="mx-auto mt-10 grid max-w-4xl gap-5">
                {data.testimonials.map((t) => (
                  <div key={t.id} className="card p-8">
                    <Quote className="text-gold-400" />
                    <p className="mt-4 text-base italic leading-relaxed text-zinc-300">"{t.quote}"</p>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-crimson-600/20 text-crimson-400">
                        <UserRound size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{t.name}</div>
                        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

function MemberCard({
  name,
  role,
  sub,
  accent = false,
}: {
  name: string;
  role: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className="card-hover flex items-center gap-4 p-5">
      <div
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${
          accent ? 'bg-crimson-600/20 text-crimson-400' : 'bg-gold-500/15 text-gold-400'
        }`}
      >
        <UserRound />
      </div>
      <div className="min-w-0">
        <div className="truncate text-base font-semibold text-white">{name}</div>
        <div className="text-xs uppercase tracking-[0.22em] text-gold-400">{role}</div>
        {sub && <div className="mt-1 text-xs text-zinc-500">{sub}</div>}
      </div>
    </div>
  );
}
