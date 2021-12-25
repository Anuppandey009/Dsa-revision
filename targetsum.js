
var str='12 3 4 1 6 9'
var target=24

var arr=str.split(" ").map(Number).sort((a,b)=>{
    return a-b
})


for(var i=0;i<arr.length-2;i++){

    var low=i+1;
    var high=arr.length -1

    while(low<high){
        if(arr[low]+arr[high]+arr[i]==target){
            console.log(arr[i],arr[low],arr[high]);
            break;
        }
        else if(arr[low]+arr[high]+arr[i]<target){
            low++
        }
        else{
            high--
        }
    }
}