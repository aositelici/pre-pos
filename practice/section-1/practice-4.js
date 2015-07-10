function getKey(collection_a){
  var keyOfCollection = [];
  for(var i = 0; i < collection_a.length; i++){
    keyOfCollection.push(collection_a[i].key);
  }
  return keyOfCollection;
}

function collect_same_elements(collection_a, collection_b) {
  var keyOfA = getKey(collection_a);
  var result = keyOfA.filter(function(item){
    return (collection_b.value.indexOf(item) !== -1) 
    });
  return result;
}

