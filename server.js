const http = require('http');
const path = require('path');
const fs = require('fs');

const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || '0.0.0.0';

// 1. Check if Next.js standalone build is available
const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServerPath)) {
  process.env.PORT = String(port);
  process.env.HOSTNAME = hostname;
  require(standaloneServerPath);
} else {
  // 2. Fallback to standard Next.js production server
  const next = require('next');
  const app = next({ dev: false, hostname, port, dir: __dirname });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = http.createServer((req, res) => {
      handle(req, res);
    });

    server.listen(port, hostname, (err) => {
      if (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
      }
      console.log(`> Server listening on http://${hostname}:${port}`);
    });

    server.on('error', (err) => {
      console.error('Server error:', err);
      process.exit(1);
    });
  }).catch((err) => {
    console.error('Error during app.prepare():', err);
    process.exit(1);
  });
}
