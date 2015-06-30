function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  var index=0;
  var collection_b=object_b.value;
  for(var x=0;x<collection_a.length;x++)
  {
	  for(var y=0;y<collection_b.length;y++)
	  {
	       if(collection_a[x]===collection_b[y])
	       {
	        	result[index++]=collection_a[x];
	        	if(collection_b.length===1)
	        	{
	        		return result;
	        	}
	        	while(y<collection_b.length-1)
	        	{
	        		collection_b[y]=collection_b[++y];
	        	}
	        	collection_b.length-=1;
	       }
	  }
  }
}
