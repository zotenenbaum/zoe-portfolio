'use client';
import Link from 'next/link';

export default function ProjectCard({
  title,
  summary,
  tags = [],
  status = 'live',
  url = '#',
}: {
  title: string;
  summary: string;
  tags?: string[];
  status?: 'live' | 'coming-soon';
  url?: string;
}) {
  const isComing = status === 'coming-soon';
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span className="underline-gold" />
      </div>
      <p style={{ opacity: 0.8 }}>{summary}</p>
      {tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: '.5rem',
            flexWrap: 'wrap',
            opacity: 0.7,
            fontSize: '.85rem',
          }}
        >
          {tags.map((t) => (
            <span key={t} className="btn">
              {t}
            </span>
          ))}
        </div>
      )}
      <div style={{ marginTop: '.75rem' }}>
        {isComing ? (
          <span style={{ opacity: 0.7 }}>Coming soon</span>
        ) : (
          <Link href={url} className="btn">
            Link coming soon
          </Link>
        )}
      </div>
    </div>
  );
}
