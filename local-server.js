const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const root = __dirname;
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

function send(res, status, body, type) {
  res.writeHead(status, {
    'Content-Type': type || 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function safePath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const relative = normalized.replace(/^[/\\]/, '');
  const candidate = path.join(root, relative);
  return candidate.indexOf(root + path.sep) === 0 || candidate === root
    ? candidate
    : path.join(root, 'index.html');
}

function resolveFile(pathname) {
  const requested = safePath(pathname);

  try {
    const stats = fs.statSync(requested);
    if (stats.isFile()) return requested;
    if (stats.isDirectory()) {
      const indexFile = path.join(requested, 'index.html');
      if (fs.existsSync(indexFile)) return indexFile;
    }
  } catch (error) {
    // History-mode Docsify routes fall through to index.html.
  }

  return path.join(root, 'index.html');
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    send(res, 405, 'Method not allowed');
    return;
  }

  const parsed = url.parse(req.url || '/');
  const file = resolveFile(parsed.pathname || '/');
  const type = contentTypes[path.extname(file)] || 'application/octet-stream';

  try {
    const body = req.method === 'HEAD' ? '' : fs.readFileSync(file);
    send(res, 200, body, type);
  } catch (error) {
    send(res, 500, 'Unable to read local docs file');
  }
});

server.listen(port, host, () => {
  console.log(`Exchequer docs are available at http://${host}:${port}/`);
});
