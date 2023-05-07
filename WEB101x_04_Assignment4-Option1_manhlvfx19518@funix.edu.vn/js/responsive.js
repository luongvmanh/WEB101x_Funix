//Add class "responsive" to nav
function myFunction(){
    let topNav = document.getElementById("navMenu");
    if(topNav.className === "topnav-menu"){
        topNav.className += " responsive";
    }
    else{
        topNav.className = "topnav-menu";
    }
}

//add event to hide the nav if click outside of the hambuger button
let topNav = document.getElementById("navMenu");
document.addEventListener("click", function(event){
    if(event.target.className !== "icon" && event.target.className !== "topnav-menu responsive" 
        && event.target.className !== "fa-solid fa-bars" && topNav.className === "topnav-menu responsive"){
        topNav.classList.remove("responsive");
    }
    
})

//Question 1: What happen with the error of void(0) in the console
//Question 2: What is the problem with the hamburger button when I click it then click outside