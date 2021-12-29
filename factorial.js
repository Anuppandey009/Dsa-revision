


function runProgram(input){
    var n=Number(input)

    function fact(n){

        if(n<=1){
            return 1
        }
       return  fact(n-1)*n
    }

     var  res=fact(n)
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

runProgram(`5`)