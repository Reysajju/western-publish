const { execSync } = require('child_process');
const path = require('path');

try {
  // Run TypeScript check
  console.log('Running TypeScript check...');
  execSync('node node_modules/typescript/bin/tsc --noEmit', {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit'
  });
  
  // Run Vite build
  console.log('\nRunning Vite build...');
  execSync('node node_modules/vite/bin/vite.js build', {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit'
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}