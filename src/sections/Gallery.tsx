'use client';

import Section from '../../components/Section'; // adjust if you don't use @ alias
import { motion } from 'framer-motion';

function Frame({ label }: { label: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="border-gold/50 group relative overflow-hidden rounded-xl border"
    >
      <div className="aspect-[4/3] bg-blue-50/60 dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute inset-0 scale-[1.02] opacity-0 shadow-[inset_0_0_0_2px_rgba(212,175,55,0.25)] transition duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="bg-navy/80 text-pearl m-2 inline-block rounded-md px-2 py-1 text-xs">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <Section id="gallery" title="Gallery" eyebrow="Places I’ve loved">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Frame label="Paris" />
        <Frame label="Ha Long Bay" />
        <Frame label="Dolomites" />
        <Frame label="Kyoto" />
        <Frame label="Istanbul" />
        <Frame label="Maui" />
      </div>
      <p className="mt-6 text-sm opacity-70">
        Real photos + alt text arrive in Phase 7 with optimized images.
      </p>
    </Section>
  );
}
