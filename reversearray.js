//Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. 
const array = ['sense.','make', 'all', 'will', 'This'];

const reverseArray=array=> {
  let newArray=[];
  for (let i=array.length-1 ; i>=0; i--){
   newArray.push(array[i])}
  return newArray;
};

console.log(reverseArray(array));
