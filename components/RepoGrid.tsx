import { fetchPublicRepos } from '../lib/github';
import ProjectCard, { ProjectItem } from './ProjectCard';
import curated from '../content/projects.json'; // typed via assertion

export default async function RepoGrid() {
  // 1) Curated items first (your voice)
  const curatedItems = (curated as unknown as ProjectItem[]).map((p) => ({
    ...p,
    status: (p.status as any) ?? 'live',
  }));

  // 2) Latest GitHub repos next
  const repos = await fetchPublicRepos(9);

  const repoItems: ProjectItem[] = repos.map((r) => ({
    title: r.name,
    summary: r.description ?? 'No description provided.',
    tags: r.language ? [r.language] : [],
    status: 'live',
    url: r.homepage || r.html_url,
  }));

  // 3) Merge (curated first), and avoid duplicate names if you mirrored a repo
  const seen = new Set(curatedItems.map((i) => i.title.toLowerCase()));
  const merged = curatedItems.concat(repoItems.filter((i) => !seen.has(i.title.toLowerCase())));

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {merged.map((item, i) => (
        <ProjectCard key={`${item.title}-${i}`} item={item} />
      ))}
    </div>
  );
}
