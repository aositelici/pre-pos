function create_updated_collection(collection_a, object_b) {
 //在这里写入代码
  var collection_c=[];
  var y=0;
  var count=1;
  var count_str=1;
  for(var i=0;i<collection_a.length;i+=count_str)
  {
  	    count=1;
  	    count_str=1;
  	    if(collection_a[i].length!=1)
	    {
            var str='';
            for(var k=1;k<collection_a[i].length;k++)
 			{
	 			if((collection_a[i][k]-0)*1===(collection_a[i][k]-0))
	 			{
	 				str+=collection_a[i][k];
	 			}	
	 		}
	 		collection_c[y++]={key:collection_a[i][0],count:(str-0)};   
		}
		else
		{
			for(var x=i+1;x<collection_a.length;x++)
			{
				if(collection_a[i]===collection_a[x])
				{
				    count++;
				    count_str++;
				}
				else
				{
				 	break;
				}
			}
			collection_c[y++]={key:collection_a[i],count:count};   
		}     
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