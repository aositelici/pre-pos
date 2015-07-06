function findItem(itemA,collection_b){
  if(collection_b.indexOf(itemA) != -1) {
      return itemA;
  }
}
function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for(var i = 0; i < collection_a.length; i++) {
    var item = findItem(collection_a[i],collection_b);
    if(item){
      result.push(item);
    }
  }
  return result;
}
