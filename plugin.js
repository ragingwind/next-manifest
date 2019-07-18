const buildManifest = require('./buildManifest');

module.exports = class NextManifestPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    const errorhandler = err => {
      throw new Error(`Precached failed: ${err.toString()}`);
    };

    if (compiler.hooks) {
      compiler.hooks.done.tap(
        'CopyPlugin',
        async () => buildManifest(this.options),
          errorhandler
      );
    } else {
      compiler.plugin(
        'done',
        async () => buildManifest(this.options),
          errorhandler
      );
    }
  }
}
