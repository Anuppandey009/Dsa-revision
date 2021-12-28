

var str=`8 11 1 20 15 19`



function print(str) {
   
var arr=str.split(" ").map(Number)

var stack=[]
var res=[]

for(let i=arr.length-1;i>=0;i--){
    
   while(stack[stack.length-1]<arr[i]){
       stack.pop()
   }
   if(stack.length==0){
       res.push(-1)
       stack.push(arr[i])
   }

  
 else  if(stack[stack.length-1]>arr[i]){
       res.push(stack[stack.length-1])
       stack.push(arr[i])
   }
 else  if(arr[i]<stack[stack.length-1]){
   res.push(stack[stack.length-1])
   stack.push(arr[i])
   }

}

console.log(res.reverse().join(" "));
}





function runProgram(input){
   var newInput = input.split("\n");
   
   for(let i=2;i<newInput.length;i=i+2){
       var str=newInput[i]
       print(str)
   }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/,"")
 runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/,"")
  runProgram(read);
  process.exit(0);
});