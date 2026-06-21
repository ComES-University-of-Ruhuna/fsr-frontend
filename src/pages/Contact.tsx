import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { api } from '../lib/api';
import { SITE } from '../data/staticContent';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      const res = await api.post<{ message: string }>('/api/contact', form);
      setFeedback({ ok: true, msg: res.message });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setFeedback({ ok: false, msg: (err as Error).message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Get in <span className="text-gold-400">touch.</span>
          </>
        }
        subtitle="Sponsorship, recruitment, media, or general queries — route them through the form or contact us directly."
      />

      <section className="bg-charcoal-900 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <SectionTitle eyebrow="Reach Us" title={<>Direct <span className="text-crimson-500">channels.</span></>} />

            <div className="card space-y-5 p-7">
              <Item icon={<MapPin size={18} />} title="Address">
                {SITE.address}
              </Item>
              <Item icon={<Mail size={18} />} title="Email">
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-400">
                  {SITE.email}
                </a>
              </Item>
              <div className="pt-2">
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Socials</div>
                <div className="mt-3 flex gap-3">
                  <Social href={SITE.socials.instagram} icon={<Instagram size={16} />} label="Instagram" />
                  <Social href={SITE.socials.facebook} icon={<Facebook size={16} />} label="Facebook" />
                  <Social href={SITE.socials.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/5">
              <iframe
                title="University of Ruhuna — Faculty of Engineering"
                src="https://www.google.com/maps?q=Faculty+of+Engineering+University+of+Ruhuna+Hapugala+Galle&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
            <h3 className="font-display text-2xl text-white">Send a message</h3>
            <p className="mt-1 text-sm text-zinc-400">
              We typically respond within 3 working days.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  className="field"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
            </div>
            <div className="mt-5">
              <Field label="Subject">
                <input
                  className="field"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message" required>
                <textarea
                  rows={6}
                  className="field"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </Field>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full">
              {submitting ? 'Sending…' : (<>Send Message <Send size={14} /></>)}
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

function Item({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{title}</div>
        <div className="mt-1 text-sm text-zinc-200">{children}</div>
      </div>
    </div>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="rounded-full border border-white/10 p-2 transition hover:border-gold-500 hover:text-gold-400"
    >
      {icon}
    </a>
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
