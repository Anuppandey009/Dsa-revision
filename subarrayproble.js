/*
You are given an array A of N elements. Write a program that counts the
 number of sub-arrays of A in which sum of all the elements is an even number.

Please read sample test case and its explanation for better understanding.


input : 5
2 5 4 4 4
output:7


*/




var str=`2 5 4 4 4`

function countsubarray(str) {
    var arr=str.split(" ").map(Number)

var zero=0
var one=0
var sum=0;

for(let i=0;i<arr.length;i++){
    sum = sum + arr[i]
    var x=sum%2
     if(x==1){
         one++
     }
     else{
         zero++
     }
}


// console.log(zero,one);
var res1=((zero * (zero-1))/2)+zero

var res2=((one * (one-1))/2)
var res=res1+res2
console.log(res);

}





function runProgram(input){
    var newInput = input.split("\n");
    for(let i=1;i<newInput.length;i=i+2){
        var str=newInput[i]
        countsubarray(str)
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
runProgram(`5
2 5 4 4 4`)