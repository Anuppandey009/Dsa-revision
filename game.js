

function test(str,k) {
    var arr=str.split(" ").map(Number)
k=k%arr.length;

if(k<=0){
    k=arr.length+k
}

var p1=[]
var p2=[]




for(let i=0;i<=k-1;i++){
    p1.push(arr[i])
}


for(let i=k;i<arr.length;i++){
    p2.push(arr[i])
}


var res=p2.concat(p1)
console.log(res.join(" "));


}




function runProgram(input){
    var newInput = input.split("\n");
    var data=newInput[0].split(" ").map(Number);
    var k=data[1]
    var str=newInput[1]
    test(str,k)
   
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
