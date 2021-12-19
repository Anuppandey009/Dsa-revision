function print(arr) {
    var res=""
    for(var i=arr.length-1;i>=0;i--){
  
        res=res+arr[i][0]+" "
    }
    for(var i=1;i<arr.length;i++){
     
        res=res+arr[i][i]+" "
    }
    for(var i=arr.length-2;i>=0;i--){
  
        res=res+arr[i][arr.length-1]+" "
    }
    console.log(res);
    
}








function runProgram(input){
    var newInput = input.split("\n");
    for(var i=1;i<newInput.length;i=i+row+1){
        var arr=[]
        var row=Number(newInput[i])
        for(var j=i+1;j<=i+row;j++){
            arr.push(newInput[j].split(" ").map(Number))
        }
      
    print(arr)
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
runProgram(`1
3
1 2 3
4 5 6
7 8 9`)


