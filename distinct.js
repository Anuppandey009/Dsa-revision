
var str=`abcde`



function distinctsubstr(str) {
    var arr=str.split("")


var count=0
var obj={}
for(var i=0;i<arr.length;i++){

    var res=[]
   
    for(var j=i;j<arr.length; j++){
        

        res.push(arr[j])
        var x=res.join("")
     
       
      if(obj[res]==undefined){
        obj[res]=1
      }
      
    }

}

console.log(Object.keys(obj).length);


}






function runProgram(input){
    var newInput = input.split("\n");
    for(var i=2;i<arr.length; i=i+2){
        var str=newInput[i]
        distinctsubstr(str)
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



