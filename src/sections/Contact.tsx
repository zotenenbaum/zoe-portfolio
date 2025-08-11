import Section from '../../components/Section';

export default function Contact() {
  return (
    <Section id="contact" title="Contact" eyebrow="Say hi">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="mailto:zoe@example.com"
          className="rounded-xl border border-blue-100 px-4 py-2 hover:bg-blue-50/60 dark:border-blue-900 dark:hover:bg-blue-900/40"
        >
          Email
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          className="rounded-xl border border-blue-100 px-4 py-2 hover:bg-blue-50/60 dark:border-blue-900 dark:hover:bg-blue-900/40"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          className="rounded-xl border border-blue-100 px-4 py-2 hover:bg-blue-50/60 dark:border-blue-900 dark:hover:bg-blue-900/40"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
