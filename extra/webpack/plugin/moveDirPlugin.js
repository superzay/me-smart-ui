const fs = require('fs');
const path = require('path');

class moveDirPlugin {
  constructor(arr) {
    this.arr = Array.isArray(arr) ? arr : [];
  }
  apply(compiler) {
    if (process.env.run !== "build-package") return;
    compiler.hooks.done.tap('moveDirPlugin', compilation => {
      this.arr.forEach(arr => {
        if (Array.isArray(arr) && arr[0] && arr[1]) {
          let oldPath = String(arr[0]);
          let newPath = String(arr[1]);
          fs.rename(path.resolve(process.cwd(), oldPath), path.resolve(process.cwd(), newPath), error => {
            console.log(error);
          });
        }
      });
    });
  }

}

module.exports = moveDirPlugin;