#!/usr/bin/env node
import https from 'https';
import { execSync } from 'child_process';
import fs from 'fs';

const REPO = 'Tejas7787/infrarisk-aimodel';
const BRANCH = 'main';

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (!TOKEN) {
  console.error('Set GITHUB_TOKEN or GH_TOKEN env var with a GitHub PAT (repo scope)');
  process.exit(1);
}

function api(method, path, body) {
  const data = body ? JSON.stringify(body) : null;
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${REPO}${path}`;
    const req = https.request(url, {
      method,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'User-Agent': 'vly-push',
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {})
      }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode >= 400) {
          try { reject(JSON.parse(d)); } catch(e) { reject(d); }
        } else resolve(JSON.parse(d));
      });
    });
    req.on('error', reject);
    if (data) req.end(data); else req.end();
  });
}

async function main() {
  console.log('Testing auth...');
  const me = await api('GET', '/user');
  console.log('Authenticated as:', me.login);

  const refs = await api('GET', `/git/refs/heads/${BRANCH}`);
  const baseSha = refs.object.sha;
  console.log('Remote branch:', BRANCH, 'at', baseSha.substring(0,10));

  const files = execSync('/usr/bin/git ls-tree -r --name-only HEAD', { encoding: 'utf8' })
    .trim().split('\n').filter(Boolean);

  console.log('Building tree from', files.length, 'files...');

  const treeItems = files.map(file => {
    const content = fs.readFileSync(file);
    const sha = execSync(`/usr/bin/git hash-object -w --stdin`, {
      input: content, encoding: 'utf8'
    }).trim();
    return { path: file, mode: '100644', type: 'blob', sha };
  });

  const tree = await api('POST', '/git/trees', { tree: treeItems });
  console.log('Tree SHA:', tree.sha.substring(0,10));

  const commit = await api('POST', '/git/commits', {
    message: 'Fix Vercel build: commit Convex generated types\n\nRemove src/convex/_generated from .gitignore and commit generated Convex type files.',
    tree: tree.sha,
    parents: [baseSha]
  });
  console.log('Commit SHA:', commit.sha.substring(0,10));

  await api('PATCH', `/git/refs/heads/${BRANCH}`, { sha: commit.sha });
  console.log('Push SUCCESS - branch updated');
}

main().catch(e => { console.error(e.message || e); process.exit(1); });
