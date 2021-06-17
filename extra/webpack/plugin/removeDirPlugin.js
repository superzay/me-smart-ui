const fs = require('fs');
const path = require('path');

class removeDirPlugin {
  constructor(urls) {
    this.urls = urls || ['./dist'];
  }
  apply(compiler) {
    compiler.hooks.run.tap('removeDirPlugin', () => {
      this.urls.forEach(url => {
        fs.rmdir(url, {
          recursive: true
        }, err => {
          console.log(err);
        });
      });
    });
  }

}

module.exports = removeDirPlugin;