//Store values in an array
const myArray = ["Manh", 22];

//Access array with indexes
const myArray1 = [50, 60, 70];
let myData = myArray1[0];

//Modify Array data
const myArray2 = [18, 64, 99];

// Only change code below this line
myArray2[0] = 45;


//Muti-dimentional arrays with indexes
const myArray3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray3[2][1];

  //push() method
const myArray4 = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray4.push(["dog", 3]);

//pop() method
const myArray5 = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray5.pop();

//shift() method
const myArray6 = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray1 = myArray6.shift();

//unshift() method
const myArray7 = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray7.unshift(["Paul", 35]);

//LOOP

//For loop
const myArr = [];

// Only change code below this line
for(let i = 1; i < 6; i++){
  myArr.push(i);
}

//For loop (odd numbers)
const myArr1 = [];

// Only change code below this line
for(let i = 1; i < 10; i += 2){
  myArr1.push(i);
}

//Count Backwards For loop
const myArr2 = [];

// Only change code below this line
for(let i = 9; i > 0; i -= 2){
  myArr2.push(i);
}

//Iterate through an array
const myArr3 = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr3.length; i++){
  total += myArr3[i];
}

//While loop
const myArray = [];

// Only change code below this line
let x = 5;
while(x >= 0){
  myArray.push(x);
  x--;
}

//Do...While loop
const myArray = [];
let i = 10;

// Only change code below this line
 do {
  myArray.push(i);
  i++;
} while (i < 10);

//Nesting for...loop
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//concat() to join two or more arrays arr1.concat(arr1, arr2,...)
let arr1 = ["Apple", "Banana"];
let arr2 = ["Grapes", "Peach", 5, 8, "Pear"];

let fruits = arr1.concat(arr2);

//join() returns an array as a string: array.join(separator)
const animals = ["Tiger", "Mouse", "Cat", "Lion"];
let stringAnimals = animals.join();

//push() - pop(); shift() - unshift() to add/remove item

//sort() - reverse() to sort the elements.