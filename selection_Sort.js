var str=`3 5 0 9 8`
var arr=str.split(" ").map(Number)

for(var i=0;i<arr.length-1;i++){
    var min=i
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    if(arr[min]<arr[i]){
        var temp=arr[min]
          arr[min]=arr[i]
          arr[i]=temp
    }
}
console.log(arr);