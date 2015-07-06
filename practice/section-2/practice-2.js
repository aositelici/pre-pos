function countSingleElement(item){
  var number= '';
  for(var i = 1;i < item.length; i ++){
    if(isNaN(item[i]) === false){
      number = item[i];
      return number;
    }
  }
}
function countMultipleElement(collection,i){
  var count = 1;
  for(var x = i+1; x < collection.length; x ++){
    if(collection[i] === collection[x]){
      count ++;
    }
    else
      break;
  }
  return count;
}
function countElement(collection,i){
  if(collection[i].length != 1){
    var number = parseInt(countSingleElement(collection[i]));
    return ({key:collection[i][0],count:number});
  }   
  else{
    var count = countMultipleElement(collection,i);
    return ({key:collection[i],count:count}); 
  } 
}
function count_same_elements(collection) {
  var result = [];
  for(var i = 0; i < collection.length; i += count){
    var elements = countElement(collection,i);
    var count = elements.count;
    result.push(elements);
  }
  return result;
}
