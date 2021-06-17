const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const template = require('@babel/template').default;

const {lineToCamel} = require('../../js/common.js');

module.exports = function (source) {
  const rootPath = path.resolve(process.cwd(), './src/package/components');
  let dir = fs.readdirSync(rootPath);
  dir = dir.filter(item => {
    return fs.statSync(`${rootPath}/${item}`).isDirectory() && fs.readdirSync(`${rootPath}/${item}`).includes('index.vue');
  });
  const ast = parser.parse(source, {
    sourceType: 'module'
  });
  const visitor = {
    Program(path) {
      let str = '';
      dir.forEach(item => {
        str += `import ${lineToCamel(item)} from './components/${item}/index.vue'\n`;
      });
      str += `const components = [${dir.map(item1 => lineToCamel(item1)).join(',')}]\n`;
      str += `window.meSmartComponents = [${dir.map(item1 => `'${lineToCamel(item1)}'`).join(',')}]\n`;
      const temp = template(str);
      const tempAst = temp();
      path.node.body.unshift(...tempAst);
    }

  };
  traverse(ast, visitor);
  const newSource = generate(ast).code;
  return this.callback(null, newSource);
};