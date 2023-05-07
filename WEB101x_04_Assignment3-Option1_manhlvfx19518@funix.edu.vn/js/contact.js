//Check Name

let getName = document.getElementById("name");
let typeName = document.getElementById("typeName");
getName.addEventListener("keyup", function(){
    checkName(getName);
});

function checkName(){
    if(getName.value.length == 0){
        typeName.innerHTML = "Please fill out your name.";
    } else if(getName.value.length >= 100){
        typeName.innerHTML = "Your name should not exceed 100 characters.";
    } else {
        typeName.innerHTML = "";
    }
}

// Check email
let getEmail = document.getElementById("email");
let typeEmail = document.getElementById("typeEmail");
getEmail.addEventListener("keyup", function(){
    checkEmail(this);
});

function checkEmail(){
    if(getEmail.value.length == 0){
        typeEmail.innerHTML = "Please fill out your email.";
    } else if(getEmail.value.length >= 100){
        typeEmail.innerHTML = "Your email should not exceed 100 characters.";
    } else {
        typeEmail.innerHTML = "";
    }
}

//Check subject
let getSubject = document.getElementById("subject");
let typeSubject = document.getElementById("typeSubject");
getSubject.addEventListener("keyup", function(){
    checkSubject(this);
});

function checkSubject(){
    if(getSubject.value.length == 0){
        typeSubject.innerHTML = "Please fill out the subject.";
    } else if(getSubject.value.length <= 50) {
        typeSubject.innerHTML = "Subject should not shorter than 50 characters.";
    }else if(getSubject.value.length >= 100){
        typeSubject.innerHTML = "Your email should not exceed 100 characters.";
    } else {
        typeSubject.innerHTML = "";
    }
}


//Check message
let getMessage = document.getElementById("content");
let typeMessage = document.getElementById("typeMessage");
getMessage.addEventListener("keyup", function(){
    checkMessage(this);
});

function checkMessage(){
    if(getMessage.value.length == 0){
        typeMessage.innerHTML = "Please fill out the message.";
    } else if(getMessage.value.length >= 500){
        typeMessage.innerHTML = "Message should not exceed 500 characters.";
    } else {
        typeMessage.innerHTML = "";
    }
}


//Check submit- shows all messages 
function submitted(){
        checkName(getName);
        checkEmail(getEmail);
        checkSubject(getSubject);
        checkMessage(getMessage);
}


//Prevent default validation
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });
