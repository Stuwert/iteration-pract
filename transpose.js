// This function should transpose the given array.

module.exports = function (input) {
  return input.map(function(arr, i){
    return arr.map(function(set, j){
      return input[j][i]
    })
  })
};
