
var str=`1 2 3 4 5`

function weight(str) {
    var arr=str.split(" ").map(Number)

var sum=0
for(var i=0;i<arr.length;i++){
    var a=i+1
    sum=sum+arr[i]*a
}
console.log(sum);

}



function runProgram(input){
    var newInput = input.split("\n");
    for(var i=2;i<newInput.length;i+2){
        var str=newInput[i]
        weight(str)
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



