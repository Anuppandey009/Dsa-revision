

var str1=`1 2 3 4 5`
var str2='3 5 7'




function search(arr,k) {
 
    
    var low=0;
    var high=arr.length -1

    while(high-low>= 1){
        var mid = Math.floor((low + high) / 2)
        if(arr[mid]<k){
            low=mid+1
        }
        else{
            high = mid
        }
     }
    if(arr[low]==k){
        return true
    }
    else{
       return false
    }
}




function test(str1,str2) {
    var arr=str1.split(" ").map(Number).sort((a,b)=>{
        return a-b
    })

var query=str2.split(" ").map(Number).sort((a,b)=>{
    return a,b
})
for(let i=0;i<query.length;i++){
      if(search(arr,query[i])==true){
          console.log("YES");
      }
      else{
          console.log("NO");
      }
}

}














function runProgram(input){
    var newInput = input.split("\n");
    var str1=newInput[1]
   var str2=newInput[3]
   test(str1,str2)
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

