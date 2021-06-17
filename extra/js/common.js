function lineToCamel(str) {
  return str.replace(/-[a-zA-Z]/g, (str) => {
    return str.slice(1, 2).toLocaleUpperCase()
  });
}

function camelToLine(str) {
  return str.replace(/[A-Z]/g, (str) => {
    return '-'+str.toLocaleLowerCase()
  });
}

module.exports = {
  lineToCamel,
  camelToLine
}

