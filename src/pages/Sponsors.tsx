import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Handshake, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { api, SponsorsData } from '../lib/api';

const TIERS = ['Platinum', 'Gold', 'Silver', 'Bronze', 'Custom'];

export default function Sponsors() {
  const [data, setData] = useState<SponsorsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    budgetTier: 'Custom',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  useEffect(() => {
    api
      .get<SponsorsData>('/api/sponsors')
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      const res = await api.post<{ message: string }>('/api/sponsors/inquiry', form);
      setFeedback({ ok: true, msg: res.message });
      setForm({
        company: '',
        contactName: '',
        email: '',
        phone: '',
        budgetTier: 'Custom',
        message: '',
      });
    } catch (err) {
      setFeedback({ ok: false, msg: (err as Error).message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Sponsorship"
        title={
          <>
            Partner with the next <span className="text-crimson-500">Sri Lankan</span> Formula Student team.
          </>
        }
        subtitle="Sponsoring FSR places your brand on the chassis, in the workshop, on the track, and in front of a global engineering audience."
      />

      {/* CTA + PDF download */}
      <section className="border-b border-white/5 bg-charcoal-950 py-16">
        <div className="container-page grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-white">
              The <span className="text-gold-400">Sponsorship Package</span>
            </h2>
            <p className="mt-3 max-w-xl text-zinc-300">
              Get the full tier-by-tier benefits PDF — placement assets, media exposure, recruitment
              access, and brand activations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href={data?.packagePdfUrl ?? '#'} className="btn-gold" download>
              <Download size={16} /> Download Package PDF
            </a>
            <a href="#inquiry" className="btn-primary">
              <Handshake size={16} /> Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* Tiered sponsor grid */}
      <section className="bg-charcoal-900 py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Current Partners"
            title={<>Tiered <span className="text-gold-400">recognition.</span></>}
            description="Every tier earns dedicated visibility on the car, in events, and across digital channels."
          />
          {error && <p className="mt-6 text-sm text-crimson-400">Failed to load sponsors: {error}</p>}
          <div className="mt-10 space-y-8">
            {(data?.tiers ?? []).map((tier) => (
              <div key={tier.id}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl text-white">{tier.name}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {tier.sponsors.length === 0 ? (
                    <div className="card grid h-28 place-items-center border-dashed text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Slot available · be featured
                    </div>
                  ) : (
                    tier.sponsors.map((s) => (
                      <a
                        key={s.name}
                        href={s.url ?? '#'}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="card-hover grid h-28 place-items-center text-sm font-semibold text-white"
                      >
                        {s.name}
                      </a>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="border-t border-white/5 bg-charcoal-950 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Sponsor Inquiry"
              title={<>Talk to <span className="text-crimson-500">Public Relations.</span></>}
              description="Inquiries route directly to the FSR PR team. We respond within 5 working days."
            />
            <div className="mt-8 space-y-4 text-sm text-zinc-400">
              <p>· Brand placement on the FSR race car</p>
              <p>· Coverage across social and event media</p>
              <p>· Recruitment-pipeline visibility for your company</p>
              <p>· Custom partnerships for technology and R&D</p>
            </div>
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
              <Field label="Company" required>
                <input
                  className="field"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </Field>
              <Field label="Contact name" required>
                <input
                  className="field"
                  required
                  value={form.contactName}
                  onChange={(e) => setForm({ ...form, contactName: e.target.value })}
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
              <Field label="Phone">
                <input
                  className="field"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </Field>
              <Field label="Budget tier">
                <select
                  className="field"
                  value={form.budgetTier}
                  onChange={(e) => setForm({ ...form, budgetTier: e.target.value })}
                >
                  {TIERS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message">
                <textarea
                  rows={5}
                  className="field"
                  placeholder="Tell us how you'd like to partner with FSR."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </Field>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full">
              {submitting ? 'Sending…' : (<>Send Inquiry <Send size={14} /></>)}
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
