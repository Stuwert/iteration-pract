// This function should return an array that is the sum of all of the "columns".
// That is, if you have an array like:
//
//    [
//      [1, 2, 3],
//      [1, 2, 3],
//    ]
//
// The resulting array would be:
//
//    [ 2, 4, 6]
//
// The first element, `2`, is the sum of the first elements of all the arrays.
// The first element, `4`, is the sum of the second elements of all the arrays.
// The first element, `6`, is the sum of the third elements of all the arrays.

module.exports = function (input) {
  var returnArr = [];
  for(var i = 0; i< input[0].length; i++){
    var colTot = 0;
    for(var j = 0; j < input.length; j++){
      colTot += input[j][i];
    }
    returnArr.push(colTot);
  }
  return [returnArr];
};
