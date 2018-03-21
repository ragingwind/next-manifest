const {resolve} = require('path');
const withManifest = require('../../index');

module.exports = withManifest({
  icons: {
    src: resolve(process.cwd(), './assets/icon.png'),
    cache: true
  }
})
