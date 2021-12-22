var str=`0 1 1 1 0 0 1`
var temp=str.split(" ").map(Number)


var arr=[]

arr.push(110*5)
arr.push(120*2)

arr.push(42*2)
arr.push(53*3)
arr.push(40*2)
arr.push(32*5)
arr.push(126*2)


console.log(arr);

var sum=0

for(var i=0;i<temp.length;i++){
   if(temp[i]==1){
     sum=sum+arr[i]
   }
}
console.log(sum*4);