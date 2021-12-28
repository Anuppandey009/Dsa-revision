

function sqr(n) {
   
    var low=0;
    var high=n
    
        while(high-low>=0){
            mid=parseInt((low+high)/2);
    
            if(mid*mid>n){
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
        console.log(high);
    
    
    }
    sqr(8)
    
    
    function runProgram(input){
       var newInput = input.split("\n");
       for(var i=1;i<newInput.length;i++){
          var n=Number(newInput[i])
          sqr(n)
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
    