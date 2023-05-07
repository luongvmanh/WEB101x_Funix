const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
    console.log("Grandparent")
})


// function changeName(name){
//     const myName = document.getElementById("name");
//     myName.innerHTML = "Luong Van Manh";
// }

// function changeName(name){
//     alert(" You click on change name");
// }

let myName = document.getElementById("clickP");
document.addEventListener("click", function changeName(){
    myName.innerHTML = "Xin chao";
});