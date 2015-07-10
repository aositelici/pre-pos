function getCount(collection,i){
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
    var count = getCount(collection,i);
    result.push({key:collection[i],count:count});    
  }
  return result;
}

function findItem(collection_a,object_b,i){
  if(object_b.value.indexOf(collection_a[i].key) !== -1){
      collection_a[i].count -= (parseInt(collection_a[i].count/3));
  }
}

function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);
  for(var x = 0; x < collection_c.length; x ++){
    findItem(collection_c,object_b,x);
  }
  return collection_c;
}
