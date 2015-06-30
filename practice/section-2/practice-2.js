function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var y=0;
  var count=1;
  var count_str=1;
  for(var i=0;i<collection.length;i+=count_str)
  {
  	    count=1;
  	    count_str=1;
  	    if(collection[i].length!=1)
	    {
            var str='';
            for(var k=1;k<collection[i].length;k++)
 			{
	 			if((collection[i][k]-0)*1===(collection[i][k]-0))
	 			{
	 				str+=collection[i][k];
	 			}	
	 		}
	 		result[y++]={key:collection[i][0],count:(str-0)};   
		}
		else
		{
			for(var x=i+1;x<collection.length;x++)
			{
				if(collection[i]===collection[x])
				{
				    count++;
				    count_str++;
				}
				else
				 	break;
			}
			result[y++]={key:collection[i],count:count};   
		}     
  }
  return result;
}
