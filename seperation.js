
function print(str,n){
    var arr=str.split(" ").map(Number)

    var even=[]
    var odd=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even.push(arr[i])
        }
        else{
            odd.push(arr[i])
        }
    }
    even.sort((a,b)=>{
        return a-b
    });
    odd.sort((a,b)=>{
        return a-b
    })
    var res;
    if(n==1){
        res=even.concat(odd)
    }
    else{
         res=odd.concat(even)
    }
    console.log(res.join(" "));
}



function runProgram(input){
    var newInput = input.split("\n");
    for(var i=2;i<newInput.length; i=i+3){
        var str=newInput[i]
        var n=+(newInput[i+1])
        print(str,n)
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



