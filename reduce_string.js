
var str=`aaabccddd`
var arr=str.split("")
var stack=[]

for(var i=0;i<arr.length;i++){
    if(stack.length==0){
        stack.push(arr[i])
        
    }
else if(stack[stack.length-1]==arr[i]){
   
    stack.pop()
}
else if(stack[stack.length-1]!=arr[i]){

    stack.push(arr[i])
}
}
console.log(stack.join(""));