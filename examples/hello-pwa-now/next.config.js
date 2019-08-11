const withManifest = require('next-manifest');

module.exports = withManifest({
  manifest: {
    output: './static/',
    name: 'Hello PWA',
    icons: [
      {
        src: '/static/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/static/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
});
