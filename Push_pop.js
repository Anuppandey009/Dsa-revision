
function runProgram(input){
    var newInput = input.split("\n");
    var stack=[]
    for(var i=1;i<newInput.length;i++){
       var data=newInput[i].split(" ").map(Number)
       if(data[0]==1){
         //  if(stack.length==0){
         //     stack.push(data[1])
         //  }
         //  else{
         //     stack.unshift(data[1])
         //  }
         stack.push(data[1])
       }
       if(data[0]==2){
          stack.pop()
       }
       if(data[0]==3){
        if(stack.length==0){
           console.log("Empty!");
        }
        else{
         console.log(stack[stack.length-1]);
        }
       }
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
runProgram(`6
1 15
1 20
2
3
2
3`)


