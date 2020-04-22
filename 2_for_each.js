//Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array. 

// Method #!
const array= ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
      
const greetAliens = array => {
  for (let i=0; i<array.length; i++ ) {
    console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);
  }
};

greetAliens(array);

//Method #2
array.forEach(arry=> {console.log(`Oh powerful ${arry}, we humans offer our unconditional surrender!`)})
