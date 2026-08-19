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

/** True when a value looks like one of our own normalised repo records. */
function isNormalisedRepo(value) {
  return Boolean(value) && typeof value === 'object' && typeof value.name === 'string';
}

/** True when a cached value is an array of normalised repo records we can trust. */
function isValidRepoCache(value) {
  return Array.isArray(value) && value.every(isNormalisedRepo);
}

/** Fetch the profile's repositories. Throws when the API is unreachable. */
export async function fetchRepos() {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (isValidRepoCache(parsed)) return parsed;
      // Cached value doesn't match the shape we expect: discard it and fall
      // through to a live fetch instead of trusting whatever is in there.
      try { sessionStorage.removeItem(CACHE_KEY); } catch { /* no session storage */ }
    }
  } catch { /* no session storage, or corrupt JSON, carry on */ }

  const response = await fetch(ENDPOINT, { headers: { Accept: 'application/vnd.github+json' } });
  if (!response.ok) throw new Error(`GitHub responded ${response.status}`);

  const repos = (await response.json()).map(normalise);
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(repos)); } catch { /* quota */ }
  return repos;
}

/** name -> star count, for the constellation. */
export function starsByName(repos) {
  const map = new Map();
  if (!Array.isArray(repos)) return map;
  repos.forEach((repo) => { if (repo) map.set(repo.name, repo.stars); });
  return map;
}
