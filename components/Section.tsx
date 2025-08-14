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
    <section id={id} className="section">
      <div className="container">
        <div className="section__head">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2 className="h2">
            {title} <span className="underline-gold" />
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
