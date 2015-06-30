function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var y=0;
  var count=1;
  for(var i=0;i<collection.length;i+=count)
  {
  	count=1;
		for(var x=i+1;x<collection.length;x++)
		{
			if(collection[i]===collection[x])
			{
			    count++;
			}
			else
			 	break;
		}
        result[y++]={key:collection[i],count:count};    
  }
  return result;
}
