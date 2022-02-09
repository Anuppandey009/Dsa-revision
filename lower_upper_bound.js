//Enter code here

function lowerbound(str,target){
   var arr=str.split(" ").map(Number)
 
 var i=0
 var j=arr.length-1
 
 while(i<j){
   var mid=Math.floor((i+j)/2)
   if(arr[mid]<target){
     i=mid+1
   }
   else{
     j=mid
   }
   // console.log(arr[mid],arr[i])
 
 }
   if(arr[i]>=target){
     return i
   }
   else{
     return -1
   }
 }
 
 // console.log( lowerbound(str,target))
 
 
 
 function upperbound(str,target){
   var arr=str.split(" ").map(Number)
 
 var i=0
 var j=arr.length-1
 
 while(i<j){
   var mid=Math.floor((i+j)/2)
   if(arr[mid]<=target){
     i=mid+1
   }
   else{
     j=mid
   }
   // console.log(arr[mid],arr[i])
 
 }
   if(arr[i]>target){
     return i
   }
   else{
     return arr.length
   }
 }
 
 // console.log( upperbound(str,target))
 
 
 
 
 function runProgram(input){
     var newInput = input.split("\n");
   var data=newInput[0].split(" ").map(Number)
   var target=data[1]
   var str=newInput[1]
   console.log(upperbound(str,target)-lowerbound(str,target))
   
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
 
 