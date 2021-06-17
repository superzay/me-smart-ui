class assetPathPlugin {
  constructor() {}
  apply(compiler) {
    if (process.env.run !== "build-package") return;
    compiler.hooks.thisCompilation.tap('assetPathPlugin', (compilation, arg) => {
      compilation.hooks.assetPath.tap('assetPathPlugin', (path, obj) => {
        if (obj.chunk && obj.chunk.name === 'main') {
          return path.replace('[name]', 'index');
        }
      });
    });
  }

}

module.exports = assetPathPlugin;