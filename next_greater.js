var str=`1 3 2 4`
var arr=str.split(" ").map(Number)
var stack=[]
var res=[]
stack.push(arr[arr.length-1])
res.push(-1)

for(var i=arr.length-2;i>=0;i--){
    while(stack[stack.length-1]<=arr[i]){
        stack.pop()
    }
    if(stack.length==0){
        res.push(-1)
        stack.push(arr[i])
    }
    else if(stack[stack.length-1]>arr[i]){
        res.push(stack[stack.length-1])
        stack.push(arr[i])
    }
}
var x=res.reverse()
console.log(x.join(" "));