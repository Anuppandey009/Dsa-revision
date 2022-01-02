
var str=`1 1 1 1 2 3`

function majority(str){
    var arr=str.split(" ").map(Number)
    var n=arr.length/2
    var flag=-1;
    
    var obj={}
    
    for(var i=0;i<arr.length;i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]]++
        }
    }
    
    
    for(key in obj){
        if(obj[key]>n){
            flag=key;
            break
        }
    }
    console.log(flag);
}


function runProgram(input){
    var newInput = input.split("\n");
    for(var i=2;i<newInput.length; i=i+2){
        var str=newInput[i]
        majority(str)
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



