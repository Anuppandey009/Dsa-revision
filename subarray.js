
// var str='2 4 3 5 1'
// var k=3


 function subarray(str,k) {
    


    var left = -1
    var count = 0;
    
    
    var arr = str.split(" ").map(Number)
       var total=0
    for(var i=0;i<arr.length;i++){
      total=total+arr[i]
    }
    
    if(total%k!=0){
        count=1
      return count
    }
    
    else{
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % k != 0) {
                left = i
                break;
            }
        }
    
        var key = arr.length - left - 1
    
        var sum = 0
        
        for (var i = 0; i < key; i++) {
            sum = sum + arr[i]
        }
        if (sum % k != 0) {
            count++
        }
        for (var i = key; i < arr.length; i++) {
            sum = sum + arr[i] - arr[i - key]
            // console.log(sum);
            if (sum % k !== 0) {
                count++
            }
        }
    
        return count
    }
    
    
 }








function runProgram(input){
    var newInput = input.split("\n");
    var data=newInput[0].split(" ").map(Number)
    var k=data[1]
    var str=newInput[1]
    var x=subarray(str,k)
    console.log(x);
  
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

