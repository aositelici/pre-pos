function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  var index=0;
  var collection_b_copy=collection_b;
  for(var x=0;x<collection_a.length;x++)
  {
  	for(var y=0;y<collection_b_copy.length;y++)
  	{
        if(collection_a[x]===collection_b_copy[y])
        {
        	result[index++]=collection_a[x];
        	if(collection_b_copy.length===1)
        	{
        		return result;
        	}
        	while(y<collection_b_copy.length-1)
        	{
        		collection_b_copy[y]=collection_b_copy[++y];
        	}
        	collection_b_copy.length-=1;
        }
  	}
  }
}
