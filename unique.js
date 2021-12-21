var str=`masai`


function print(str) {
    
var arr=str.split("")
var obj={}
for(var i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
    else{
        obj[arr[i]]++  
     }
}

var flag=true;
for(key in obj){
    if(obj[key]>1){
        flag=false
    }
}
if(flag==false){
    console.log("No");
}
else{
    console.log("Unique");
}

}





function runProgram(input){
 var str= input
 print(str)


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



