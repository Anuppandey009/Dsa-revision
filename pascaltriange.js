


for(var i=0;i<5;i++){
    var res=""
    for(var j=0;j<(5-i);j++){
      
      res=res+" "
    }
    var n=1
  
    for(var k=0;k<=i;k++){
      res=res+n+" "
  
      n=n*(i-k)/(k+1)
    }
    console.log(res);
  
    res=""
  }