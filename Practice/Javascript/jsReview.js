//Multiply
document.getElementById("multiply").innerHTML = multiple(8, 6);
function multiple(a, b){
    return a * b;
}


//Object

const car = {
    type: "Mercedes",
    model: "S300",
    color: "Black"
}

const person = {
    firstname: "Luong",
    lastname: "Manh",
    sex: "male",
    age: 33,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
};
document.getElementById("car").innerHTML = car.type;
//document.getElementById("person").innerHTML = person["firstname"] + " " + person.age;
// document.getElementById("person").innerHTML = person.fullname();
person.age = 34;
person.fullname = function(){
    return this.sex + " " + this.age;
}
document.getElementById("person").innerHTML = person.fullname();

function backGround(){
    let content = document.getElementById("showContent");
    content.style.color = "red";
    content.style.background = "yellow";
}


//Check name
let firstname = document.getElementById("firstname");
let showError = document.getElementById("showError");
// firstname.addEventListener("keyup", function(){
//     checkName(this);
// })
firstname.addEventListener("keyup", () =>{
    checkName(this);
})

function checkName(){
    if (firstname.value.length <= 0){
        showError.innerHTML = "Please enter your name";
    }
    if (firstname.value.length >= 100){
        showError.innerHTML = "Your name is too long";
    }
}

function countUp(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let count = document.getElementById("count");
    for (let i = 0; i < arr.length; i++){
        count.innerHTML = arr[i];
        console.log(arr[i]);
    }
}

let x = 0;
switch (x){
    case 1:
        text = "On";
        break;
    case 0:
        text = "Off";
        break;
    default:
        text = "No number";
}
document.getElementById("switch").innerHTML = text;

let hour = new Date().getHours();
let greet = document.getElementById("greeting");
if (hour > 5 && hour < 10){
    greet.innerHTML = "Good morning";
}
else if (hour > 13 && hour < 20){
    greet.innerHTML = "Good afternoon";
} else {
    greet.innerHTML = "Good evening";
}


// Toan tu 3 ngoi
let num = 3;
let no = num > 2 ? 200 : 1000;
document.getElementById("toantu3ngoi").innerHTML = no;
console.log(no);


//Normal function
// function arrOw(arg){
//     console.log(arg);
// }
// arrOw("This is a normal function");

// Arrow function 1
// const arrOw = (arg) => {
//     console.log(arg);
// }
// arrOw("This is an arrow function 1");

// Arrow function 2 for function with only one row
// const arrOw = (arg) => console.log(arg);
// arrOw("This is an arrow function 2");

// Arrow function 3
arrOw = (arg) => console.log(arg);
arrOw("This is an arrow function 3");