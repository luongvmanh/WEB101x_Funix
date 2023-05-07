
/*Create a function */
function functionName() {
    console.log("Hi World");
  }

/* Create a function with arguments */

  function functionWithArgs(a, b){
    console.log(a + b);
  }
  functionWithArgs(2, 4);

/* Return a value */
function timesFive(item){
    return item * 5;
  }
  
  timesFive(6);

/* Return undefined value */
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive(){
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();

/* Assignment with a returned value */
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);