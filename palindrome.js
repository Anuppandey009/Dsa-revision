

var str='aab'



function test(str) {
    var arr=str.split("")

var obj={}
var count=0
for(var i=0;i<arr.length;i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }
    else{
        obj[arr[i]]++
    }
}


for(var key in obj){
 if(obj[key]%2==1){
     count++
 }
}
if(count>1){
    console.log("No");
}
else{
    console.log("Yes");
    
}

}





function runProgram(input){
    var newInput = input.split("\n");
    for(let i =2;i<arr.length;i=i+2){
        var str=newInput[i]
        test(str)
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


