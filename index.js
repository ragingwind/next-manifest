const pwaManifest = require('@pwa/manifest');

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const {
        isServer,
        dev,
        buildId,
        defaultLoaders,
        config: {
          distDir
        }
      } = options

      if (!defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const {webpack, manifest} = nextConfig;
      const { output, ...opts } = manifest;

      if (!isServer && !dev) {
        const m = pwaManifest.sync({
          background_color: '#FFFFFF',
          theme_color: '#FFFFFF',
          start_url: '/?utm_source=web_app_manifest',
          ...opts
        });

        pwaManifest.writeSync(output, m);
      }

      if (typeof webpack === 'function') {
        return webpack(config, options);
      }

      return config;
    }
  })
}

module.exports.Manifest = require('./manifest.js');
