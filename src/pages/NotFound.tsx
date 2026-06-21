import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-charcoal-950 px-6">
      <div className="text-center">
        <p className="font-display text-7xl text-crimson-500 sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl text-white">Off the track</h1>
        <p className="mt-3 max-w-md text-zinc-400">
          That page doesn't exist. Let's get you back to pit lane.
        </p>
        <Link to="/" className="btn-primary mt-8 text-xs">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
