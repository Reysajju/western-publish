const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Starting development server...');
  execSync('node node_modules/vite/bin/vite.js', {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit'
  });
} catch (error) {
  console.error('Development server failed:', error.message);
  process.exit(1);
}