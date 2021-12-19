

function runProgram(input){
    var newInput = input.split("\n");
    var data=newInput[0].split(" ").map(Number)
    var layer=data[0]
    var row=data[1]
    var col=data[2]
    var count=0
    var res=""
    var arr=newInput[1].split(" ").map(Number)
    for(var i=0;i<arr.length;i++){
       
        count++
        var res=res+arr[i]+" "
        if(count%col==0){
            res=res+"\n"
        }
        
    }
    console.log(res);
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
runProgram(`2 2 2
1 2 3 4 5 6 7 8`)

