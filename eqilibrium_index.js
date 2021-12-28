

// Q Equilibrium index of an array is an index such that the sum of the elements at lower index
//   is equal to the sum of it elements at the higher index.

 // output => we have to return the index of that element whose sum of elements to the left is equal 
 //           to its right


 // Technique  Brute force


// var str=`-7 1 5 2 -4 3 0`

// function equilirium(str) {
    
// var arr=str.split(" ").map(Number)
// // console.log(arr);

// for(let i=1;i<arr.length-1;i++){
//     let lsum=0
 
//     for(let j=0;j<i ;j++){
      
//         lsum=lsum+arr[j]
//     }

//     let rsum=0

//     for(let k=i+1;k<arr.length ;k++){
//         rsum= rsum+arr[k]
//     }
//     //  console.log(lsum,rsum);
//     if(lsum==rsum){
//         return i
//     }
// }
// return -1

// }

// var res=equilirium(str)
// console.log(res);





