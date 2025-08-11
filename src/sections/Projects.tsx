import Section from '../../components/Section';
import RepoGrid from '../../components/RepoGrid';

export default async function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Fresh work">
      {/* server component fetches GitHub + curated content */}
      {/* If no env set or rate-limited, it still shows curated items */}
      <RepoGrid />
      <p className="mt-6 text-sm opacity-70">
        Some cards are placeholders for upcoming writeups. GitHub items update hourly.
      </p>
    </Section>
  );
}
