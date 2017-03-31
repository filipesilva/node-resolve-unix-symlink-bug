const resolve = require('path').resolve;
const symlinkSync = require('fs').symlinkSync;

symlinkSync(resolve('./node_modules'), resolve('./src/node_modules'), 'junction');