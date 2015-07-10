function collect_same_elements(collection_a, collection_b) {
  var result = collection_a.filter(function(item){
    return (collection_b.value.indexOf(item) !== -1) 
    });
  return result;
}

