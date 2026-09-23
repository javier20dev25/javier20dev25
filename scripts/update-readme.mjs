#!/usr/bin/env node
// Auto-update README sections (stats, own repos, external contributions) via GitHub REST API.
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const USER = process.env.PROFILE_USER || 'javier20dev25';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const README_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'README.md');

const EXCLUDE = new Set(['javier20dev25']);
const EXCLUDE_BY_NAME = new Set(['sentinel-cloud', 'sentinel']);

const h = { Accept: 'application/vnd.github+json', 'User-Agent': 'profile-updater', 'X-GitHub-Api-Version': '2022-11-28' };
if (TOKEN) h.Authorization = `Bearer ${TOKEN}`;

async function api(path) {
  const url = path.startsWith('http') ? path : `https://api.github.com${path}`;
  const res = await fetch(url, { headers: h });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.json();
}

const esc = (s = '') => String(s).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim();

function bar(fraction, width = 10) {
  const filled = Math.round(fraction * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

function repoRow(r) {
  const lang = r.language ? `\`${esc(r.language)}\`` : '—';
  const date = r.pushed_at ? r.pushed_at.slice(0, 10) : '';
  return `| [${esc(r.name)}](https://github.com/${USER}/${r.name}) | ${esc(r.description || '—')} | ${lang} | ${r.stargazers_count} | ${date} |`;
}

async function main() {
  const user = await api(`/users/${USER}`);
  const repos = await api(`/users/${USER}/repos?per_page=100&sort=updated`);

  const own = repos.filter((r) => !r.fork && !EXCLUDE.has(r.name) && !EXCLUDE_BY_NAME.has(r.name));
  const forks = repos.filter((r) => r.fork && !EXCLUDE_BY_NAME.has(r.name));

  const totalStars = repos.reduce((a, r) => a + r.stargazers_count, 0);
  const langs = {};
  for (const r of own) if (r.language) langs[r.language] = (langs[r.language] || 0) + 1;
  const langEntries = Object.entries(langs).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const langTotal = langEntries.reduce((a, [, n]) => a + n, 0);

  const prs = await api(`/search/issues?q=${encodeURIComponent(`author:${USER} type:pr`)}&per_page=50&sort=updated`);
  const issues = await api(`/search/issues?q=${encodeURIComponent(`author:${USER} type:issue`)}&per_page=50&sort=updated`);

  const contrib = new Map();
  for (const it of [...prs.items, ...issues.items]) {
    const repo = (it.repository_url || '').replace('https://api.github.com/repos/', '');
    if (!repo || repo.split('/')[0] === USER) continue;
    if (!contrib.has(repo)) contrib.set(repo, { repo, items: [] });
    const kind = it.pull_request ? `PR #${it.number}` : `issue #${it.number}`;
    contrib.get(repo).items.push({ kind, title: it.title, url: it.html_url, date: (it.updated_at || '').slice(0, 10) });
  }

  const stats = [
    '## 📊 Estadísticas y Métricas de Actividad',
    '',
    '<div align="center">',
    `  <img src="https://img.shields.io/badge/Repos_Públicos-${user.public_repos}-238636?style=flat-square&logo=github" alt="Repos" />`,
    `  <img src="https://img.shields.io/badge/PRs_en_Proyectos_Ajenos-${prs.total_count}-8957e5?style=flat-square&logo=git" alt="PRs" />`,
    `  <img src="https://img.shields.io/badge/Estrellas_Totales-${totalStars}-e3b341?style=flat-square&logo=star" alt="Stars" />`,
    `  <img src="https://img.shields.io/badge/Seguidores-${user.followers}-58a6ff?style=flat-square&logo=github" alt="Followers" />`,
    '</div>',
    '',
    '<div align="center">',
    `  <a href="https://github.com/${USER}">`,
    `    <img src="https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&theme=radical&bg_color=0d1117&title_color=e63946&icon_color=e63946&text_color=c9d1d9&border_color=30363d&include_all_commits=true&count_private=true" alt="GitHub Stats" width="48%" />`,
    `  </a>`,
    `  <a href="https://github.com/${USER}">`,
    `    <img src="https://streak-stats.demolab.com?user=${USER}&theme=radical&background=0d1117&ring=e63946&fire=e63946&currStreakNum=ffffff&sideNums=c9d1d9&sideLabels=8b949e&dates=8b949e&border=30363d" alt="GitHub Streak" width="48%" />`,
    `  </a>`,
    '</div>',
    '',
    '<div align="center">',
    `  <a href="https://github.com/${USER}">`,
    `    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&theme=radical&bg_color=0d1117&title_color=e63946&text_color=c9d1d9&border_color=30363d&langs_count=6" alt="Top Languages" width="60%" />`,
    `  </a>`,
    '</div>',
  ].join('\n');

  const proyectos = [
    '## Mis proyectos',
    '',
    '| Repo | Descripción | Lenguaje | Estrellas | Actualizado |',
    '|---|---|---|---|---|',
    ...own.sort((a, b) => (b.pushed_at || '').localeCompare(a.pushed_at || '')).map(repoRow),
  ].join('\n');

  const aportes = [
    '## Aportes a proyectos ajenos',
    '',
    'Forks propios y PRs/issues que he hecho en repositorios de terceros. Se actualiza automáticamente.',
    '',
    ...(forks.length
      ? [
          '**Forks propios:**',
          '',
          '| Repo | Descripción | Actualizado |',
          '|---|---|---|',
          ...forks.sort((a, b) => (b.pushed_at || '').localeCompare(a.pushed_at || '')).map((r) => `| [${esc(r.name)}](https://github.com/${USER}/${r.name}) | ${esc(r.description || '—')} | ${(r.pushed_at || '').slice(0, 10)} |`),
          '',
        ]
      : []),
    ...(contrib.size
      ? [
          '**PRs e issues en repos de terceros:**',
          '',
          ...[...contrib.entries()].map(([repo, c]) => {
            const top = c.items.slice(0, 4).map((i) => `- ${i.kind} [${esc(i.title)}](${i.url}) — ${i.date}`).join('\n');
            return `### [${esc(repo)}](https://github.com/${repo})\n\n${top}${c.items.length > 4 ? `\n- y ${c.items.length - 4} más.` : ''}`;
          }),
        ]
      : ['_(Aún no hay aportes visibles a proyectos ajenos.)_']),
  ].join('\n');

  let readme = '';
  try {
    readme = (await import('fs')).readFileSync(README_PATH, 'utf8');
  } catch {
    readme = '';
  }
  if (!readme) throw new Error(`${README_PATH} not found`);

  const apply = (marker, content) => {
    const re = new RegExp(`<!-- ${marker}:START -->[\\s\\S]*?<!-- ${marker}:END -->`, 'm');
    if (!re.test(readme)) throw new Error(`marker ${marker} not found`);
    readme = readme.replace(re, `<!-- ${marker}:START -->\n${content}\n<!-- ${marker}:END -->`);
  };

  apply('STATS', stats);
  apply('PROYECTOS', proyectos);
  apply('APORTES', aportes);

  (await import('fs')).writeFileSync(README_PATH, readme, 'utf8');
  console.log('README updated OK');
}

main().catch((e) => {
  console.error(`[update-readme] ${e.stack || e.message}`);
  process.exit(1);
});