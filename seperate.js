
var str='0 1 1 1 0 0 1 0 0 1'

var arr=str.split(" ").map(Number)

var low=0
var high=arr.length-1

while(low<high){
    if(arr[low]==1 && arr[high]==0){
        var temp=arr[low]
        arr[low]=arr[high]
        arr[high]=temp
    }
    while(arr[low]==0 && low<high ){
        low++
    }
    while(arr[high]==1  && low<high){
        high--
    }

}
console.log(arr.join(" "));