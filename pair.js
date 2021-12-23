

var str='3 0 6 2 7'
var target=9


function test(str,target) {
    
var arr=str.split(" ").map(Number).sort((a,b)=>{
    return a-b
})
var count=0
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
        if(i!=j){
            if(arr[i]+arr[j]==target){
                count++
            }
        }
    }
}

console.log(count/2);

}




function runProgram(input){
    var newInput = input.split("\n");
    var data=newInput[0].split(" ").map(Number);
    var target=data[1]
    var str=newInput[1]
    test(str,target)
 
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

