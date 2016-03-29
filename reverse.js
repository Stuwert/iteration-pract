// This function should return an array that is the reverse of the given array,
// but without using JavaScript's built-in `reverse()` function.

module.exports = function (input) {
  var newArr = [];
  for(var i = input.length -1; i>=0; i--){
    newArr.push(input[i])
  }
  return newArr;
};
