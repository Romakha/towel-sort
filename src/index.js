module.exports = function towelSort (matrix = []) {
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      let index = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      result.push(matrix[i][index]);  
    }
  }
  return result;
}
