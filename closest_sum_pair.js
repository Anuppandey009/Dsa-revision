

var arr=[10,22,28,29,30,40]
var x=54

var l=0
var r=arr.length-1
var diff=Infinity
var indx1
var indx2
while(r>l){
  if(Math.abs(arr[l]+arr[r]-x)<diff){
    indx1=l
    indx2=r
    diff=Math.abs(arr[l]+arr[r]-x)
  }
  
  if(arr[l]+arr[r]>x){
    r--
  }
  else{
    l++
  }
  
}
console.log(arr[indx1],arr[indx2])