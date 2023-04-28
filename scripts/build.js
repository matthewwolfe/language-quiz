const touch = require('touch');

async function createNoJekyll() {
  return touch('docs/.nojekyll');
}

async function run() {
  await createNoJekyll();
}

run();
