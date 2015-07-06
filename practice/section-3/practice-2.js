function findItem(collection_a,object_b,i){
  if(object_b.value.indexOf(collection_a[i].key) != -1){
      collection_a[i].count -= (parseInt(collection_a[i].count/3));
  }
}
function create_updated_collection(collection_a, object_b) {
  for(var x = 0; x < collection_a.length; x ++){
    findItem(collection_a,object_b,x);
  }
  return collection_a;
}

