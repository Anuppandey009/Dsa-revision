
function runProgram(input){
    var newInput = input.split("\n");
   var stock=[]
   for(var i=1;i<newInput.length;i++){
       var data=newInput[i].split(" ").map(Number)
     
       if(data[0]==1){
           if(stock.length==0){
               console.log(`No Food`);
           }
           else{
               console.log(stock[stock.length-1]);
               stock.pop()
           }
       }
       if(data[0]==2){
           stock.push(data[1])
       }
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
runProgram(`6
1
2 5
2 7
2 9
1
1`)



