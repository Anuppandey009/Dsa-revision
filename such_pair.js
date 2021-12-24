
function test(str,k) {
    
    var arr=str.split(" ").map(Number).sort((a,b)=>{
        return a-b
    })
    
    var low=0
    var high=arr.length -1
    var flag=false
    
    while(low<high){
        if(arr[low]+arr[high]>k){
            high--
        }
        else if(arr[low]+arr[high]<k){
            low++
        }
        else{
               flag=true;
               return flag
        }
    }
    return flag
    }
    
    
    
    
    
    
    
    
    function runProgram(input){
        var newInput = input.split("\n");
    
        for(let i=1;i<newInput.length;i=i+2){
            let data=newInput[i].split(" ").map(Number)
            var k=data[1]
            var str=newInput[i+1]
            var x=test(str,k)
              if(x==true){
            console.log(1);
        }
        else{
            console.log(-1);
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
    
    
    