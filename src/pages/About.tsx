import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About FSR"
        title={
          <>
            Engineering <span className="text-crimson-500">Defiance.</span>
          </>
        }
        subtitle="The story of Formula Student Ruhuna — an institutional movement to bring Sri Lanka into the global Formula Student arena, handled by Marvel Crew."
      />

      <section className="bg-charcoal-900 py-20">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title={<>Born at the Faculty of Engineering, <span className="text-gold-400">built for the world.</span></>}
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300">
              <p>
                Formula Student Ruhuna (FSR) was established in 2025 as the first Formula
                Student team from the University of Ruhuna. We operate under Marvel Crew —
                the engineering crew behind the team's design, fabrication, and
                competition campaigns.
              </p>
              <p>
                Our debut platform, Leona 2.0, is an internal combustion racing car celebrating
                25 years of engineering excellence at the Faculty of Engineering. The build
                serves as our entry point — the team is now transitioning to a full electric
                programme aimed at Formula Bharat 2028 and beyond.
              </p>
            </div>
          </div>
          <div className="card p-8">
            <h3 className="font-display text-2xl text-white">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              To represent Sri Lankan engineering on the global Formula Student stage and
              graduate engineers who can compete and contribute at the highest levels of
              motorsport and product development.
            </p>
            <div className="mt-6 divider-gold" />
            <h3 className="mt-6 font-display text-2xl text-white">Mission</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
              <li>Design and build an internationally competitive Formula Student race car.</li>
              <li>Train cross-disciplinary engineers across four operational divisions.</li>
              <li>Build partnerships that anchor Sri Lankan motorsport engineering.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-charcoal-950 py-24">
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="Progress Timeline"
            title={<>From <span className="text-crimson-500">2025</span> to <span className="text-gold-400">2028</span></>}
            description="Our roadmap — institutional launch, multi-division expansion, EV research, and the international debut."
          />
          <div className="mt-14">
            <Timeline />
          </div>
        </div>
      </section>
    </>
  );
}
