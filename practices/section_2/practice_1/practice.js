function count_same_elements(collection) {
  //在这里写入代码
  debugger;
  var result=[]
  for(var i=0;i<collection.length;i++)
  {
    var j=0;
    var count=0
    result.push({'key': collection[i], 'Count': count})
    for(j=0;j<result.length;j++)
    {
      if (collection[i] == result[j]['key'])
      {
        count++

      }
    }
    }
  return result;
}

module.exports = count_same_elements;
