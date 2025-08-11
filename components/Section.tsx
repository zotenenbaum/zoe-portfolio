import { ReactNode } from 'react';

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container-page py-16">
      <div className="mb-8">
        {eyebrow && (
          <div className="mb-2 text-xs uppercase tracking-widest text-navy/70 dark:text-pearl/60">
            {eyebrow}
          </div>
        )}
        <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
          {title}
          <span className="ml-3 inline-block h-1 w-20 rounded-full bg-gold/90 align-middle" />
        </h2>
      </div>
      {children}
    </section>
  );
}
