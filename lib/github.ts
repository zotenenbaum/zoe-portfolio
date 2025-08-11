export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  homepage: string | null;
  fork: boolean;
};

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

export async function fetchPublicRepos(limit = 9): Promise<Repo[]> {
  if (!username) return [];
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;

  const headers: Record<string, string> = { 'User-Agent': 'zoe-portfolio' };
  if (token) headers.Authorization = `Bearer ${token}`;

  // Revalidate once per hour to keep it fresh without spamming the API
  const res = await fetch(url, { headers, next: { revalidate: 3600 } });
  if (!res.ok) {
    // Return empty on error; UI will handle gracefully
    return [];
  }
  const all: Repo[] = await res.json();

  // Filter out forks & ultra-empty toy repos; sort by pushed_at
  const curated = all
    .filter((r) => !r.fork)
    .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
    .slice(0, limit);

  return curated;
}
