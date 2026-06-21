import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { api } from '../lib/api';
import { RECRUITMENT_JOURNEY, SITE, WHY_JOIN } from '../data/staticContent';

const DIVISIONS = ['Mechanical', 'Electrical', 'Simulation', 'Operations', 'Undecided'];

export default function Join() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    indexNumber: '',
    academicYear: '',
    division: 'Undecided',
    subteam: '',
    skills: '',
    motivation: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);
  const [filter, setFilter] = useState<string>('All');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      const res = await api.post<{ message: string }>('/api/applications', form);
      setFeedback({ ok: true, msg: res.message });
      setForm({
        fullName: '',
        email: '',
        indexNumber: '',
        academicYear: '',
        division: 'Undecided',
        subteam: '',
        skills: '',
        motivation: '',
      });
    } catch (err) {
      setFeedback({ ok: false, msg: (err as Error).message });
    } finally {
      setSubmitting(false);
    }
  }

  const positions = [
    { division: 'Mechanical', role: 'Drivetrain Engineer' },
    { division: 'Mechanical', role: 'Composite Fabricator' },
    { division: 'Electrical', role: 'High Voltage Engineer' },
    { division: 'Electrical', role: 'Control Systems Engineer' },
    { division: 'Simulation', role: 'CFD Analyst' },
    { division: 'Simulation', role: 'Vehicle Dynamics Modeller' },
    { division: 'Operations', role: 'Marketing & Creative Designer' },
    { division: 'Operations', role: 'PR & Communications' },
  ];

  const visiblePositions =
    filter === 'All' ? positions : positions.filter((p) => p.division === filter);

  return (
    <>
      <PageHeader
        eyebrow="Join FSR"
        title={
          <>
            Apply to <span className="text-crimson-500">Marvel Crew.</span> <br />
            Engineer the next car.
          </>
        }
        subtitle="A high-converting recruitment funnel for engineering students. Pick a division, learn the journey, and apply."
      />

      {/* Why join */}
      <section className="bg-charcoal-900 py-20">
        <div className="container-page">
          <SectionTitle eyebrow="Why join" title={<>What you'll <span className="text-gold-400">actually do.</span></>} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_JOIN.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-hover p-6"
              >
                <h3 className="font-display text-lg text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Journey */}
      <section className="border-t border-white/5 bg-charcoal-950 py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Recruitment Journey"
            title={<>From <span className="text-crimson-500">application</span> to <span className="text-gold-400">build floor.</span></>}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RECRUITMENT_JOURNEY.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-hover relative p-7"
              >
                <span className="absolute right-5 top-5 font-display text-3xl text-crimson-600/50">
                  {s.step}
                </span>
                <h3 className="font-display text-xl text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-charcoal-900 py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Open Positions"
            title={<>Roles we're <span className="text-gold-400">actively recruiting.</span></>}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {['All', ...DIVISIONS.filter((d) => d !== 'Undecided')].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
                  filter === f
                    ? 'border-gold-500 bg-gold-500 text-charcoal-950'
                    : 'border-white/10 text-zinc-300 hover:border-gold-500/40 hover:text-gold-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePositions.map((p) => (
              <div key={p.role} className="card-hover flex items-center justify-between p-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-gold-400">
                    {p.division}
                  </div>
                  <div className="mt-1 text-base font-semibold text-white">{p.role}</div>
                </div>
                <a href="#apply" className="text-zinc-400 hover:text-gold-400">
                  <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="border-t border-white/5 bg-charcoal-950 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle
              eyebrow="Application"
              title={<>Apply <span className="text-crimson-500">Now.</span></>}
              description="Submit below — or use the dedicated recruitment portal."
            />
            <a
              href={SITE.recruitmentPortalUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-gold mt-6 text-xs"
            >
              Open Recruitment Portal <ExternalLink size={14} />
            </a>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="card p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" required>
                <input
                  className="field"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  className="field"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Field>
              <Field label="Index number">
                <input
                  className="field"
                  value={form.indexNumber}
                  onChange={(e) => setForm({ ...form, indexNumber: e.target.value })}
                />
              </Field>
              <Field label="Academic year">
                <input
                  className="field"
                  placeholder="e.g. E/22"
                  value={form.academicYear}
                  onChange={(e) => setForm({ ...form, academicYear: e.target.value })}
                />
              </Field>
              <Field label="Preferred division">
                <select
                  className="field"
                  value={form.division}
                  onChange={(e) => setForm({ ...form, division: e.target.value })}
                >
                  {DIVISIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred sub-team">
                <input
                  className="field"
                  placeholder="e.g. Drivetrain, HV, CFD…"
                  value={form.subteam}
                  onChange={(e) => setForm({ ...form, subteam: e.target.value })}
                />
              </Field>
            </div>
            <div className="mt-5 grid gap-5">
              <Field label="Relevant skills & tooling">
                <textarea
                  rows={3}
                  className="field"
                  placeholder="SolidWorks, ANSYS, Altium, PCB, Python, ROS, marketing, finance…"
                  value={form.skills}
                  onChange={(e) => setForm({ ...form, skills: e.target.value })}
                />
              </Field>
              <Field label="Why FSR?" required>
                <textarea
                  rows={4}
                  className="field"
                  required
                  placeholder="What you'd contribute and what you want to learn."
                  value={form.motivation}
                  onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                />
              </Field>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full">
              {submitting ? 'Submitting…' : (<>Submit Application <Send size={14} /></>)}
            </button>

            {feedback && (
              <p
                className={`mt-4 text-sm ${
                  feedback.ok ? 'text-gold-400' : 'text-crimson-400'
                }`}
              >
                {feedback.msg}
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required && <span className="ml-1 text-crimson-400">*</span>}
      </span>
      {children}
    </label>
  );
}
