const {resolve} = require('path');
const withManifest = require('../../index');

module.exports = withManifest({
  manifest: {
    icons: {
      src: resolve(process.cwd(), './assets/icon.png'),
      cache: true
    }
  }
})
