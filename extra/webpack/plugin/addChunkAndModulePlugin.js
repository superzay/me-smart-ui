const EntryDependency = require("webpack/lib/dependencies/EntryDependency");

class addChunkAndModulePlugin {
  constructor() {}

  apply(compiler) {
    compiler.hooks.compilation.tap('addChunkAndModulePlugin', (compilation, {
      normalModuleFactory
    }) => {
      if (compilation.name) return;
      const dependency = new EntryDependency(`./src/js/1.js`);// demo
      const data = {
        factory: normalModuleFactory,
        dependencies: [dependency],
        originModule: null,
        contextInfo: {
          issuer: "",
          issuerLayer: null,
          compiler: compilation.compiler.name
        },
        context: compilation.compiler.context
      };
      compilation.handleModuleCreation(data, (error, newModule) => {
        if (newModule) {
          compilation.myNewModule = newModule;
        }
      });
      compilation.hooks.afterOptimizeTree.tap('addChunkAndModulePlugin', function (chunks, modules, next) {
        if (compilation.name || !compilation.myNewModule) return;
        let chunk = compilation.addChunk('nihao');
        chunk.addModule(compilation.myNewModule);
      });
    });
  }

}

module.exports = addChunkAndModulePlugin;