const NextManifestPlugin = require('./plugin');

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const {
        isServer,
        dev,
        buildId,
        defaultLoaders,
      } = options

      if (!defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const {
        webpack,
        manifest
      } = nextConfig;

      config.plugins.push(
        new NextManifestPlugin({
          isServer,
          runInDevMode: manifest.runInDevMode || !dev,
          manifest,
          outputDirector: config.output.path,
        })
      );

      if (typeof webpack === 'function') {
        return webpack(config, options);
      }

      return config;
    }
  })
}
