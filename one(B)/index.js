// 1.b. Write a function called `filterByLength` that takes an array of strings 
// and a number as input and returns an array of all the strings in the
//  input array whose length is greater than or equal to the input number.
// ```js
// const arr = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(filterByLength(arr, 6));
// ["banana", "cherry", "elderberry"]

function filterByLength(arr, num) {
    const arr1 = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].length >= num){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
const arr = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(filterByLength(arr, 6));