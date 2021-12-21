

var str=`1 2 3 4`
var arr=str.split(" ").map(Number)

var odd=[]
var even=[]

for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i])
    }
    else{
        odd.push(arr[i])
    }
}
var odd_sum=odd.reduce((a,b)=>{
    return a+b
},0)

var even_sum=even.reduce((a,b)=>{
    return a+b
},0)
if(odd_sum>even_sum){
    console.log("Odd");
}
else{
    console.log("Even");
}