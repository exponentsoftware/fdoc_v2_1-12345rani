// Write a function called `countOccurrences` that takes an array of numbers and a number as input and returns the number of times the input number occurs in the array.
// ```js
// const arr = [4, 2, 6, 8, 4, 1, 4];
// console.log(countOccurrences(arr, 4));

function countoccurrences(arr,num){
    let count = 0;
     for(let i=0; i<=arr.length; i++){
        if(num==arr[i])
        {
            count++;
        }
    }
    return count
}

const arr = [4, 2, 6, 8, 4, 1, 4];
var num=4;
console.log(countoccurrences(arr, 4));

