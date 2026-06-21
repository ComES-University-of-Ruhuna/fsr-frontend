import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '../data/staticContent';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-950 text-zinc-300">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-zinc-400">
            Formula Student Ruhuna — the 1st Formula Student team from the
            University of Ruhuna, operating under Marvel Crew.
          </p>
          <p className="mt-4 font-display text-lg tracking-[0.22em] text-gold-400">
            ENGINEERING DEFIANCE.
          </p>
          <a
            href={SITE.comesUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Visit ${SITE.websiteBy} — comesuor.lk`}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-3 py-1.5 transition hover:border-gold-500 hover:bg-gold-500/10"
          >
            <span className="text-[9px] uppercase tracking-[0.28em] text-zinc-400">
              Website powered by
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400">
              ComES
            </span>
          </a>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
            Explore
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About FSR</Link></li>
            <li><Link to="/team" className="hover:text-white">Team Structure</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects & Vehicles</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/news" className="hover:text-white">News & Updates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
            Get Involved
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link to="/sponsors" className="hover:text-white">Become a Sponsor</Link></li>
            <li><Link to="/join" className="hover:text-white">Join FSR</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li>
              <a
                href={SITE.recruitmentPortalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white"
              >
                Recruitment Portal ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-2 transition hover:border-gold-500 hover:text-gold-400"
            >
              <Instagram size={16} />
            </a>
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-2 transition hover:border-gold-500 hover:text-gold-400"
            >
              <Facebook size={16} />
            </a>
            <a
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2 transition hover:border-gold-500 hover:text-gold-400"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Formula Student Ruhuna — Marvel Crew. All rights reserved.</p>
          <p className="flex items-center gap-2 uppercase tracking-[0.22em]">
            <span className="text-[10px] text-zinc-500">Website powered by</span>
            <a
              href={SITE.comesUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-gold-400 underline-offset-4 transition hover:text-gold-300 hover:underline"
            >
              {SITE.websiteBy}
            </a>
          </p>
          <p className="tracking-[0.25em] uppercase">Design. Build. Innovate. Race.</p>
        </div>
      </div>
    </footer>
  );
}
