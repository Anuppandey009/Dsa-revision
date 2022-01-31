
function ways(n) {
    if(n==1){
      return true
    }
    if(n<1){
      return false
    }
    else{
      return ways(n/10)|| ways(n/20)
    }
    
  }
  
  
  
  
  
  
  function runProgram(input){
    var newInput = input.split("\n");
     for(let i=1;i<newInput.length;i++){
       var n=+(newInput[i])
       var res=ways(n)
       console.log(res)
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
  

  