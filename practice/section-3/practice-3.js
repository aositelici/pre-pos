function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c=[];
  var y=0;
  var count=1;
  for(var i=0;i<collection_a.length;i+=count)
  {
  	count=1;
	for(var x=i+1;x<collection_a.length;x++)
	{
		if(collection_a[i]===collection_a[x])
		{
		    count++;
		}
		else
		 	break;
	}
    collection_c[y++]={key:collection_a[i],count:count};    
  }
  for( x=0;x<collection_c.length;x++)
  {
  	for( y=0;y<object_b.value.length;y++)
  	{
        if(collection_c[x].key===object_b.value[y])
        {
        	collection_c[x].count-=(parseInt(collection_c[x].count/3));
        	break;
        }
  	}
  }
  return collection_c;
}
