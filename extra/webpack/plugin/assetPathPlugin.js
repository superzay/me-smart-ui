class assetPathPlugin {
  constructor() { }
  apply(compiler) {
    if (process.env.run !== "build-package") return;
    compiler.hooks.thisCompilation.tap('assetPathPlugin', (compilation, arg) => {
      compilation.hooks.assetPath.tap('assetPathPlugin', (path, obj) => {
        // 注意，对于图片和字体图标文件（比如ttf等文件），执行到这里时，其输出名字中的-[hash]已经被替换为hash值了，因此这里无法清hash了，可在加载器中判断npm run 环境然后给filename赋不同格式值，不处理也无伤大雅
        return path.replace('-[hash]', ''); // npm run build-package环境下，清理所有输出资源名字中的hash部分
      });
    });
  }

}

module.exports = assetPathPlugin;