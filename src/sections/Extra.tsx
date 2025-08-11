import Section from '../../components/Section';
import { MotionDiv, fadeUp } from '../../components/motion';

export default function Extra() {
  return (
    <Section id="extra" title="Extra" eyebrow="A tiny vibe check">
      <div className="grid gap-6 md:grid-cols-3">
        <MotionDiv className="rounded-2xl border border-blue-100 p-5 dark:border-blue-900">
          <div className="text-sm opacity-70">Fun fact</div>
          <div className="mt-2">I can still throw a clean back-tuck.</div>
        </MotionDiv>
        <MotionDiv className="rounded-2xl border border-blue-100 p-5 dark:border-blue-900">
          <div className="text-sm opacity-70">Teaching</div>
          <div className="mt-2">
            Mentor for kids learning to code. Lightbulb moments everything.
          </div>
        </MotionDiv>
        <MotionDiv className="relative rounded-2xl border border-blue-100 p-5 dark:border-blue-900">
          <div className="text-sm opacity-70">Easter egg</div>
          <div className="mt-2">Somewhere on this page is a tiny gold secret…</div>
          {/* We’ll hook the real triggers in Phase 6 */}
        </MotionDiv>
      </div>
    </Section>
  );
}
