module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  let n = 0
  matrix = matrix.flat()
  matrix.forEach((el) => {
    if(el === '^^') n = n + 1
  });
  return n
};
