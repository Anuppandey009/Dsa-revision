
function test(str) {
    
    var arr=str.split(" ").map(Number)
    
    var obj={}
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]]++
        }
    }
    
    var flag=true;
    
    for(var key in obj){
        if(obj[key]>1){
            flag=false
            return flag
        }
    
    }
    return flag
    }
    
    
    
    
    function runProgram(input){
        var newInput = input.split("\n");
        for(let i=2;i<arr.length; i=i+2){
            var str=newInput[i]
            var x=test(str)
            if(x==true){
                console.log("NO");
            }
            else{
                console.log("YES");
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
    
    
    
    