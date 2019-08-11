const { resolve } = require('path');
const withManifest = require('next-manifest');

module.exports = withManifest({
  manifest: {
    name: 'Hello PWA',
    icons: {
      src: resolve(process.cwd(), './assets/icon.png'),
      cache: true
    }
  }
});
