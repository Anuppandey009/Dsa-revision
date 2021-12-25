var str='1221'



function test(str) {
    var arr=str.split("").map(Number)

var low=0;
var high=arr.length-1
var flag=true;

while(low<high){
    if(arr[low]!=arr[high]){
        flag=false
        return
    }
    else{
        low++
        high--
    }
}
return flag
}




function runProgram(input){
   var str= input
   if(test(str)==true){
       console.log("Yes");
   }
else{
    console.log("No");
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




