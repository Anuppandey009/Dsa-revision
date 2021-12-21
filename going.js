
var k=5;
var str='10 9 8 7 7 7 5 5'

var arr=str.split(" ").map(Number)

var count=0
for(var i=0;i<arr.length;i++){
    if(arr[i]>=arr[k-1]){
        count++
    }
}
console.log(count);