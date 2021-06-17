const path = require('path');

class moduleLoaderPlugin {
  constructor() {}
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('moduleLoaderPlugin', (compilation, arg) => {
      compilation.hooks.normalModuleLoader.tap('moduleLoaderPlugin', (context, normalModule) => {
        if (normalModule.resource.replace(/\\/g, '/').indexOf('src/package/index.js') > -1) {
          normalModule.loaders.push({
            loader: path.resolve(__dirname, '../loader/meIndexLoader.js')
          });
        }
      });
    });
  }

}

module.exports = moduleLoaderPlugin;