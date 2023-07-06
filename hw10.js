// FIRST TASK

var a = prompt("Please enter a number");
a = -a

if (isNaN(a)) {
    console.log("Oops, this is not a number");
} else {
    a = Number(a); // Convert the input to a number
    if (a % 2 === 0) {
        console.log("This is an even number");
    } else {
        console.log("This is an odd number");
    }
}


// SECOND TASK

var x = '100';

if (typeof x === 'string') {
    console.log("This is a string");
} 
else if (typeof x === 'number') {
    console.log("This is a number");
}
else if (typeof x === 'boolean') {
    console.log("This is a boolean");
} 
else {
    console.log("Type of x is not determined");
}

// THIRD TASK 
var str = 'Hello';
var reversedStr = '';

for (var i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr);

// FOURTH TASK

var randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)

// FIFTH TASK

arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.length);

arr.forEach(function(item, index, array) {
console.log(item);
});

// OR 
// let i;
// for(i = 0; i++; i < arr.leght){
//     console.log(arr[i]);
// }

// SIXTH TASK

arr1 = [1,1,1,1,1,1,1,1,1,1];
let i;

for(i = 0; i < arr1.length; i++){
    if (arr[i] === arr1[i+1]){
        if( i = arr1.length - 1){
            console.log("True")
        }
    } else {
        console.log("False") 
        break;
    }
}

// SEVENTH TASK 

const arr2 = [0, 1, 2, 3, 4, 5, 6, 0, 0, 7, 8, 9, 10, null, 'lalalala'];

let oddNumber = 0;
let evenNumber = 0;
let zeroNumber = 0;

for (let i = 0; i < arr2.length; i++) {
  const element = arr2[i];
  
  if (element === 0) {
    zeroNumber++;
  } else if (typeof element === 'number') {
    if (element % 2 === 0) {
      evenNumber++;
    } else {
      oddNumber++;
    }
  } else {
    console.log("Other element:", element);
  }
}

console.log("Number of even elements:", evenNumber);
console.log("Number of odd elements:", oddNumber);
console.log("Number of elements equal to Zero:", zeroNumber);

// EIGHTS TASK

let myMap = new Map();
myMap.set('Yellow', 'Lemon');
myMap.set('Green', 'Avocado');
myMap.set('Red', 'Apple');
myMap.set('Black', 'Grapes');

for (let [key, value] of myMap) {
    console.log(`Key - ${key}, Value - ${value}`);
  }