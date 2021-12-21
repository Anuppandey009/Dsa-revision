
var str=`aabcc`




function cipher(str) {
    
var arr=str.split("")
var res=""

for(var i=0;i<arr.length;i=i+count){
    var count=0
    for(var j=i;j<arr.length ;j++){
        if(arr[i]==arr[j]){
            count++
        }
        else{
            break
        }
    }
   res=res+arr[i]+count
}
console.log(res);
}