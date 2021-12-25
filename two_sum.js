

var str=`2 7 11 15`
var target=9


function sum(str,target) {
    
var arr=str.split(" ").map(Number)

var low=0
var high=arr.length -1
var res=""

while(low<high){
  if(arr[low]+arr[high]==target){
      res=res+low+" "+high
      console.log(res)
      break;
  }

  if(arr[low]+arr[high]>target){
  high--
  }
  else{
      low++
  }
}

if(res.length==0){
    res=res+"-1"+" "+"-1"
    console.log(res);
}

}


function runProgram(input){
    var newInput = input.split("\n");
    for(var i=1;i<newInput.length;i=i+2){
        var data=newInput[i].split(" ").map(Number)
        var target=data[1]
        var str=newInput[i+1]
        sum(str,target)
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




