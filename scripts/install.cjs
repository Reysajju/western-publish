const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const lockFile = path.join(workspaceRoot, 'package-lock.json');

try {
  if (fs.existsSync(lockFile)) {
    fs.unlinkSync(lockFile);
  }
  
  console.log('Installing dependencies...');
  execSync('node ../node-v24.7.0-win-x64/node_modules/npm/bin/npm-cli.js install --no-audit --no-fund --no-package-lock', {
    cwd: workspaceRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      npm_config_cache: path.join(workspaceRoot, '.npm-cache')
    }
  });
  
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Installation failed:', error.message);
  process.exit(1);
}