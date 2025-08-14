import Section from '../../components/Section';

export default function Contact() {
  return (
    <Section id="contact" title="Contact" eyebrow="Feel Free To Reach Out!">
      <div style={{ display: 'flex', gap: '1.2rem'}}>
        <a
          href="mailto:ztenenbaum2016@icloud.com"
          className="rounded-xl border border-blue-100 px-4 py-2 hover:bg-blue-50/60 dark:border-blue-900 dark:hover:bg-blue-900/40"
        >
          Email 💌
        </a>
        <a
          href="https://github.com/zotenenbaum"
          target="_blank"
          className="rounded-xl border border-blue-100 px-4 py-2 hover:bg-blue-50/60 dark:border-blue-900 dark:hover:bg-blue-900/40"
        >
           GitHub ⌯⌲
        </a>
        <a
          href="https://www.linkedin.com/in/zoe-tenenbaum"
          target="_blank"
          className="rounded-xl border border-blue-100 px-4 py-2 hover:bg-blue-50/60 dark:border-blue-900 dark:hover:bg-blue-900/40"
        >
          LinkedIn 💬
        </a>
      </div>
    </Section>
  );
}
