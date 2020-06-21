const { execSync } = require('child_process');

console.log('\nStarted build');
execSync('rm -rf ./dist');
execSync('mkdir ./dist');
execSync('node-sass ./src/index.scss -o ./dist');