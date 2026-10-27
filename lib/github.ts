export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number | null;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  updated_at: string;
};

const fallbackRepo: GitHubRepo = {
  id: 0,
  name: "pawcare",
  full_name: "shobhitguptacs/pawcare",
  description:
    "Full-stack community application for animal rescue coordination, adoption listings, and lost-and-found notices.",
  html_url: "https://github.com/shobhitguptacs/pawcare",
  homepage: "https://pawcare-v9rzfscq.manus.space",
  stargazers_count: null,
  language: "JavaScript",
  topics: ["react", "express", "mongodb", "leaflet"],
  fork: false,
  archived: false,
  updated_at: "2026-10-27T00:00:00Z",
};

export async function getPublicRepositories(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/shobhitguptacs/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "Shobhit-Portfolio-Site",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
    const repositories = (await response.json()) as GitHubRepo[];
    const owned = repositories
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => {
        if (a.name.toLowerCase() === "pawcare") return -1;
        if (b.name.toLowerCase() === "pawcare") return 1;
        return (b.stargazers_count ?? -1) - (a.stargazers_count ?? -1);
      });

    if (!owned.some((repo) => repo.name.toLowerCase() === "pawcare")) {
      owned.unshift(fallbackRepo);
    }

    return owned.length ? owned : [fallbackRepo];
  } catch {
    return [fallbackRepo];
  }
}
