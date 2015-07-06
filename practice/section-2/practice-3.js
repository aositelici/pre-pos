function countSingleElement(item) {
  var number= '';
  for(var i = 1;i < item.length; i ++) {
    if(isNaN(item[i]) === false) {
      number += item[i];
    }
  }
  return number;
}

function getElementCount(item) {
  if(item.length===1){
    count =1;
  }
  else{
    count = parseInt(countSingleElement(item));	
  }
  return count;
}

function countElement(collection,i,count,count_str) {
  var number = count;
  for(var x = i + 1; x < collection.length; x ++){
    if(collection[i][0] === collection[x][0]){
      number += getElementCount(collection[x]);
    }
    else{
      break;
    }
   count_str++;
  }
  return {count:number, count_str:count_str};
}

function count_same_elements(collection) {
  var result = [];
  for(var i = 0;i < collection.length; i += count_str){
    var count = getElementCount(collection[i]);
    var count_str=1;
    count = countElement(collection,i,count,count_str).count;
    count_str = countElement(collection,i,count,count_str).count_str;
    result.push({name:collection[i][0], summary:count}); 
  }
  return result;
}

