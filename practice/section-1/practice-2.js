function findSubItem(itemA,collectionSubB){
  if(collectionSubB.length != 0){
  	if(collectionSubB.indexOf(itemA) != -1) {
      return itemA;
    }
  }	
}
function findItem(itemA,collection_b){
  for(var i = 0; i < collection_b.length; i++){
  	var subItem = findSubItem(itemA,collection_b[i]);
  	if(subItem){
  	  return subItem;
  	}
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
