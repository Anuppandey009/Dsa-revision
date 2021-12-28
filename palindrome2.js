
var str=`aabbcc`


function palindrome(str) {
   
var arr=str.split("")

var obj={}

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]== undefined){
        obj[arr[i]] = 1
    }
    else{
        obj[arr[i]]++
    }
}
var count=0

for(let key in obj){
    if(obj[key]%2==1){
        count++
    }
}
if(count>1){
    console.log("Not Possible!");
}
else{
    console.log("Possible!");
} 
}








function runProgram(input){
    var newInput = input.split("\n");
    for(let i =2;i<arr.length; i=i+2){
        var str=newInput[i]
        palindrome(str)
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