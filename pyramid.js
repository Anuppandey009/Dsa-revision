
var target=4



function test(target) {
    var sum=0
var count=0

for(var i=1;i<target;i++){
    var x=i*((i+1)/2)
    sum=sum+x
    // console.log(sum);
if(sum<=target){
   
    count++
}

  
}

console.log(count);

}



function runProgram(input){
var target=Number(input)
test(target)
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



