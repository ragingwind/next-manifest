const {resolve} = require('path');
const pwaManifest = require('@pwa/manifest');
const pwaManifestIcons = require('@pwa/manifest-icons');

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    async webpack(config, {
      isServer,
      dev,
      buildId,
      defaultLoaders,
      config: {
        distDir
      }
    }) {
      if (!defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      if (!isServer && !dev) {
        const {webpack, ...restConfig} = nextConfig;
        const manifest = await pwaManifest(restConfig);

        if (restConfig.icons && restConfig.icons.src) {
          manifest.icons = [{
            src: './static/manifest/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }, {
            src: './static/manifest/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }];

          manifest.icons = await pwaManifestIcons({
            src: restConfig.icons.src,
            cache: restConfig.icons.cache || false,
            output: resolve(process.cwd(), `./static/manifest/icons`),
            publicPath: '/static/manifest/icons/',
            sizes: [192, 512]
          });
        }

        await pwaManifest.write('./static/manifest/', manifest);
      }

      if (typeof webpack === 'function') {
        return webpack(config, options);
      }

      return config;
    }
  })
}
