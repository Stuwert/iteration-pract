function curriculum(data) {
  var newObj = {};
  data.units.forEach(function(units){
    newObj[units.name] = units.lessons.map(function(item){
      return item.name;
    })
  })
  return newObj;

}

function lessonOccurrences(data) {
  var newObj = {};
  data.units.forEach(function(units){
    newObj[units.name] = {};
    units.lessons.forEach(function(detailedInfo){
      newObj[units.name][detailedInfo.name] = Object.keys(detailedInfo.occurrences)
    })
  })
  return newObj;
}


// occurrences.keys
// Obj.keys(occurrences)

module.exports = {
  curriculum: curriculum,
  lessonOccurrences: lessonOccurrences
}
