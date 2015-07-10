function findSubB(collection){
  for(var i = 0;i < collection.length; i++){
    if(collection[i].length !== 0)
    {
      return collection[i];
    }
  }
}
function collect_same_elements(collection_a, collection_b) {
  var result = collection_a.filter(function(item){
    var subCollectionB = findSubB(collection_b); 
    if(subCollectionB.indexOf(item) !== -1) {
      return item;
    }
  });
  return result;
}
