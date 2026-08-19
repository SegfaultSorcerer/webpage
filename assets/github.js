/** GitHub access. Returns normalised data, renders nothing. */

const ENDPOINT = 'https://api.github.com/users/SegfaultSorcerer/repos?sort=updated&per_page=30';
const CACHE_KEY = 'gh_repos_v2';

function normalise(raw) {
  return {
    name: raw.name,
    description: raw.description || '',
    language: raw.language,
    stars: raw.stargazers_count || 0,
    url: raw.html_url,
    license: raw.license ? raw.license.spdx_id : null,
    updatedAt: raw.updated_at,
    fork: Boolean(raw.fork),
  };
}

/** Fetch the profile's repositories. Throws when the API is unreachable. */
export async function fetchRepos() {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch { /* no session storage, carry on */ }

  const response = await fetch(ENDPOINT, { headers: { Accept: 'application/vnd.github+json' } });
  if (!response.ok) throw new Error(`GitHub responded ${response.status}`);

  const repos = (await response.json()).map(normalise);
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(repos)); } catch { /* quota */ }
  return repos;
}

/** name -> star count, for the constellation. */
export function starsByName(repos) {
  const map = new Map();
  (repos || []).forEach((repo) => map.set(repo.name, repo.stars));
  return map;
}
