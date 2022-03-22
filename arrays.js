// array can be created in two ways 
//1. by just writing a variable and assigning it valus in brackets

const arr = ['111', '2', '3', '40'];
arr[4]= 'nadan'
console.log(arr);

console.log(arr.indexOf('3'));

// 2. the second method is using new keyword
const arr2= new Array(200, 300, 400);
console.log(arr2); 

///////////////////////////////////
//entering an element at the end when no of elements are more 
arr2.push('Rahim');
console.log(arr2);
///////////////////////
//adding at the beginning
arr2.unshift('wazir');
console.log(arr2);
///////////////////////
// removing the last element from the array
arr2.pop();
console.log(arr2);
///////////////////////
// checking for a value in the array
console.log(Array.isArray(arr2));
////////////////////
//checking the index of an element
console.log(arr2.indexOf(200));

