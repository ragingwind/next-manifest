const {
  resolve
} = require('path');
const pwaManifest = require('@pwa/manifest');
const pwaManifestIcons = require('@pwa/manifest-icons');

module.exports = ({
  isServer,
  buildInDevMode,
  manifest
}) => {
  if (!isServer && buildInDevMode) {
    const m = pwaManifest.sync({
      "background_color": "#FFFFFF",
      "theme_color": "#FFFFFF",
      "start_url": "/?utm_source=web_app_manifest",
      ...manifest
    });

    if (manifest.icons && manifest.icons.src) {
      m.icons = pwaManifestIcons.sync({
        src: manifest.icons.src,
        cache: manifest.icons.cache || false,
        output: resolve(process.cwd(), './static/manifest/icons'),
        publicPath: '/static/manifest/icons/',
        sizes: manifest.icons.sizes || [192, 512]

      });
    }

    pwaManifest.writeSync('./static/manifest/', m);
  }
}
