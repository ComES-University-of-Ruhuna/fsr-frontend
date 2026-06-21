import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { api, GalleryAlbum } from '../lib/api';

export default function Gallery() {
  const [albums, setAlbums] = useState<GalleryAlbum[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<GalleryAlbum[]>('/api/gallery')
      .then(setAlbums)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Media Archive"
        title={
          <>
            Albums of <span className="text-crimson-500">Marvel Crew</span> in <span className="text-gold-400">action.</span>
          </>
        }
        subtitle="A structured archive of FSR's debut, build process, workshop testing, and team events."
      />

      <section className="bg-charcoal-900 py-20">
        <div className="container-page">
          {error && <p className="text-sm text-crimson-400">Failed to load gallery: {error}</p>}
          {!albums && !error && (
            <p className="text-sm text-zinc-500">Loading albums…</p>
          )}
          {albums && (
            <div className="grid gap-8 lg:grid-cols-2">
              {albums.map((album, idx) => (
                <motion.article
                  key={album.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="card-hover overflow-hidden"
                >
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-950">
                    <div className="absolute inset-0 bg-tech-grid opacity-50" />
                    <div className="absolute inset-0 grid place-items-center">
                      <ImageIcon className="text-gold-400/40" size={48} />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-white">{album.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{album.description}</p>
                    <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-500">
                      <span>{album.assets.length} assets</span>
                      <span className="text-gold-400">Coming soon</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
