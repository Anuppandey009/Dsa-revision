

var str=`a#bc`



function print(str) {
    var arr=str.split("")

var stack=[]

for(let i=0;i<arr.length;i++){
    if(arr[i]==`#`){
        stack.pop()
     
    }
    else{
        stack.push(arr[i])
    }
     
}

console.log(stack.join(""));
}






function runProgram(input){
    var newInput = input.split("\n");
 for(let i=1;i<newInput.length;i++){
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

// runProgram(`2
// ab#d
// a#bcc`)