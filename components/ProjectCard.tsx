'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ProjectItem } from './ProjectCard.types'; // or keep inline

export default function ProjectCard({ item }: { item: ProjectItem }) {
  const isComing = item.status === 'coming-soon';
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.2 }}
      className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-blue-900 dark:bg-[#0f1a2b]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold leading-tight">{item.title}</h3>
        <span className="bg-gold h-1 w-14 rounded-full" />
      </div>
      <p className="mt-2 text-sm opacity-80">{item.summary}</p>

      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-70">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-blue-100 px-2 py-0.5 dark:border-blue-900"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 text-sm">
        {isComing ? (
          <span className="text-blue-400/70">Coming soon</span>
        ) : (
          <Link
            href={item.url}
            target="_blank"
            className="decoration-gold/70 underline underline-offset-4 hover:opacity-90"
          >
            View
          </Link>
        )}
      </div>

      {/* subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_0_2px_rgba(212,175,55,0.08),0_12px_30px_rgba(28,46,74,0.12)] transition duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
