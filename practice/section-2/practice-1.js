function countElement(collection,i){
  var count = 1;
  for(var x = i+1; x < collection.length; x++){
    if(collection[i] === collection[x]){
      count++;
    }
    else
      break;
  }
  return count;
}
function count_same_elements(collection) {
  var result = [];
  for(var i = 0; i < collection.length; i+= count){
    var count = countElement(collection,i);
    result.push({key:collection[i],count:count});    
  }
  return result;
}
