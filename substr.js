

var str=`dangerouscovid`

function test(res) {
    var flag=false
    for(var i=0;i<res.length;i++){
      if(res.includes('a') && res.includes('i') && res.includes('o') && res.includes('u') ){
        flag=true
      }
    }
    return flag
}






var arr=str.split("")
var count=0
for(var i=0;i<arr.length;i++){
    var res=[]
    for(var j=i;j<arr.length;j++){
        res.push(arr[j])
        if(test(res)==true){
            count++
        }
    
    }
}

console.log(count);