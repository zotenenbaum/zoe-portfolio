import Section from '../../components/Section';
import { MotionDiv, fadeUp } from '../../components/motion';

export default function About() {
  return (
    <Section id="about" title="About" eyebrow="Who I am">
      <div className="grid gap-8 md:grid-cols-2">
        <MotionDiv className="space-y-4">
          <p>
            I build crisp APIs and interfaces that feel obvious in the best way. This site is
            intentionally minimalist—micro-animations, gold accents, and focus on the work.
          </p>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            <li>⚙️ Django / React / TS</li>
            <li>🧠 NLP + data vibes</li>
            <li>📦 Postgres / REST</li>
            <li>🎨 Design systems</li>
          </ul>
        </MotionDiv>
        <MotionDiv className="rounded-2xl border border-blue-100 p-6 dark:border-blue-900">
          {/* portrait placeholder box */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-blue-50 text-blue-400 dark:bg-blue-900/30">
            portrait
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
}
