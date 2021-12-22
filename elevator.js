
var str='24 83 89 43 91'



function runProgram(input){
    var newInput = input.split("\n")
        var str=newInput[1]
    
var arr=str.split(" ").map(Number)


for(var i=0;i<arr.length;i++){
    if(arr[i]<85){
        console.log("Enter");
    }
    else{
        console.log("Beep");
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


