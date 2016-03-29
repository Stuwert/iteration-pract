// This function should transpose the given array.

module.exports = function (input) {
  return input.map(function(arr, i){
    var newArr = [];
    input.forEach(function(item, j){
      item.forEach(function(subItem, k){
        if(k === i){
          newArr.push(subItem);
        }
      })
    })
    return newArr;
  })
};
