function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var y=0;
  var count=1;
  var count_str=1;
  for(var i=0;i<collection.length;i+=count_str)
  {
  	if(collection[i].length===1)
	{
		count=1;
	}
	else
	{
		var str='';
		for(var m=1;m<collection[i].length;m++)
		{
		 	if((collection[i][m]-0)*1===(collection[i][m]-0))
		 	{
		 		str+=collection[i][m];
			}
		}
		count=(str-0);
	}
  	count_str=1;
	for(var x=i+1;x<collection.length;x++)
	{
		if(collection[i][0]===collection[x][0])
		{
		    if(collection[x].length===1)
		 	{
		 		count++;
		 	}
		 	else
		 	{
		 	   var str='';
               for(var k=1;k<collection[x].length;k++)
	 			{
		 			if((collection[x][k]-0)*1===(collection[x][k]-0))
		 			{
		 				str+=collection[x][k];
		 			}	
		 		}
		 		count+=(str-0);
		 	}
		}
		else
		{
			break;
		}
		count_str++;
	}
	result[y++]={name:collection[i][0],summary:count}; 
  }
  return result;
}

