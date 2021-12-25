
var str='2 7 11 15'
var k=9


function print(str,k) {
    
var arr=str.split(" ").map(Number).sort((a,b)=>{
    return a-b
})

var low=0;
var high=arr.length -1
var res=""

while(low<high){
    if(arr[low]+arr[high]==k){
      res=res+low+" "+high
        break;

    }
    else if(arr[low]+arr[high]>k){
        high--
    }
    else{
        low++
    }
}
if(res=""){
    res=res+"-1"+" "+"-1"
    console.log(res);
}
else{
      console.log(res);
}
}





function runProgram(input){
    var newInput = input.split("\n");

    for(var i=1;i<newInput.length; i=i+2){
        var data=newInput[i].split(" ").map(Number)
        var k=data[1];
        var str=newInput[i+1]
      print(str,k)

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




