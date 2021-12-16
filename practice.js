// refactor variable names when complete
// declare a variable named string and assign it a string value
var string = 'Hello!';
// return the string variable to the log
console.log(string);

// declare another variable named number and assign it to a number data type
var number = 17;
// return the variable to the log
console.log(number);

// create a new variable named float and assign it a value of a float number
var float = 3.14;
// return the variable to the log
console.log(float);

// create a new variable named isHungry and assign it to a boolean data type.
var isHungry = true;
// return the variable to the log
console.log(isHungry);

// declare a new variable that is assigned an empty array
var myArray = [];
// log the array to the console
console.log(myArray);

// assign the first element in the array the string variable created above.
myArray[0] = string;
// return that to the log to ensure it printed out correctly
console.log(myArray);

// assign the last element in the array your number variable using an array method
myArray.push(number);
// return it to the log to ensure it worked.
console.log(myArray);

// add the value to assigned float variable to your array in index position 0
myArray.unshift(float);
// return it to the console log to ensure its working as desired.
console.log(myArray);

// add the value
myArray.push(isHungry);
console.log(myArray);

var string2 = "my name is Rachel";
console.log(string2);

var string3 = string + " " + string2;
console.log(string3);

var string4 = `${string2} and I am ${number}`;
console.log(string4);

myArray[1] = string4;
console.log(myArray);
