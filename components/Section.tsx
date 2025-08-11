import GoldUnderline from './GoldUnderline';
export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        {eyebrow && (
          <div className="text-xs uppercase tracking-widest text-blue-300">{eyebrow}</div>
        )}
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          {title}
          <GoldUnderline />
        </h2>
      </div>
      {children}
    </section>
  );
}
