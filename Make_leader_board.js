
function runProgram(input){
    var newInput = input.split("\n");
    newInput.shift();
 
    var arr=newInput.map((e)=>e.split(" "))
    //
    arr.sort()
  for(var i=0;i<arr.length;i++){
      arr[i][1]=Number(arr[i][1])
  }
  var obj={}
  for(var i=0;i<arr.length;i++){
      if(obj[arr[i][1]]==undefined){
        obj[arr[i][1]]=[arr[i][0]]
      }
      else{
        obj[arr[i][1]].push(arr[i][0])
      }
  }
 var sorted_arr=[]
 for(key in obj){
     sorted_arr.push(obj[key])
 }
 sorted_arr.reverse()
 var count=0
for(var i=0;i<sorted_arr.length;i++){
      count++
    for(var j=0;j<sorted_arr[i].length;j++){
        console.log(`${count} ${sorted_arr[i][j]}`);
    }
    count=count+j-1
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
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`)


