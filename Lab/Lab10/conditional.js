//If condition
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){
      return "Yes, that was true";
    } else {
      return "No, that was false";
    }
}
// == and ===
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

// != and !==
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

// > and >=
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

// < and <=
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

// Logic && and ||
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val >= 25 && val <=50) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    } else{
      return "Inside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

//If...Else
function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

//Else If
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    } else{
      return "Between 5 and 10";
    }
  }
  
  testElseIf(7);

//Logical order statements
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

//Else if chain
function testSize(num) {
    // Only change code below this line
    if(num < 5){
      return "Tiny";
    } else if(num < 10){
      return "Small";
    } else if(num < 15){
      return "Medium";
    } else if(num < 20){
      return "Large";
    } else{
      return "Huge";
    }
    return "Change Me";
    // Only change code above this line
  }

// Switch...Case statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
      case 1:
      answer = "alpha";
      break;
      case 2:
      answer = "beta";
      break;
      case 3:
      answer = "gamma";
      break;
      case 4:
      answer = "delta";
      break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

// Add a default option
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "a":
      answer = "apple";
      break;
      case "b":
      answer = "bird";
      break;
      case "c":
      answer = "cat";
      break;
      default:
      answer = "stuff";
      break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

//Multiple identical option
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

//Replacement for If Else chain
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);
