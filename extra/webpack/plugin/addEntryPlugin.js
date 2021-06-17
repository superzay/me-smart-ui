const EntryDependency = require("webpack/lib/dependencies/EntryDependency");
const fs = require('fs');
const path = require('path');

const { lineToCamel, camelToLine } = require('../../js/common.js');

class addEntryPlugin {
  constructor() {}
  apply(compiler) {
    if (process.env.run !== "build-package") return;
    compiler.hooks.make.tap('addEntryPlugin', compilation => {
      const rootPath = path.resolve(process.cwd(), './src/package/components');
      let dir = fs.readdirSync(rootPath);
      dir = dir.filter(item => {
        return fs.statSync(`${rootPath}/${item}`).isDirectory() && fs.readdirSync(`${rootPath}/${item}`).includes('index.vue');
      });
      dir.forEach(item => {
        const context = compilation.compiler.context;
        const dep = new EntryDependency(`./src/package/components/${item}/index.js`);
        const name = {
          name: lineToCamel(item),
          filename: '[name].js'
        };
        compilation.addEntry(context, dep, name, error => {
          console.log(error);
        });
      });
    });
  }

}

module.exports = addEntryPlugin;