function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var x=0;x<collection_a.length;x++)
  {
  	for(var y=0;y<object_b.value.length;y++)
  	{
        if(collection_a[x].key===object_b.value[y])
        {
        	collection_a[x].count-=(parseInt(collection_a[x].count/3));
        	break;
        }
  	}
  }
  return collection_a;
}
