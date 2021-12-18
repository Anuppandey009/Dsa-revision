
var test=`39 27 11 4 24 32 32 1`

var arr=test.split(" ").map(Number)
// console.log(arr);
var stack=[]
var res=[]
stack.push(arr[0])
res.push(-1)

for(var i=1;i<arr.length;i++){
    while(stack[stack.length-1]>=arr[i]){
        stack.pop()
    }
    if(stack.length==0){
        res.push(-1)
        stack.push(arr[i])
    }
    else if(stack[stack.length-1]<arr[i]){
        res.push(stack[stack.length-1])
        stack.push(arr[i])
    }

}
console.log(res.join(" "));