//Check cake name
let cakeName = document.getElementById("cake");
let verifyCake = document.getElementById("verifyCake");
cakeName.addEventListener("change", function(){
    check_product(this);
});

function check_product(){
    if(cakeName.value == "nothing"){
        verifyCake.innerHTML = "Please select our product.";
    } else {
        verifyCake.innerHTML = "";
    }
 
}

//Check name
let yourName = document.getElementById("name_1");
let nameError = document.getElementById("yourName");
yourName.addEventListener("keyup", function(){
    check_name(this);
});

function check_name(){
    if(yourName.value.length <= 0){
        nameError.innerHTML = "Please fill out your name.";
    } else if (yourName.value.length >= 100){
        nameError.innerHTML = "Your name should not over 100 characters.";
    } else{
        nameError.innerHTML = "";
    }
}

//Check message
let yourMessage = document.getElementById("message");
let messageError = document.getElementById("yourMessage");
yourMessage.addEventListener("keyup", function(){
    check_message(this);
});

function check_message(){
    if(yourMessage.value.length >= 30){
        messageError.innerHTML = "Message should not over 30 characters.";
    } else {
        messageError.innerHTML = "";
    }
}

//Check date
let dateInput = document.getElementById("date");
let dateError = document.getElementById("dateError");
dateInput.addEventListener("change", function(){
    check_date(this);
});

function check_date(){
    
    if(!dateInput.value){
        dateError.innerHTML = "Please fill out the deliver date";
    } else{
        dateError.innerHTML = "";
    }
}

//Check deliver
let textInput = document.getElementById("text");
let textError = document.getElementById("textError");
textInput.addEventListener("keyup", function(){
    check_text(this);
});

function check_text(){
    if(textInput.value.length <= 0){
        textError.innerHTML = "Please enter the address.";
    } else if(textInput.value.length >= 500){
        textError.innerHTML = "The address should not over 500 characters.";
    }
    else {
        textError.innerHTML = "";
    }
}


//Order Now
function validate(){
        check_product(cakeName);
        check_name(yourName);
        check_message(yourMessage);
        check_date(dateInput);
        check_text(textInput);
}

//Check if the date is in the past
let currentDate = new Date();
dateInput.addEventListener("change", function(){
    past_date(this);
});
function past_date(){ 
    let inputDay = new Date(dateInput.value); //Convert to dateInput to the same format as currentDate so we could compare.
    if(inputDay < currentDate){
        dateError.innerHTML = "The date is in the past";
    
    } else {
        dateError.innerHTML = "";
    }
}

//Prevent default validation
document.getElementById("order").addEventListener("click", function(event){
    event.preventDefault()
  });
