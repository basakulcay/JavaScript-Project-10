//Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

//method 1
const convertToBaby = (array) => {
  let baby = [];
  for (let i=0; i<array.length-1; i++) {
    baby.push(`baby ${array[i]}`)
  }
  return baby;
}


const array = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(array));

//method 2

const babies = array.map(arr=> {return 'baby '+ arr});
console.log(babies);
