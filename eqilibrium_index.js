

// Q Equilibrium index of an array is an index such that the sum of the elements at lower index
//   is equal to the sum of it elements at the higher index.

// output => we have to return the index of that element whose sum of elements to the left is equal 
//           to its right


// Technique  Brute force


/* var str=`-7 1 5 2 -4 3 0`

function equilirium(str) {
    
var arr=str.split(" ").map(Number)
// console.log(arr);

for(let i=1;i<arr.length-1;i++){
    let lsum=0
 
    for(let j=0;j<i ;j++){
      
        lsum=lsum+arr[j]
    }

    let rsum=0

    for(let k=i+1;k<arr.length ;k++){
        rsum= rsum+arr[k]
    }
    //  console.log(lsum,rsum);
    if(lsum==rsum){
        return i
    }
}
return -1

}

var res=equilirium(str)
console.log(res);


*/





//=================================================================================================



// Optimised approach   Time complexity will be O(n)





// var str = `-7 1 5 2 -4 3 0`



// function test(str) {
//     var arr = str.split(" ").map(Number)
//     // console.log(arr);

//     var larr = []

//     larr.push(arr[0])


//     for (let i = 1; i < arr.length; i++) {
//         larr.push(arr[i] + larr[i - 1])
//     }


//     var rarr = []

//     rarr.push(arr[arr.length - 1])


//     var n = arr.length - 2
//     var x = 0
//     while (n >= 0) {
//         rarr.push(arr[n] + rarr[x])
//         x++
//         n--
//     }
//     rarr.reverse()

//     // console.log(larr,rarr);


//     for (let i = 0; i < larr.length; i++) {
//         if (larr[i] == rarr[i]) {
//             return i
//         }
//     }

//     return -1

// }

// var res= test(str)

// console.log(res);
