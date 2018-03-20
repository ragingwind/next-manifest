module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, {
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
      }

      if (typeof restConfig.webpack === 'function') {
        return restConfig.webpack(config, options)
      }

      return config
    }
  })
}
