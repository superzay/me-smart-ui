export default {
  lineToCamel(str) {
    return str.replace(/-[a-zA-Z]/g, (str) => {
      return str.slice(1, 2).toLocaleUpperCase()
    });
  },
  camelToLine(str) {
    return str.replace(/[A-Z]/g, (str) => {
      return '-' + str.toLocaleLowerCase()
    });
  }
}


