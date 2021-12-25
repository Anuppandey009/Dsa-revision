

var str=`1 2 3 4 5`


function sum1(str) {
    
var arr=str.split(" ").map(Number)
var res=[]
res.push(arr[0])
sum=arr[0]

for(var i=1;i<arr.length;i++){
    sum = sum + arr[i]
    res.push(sum)

}

console.log(res.join(" "));
}



function runProgram(input){
    var newInput = input.split("\n");

    for(var i=2;i<arr.length; i=i+2){
        var str=newInput[i]
        sum1(str)
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




