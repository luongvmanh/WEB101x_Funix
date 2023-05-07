// Check if two emails are the same
// function check(){
//     let x = document.getElementById("email_1");
//     let y = document.getElementById("email_2");
//     if(x.value != y.value){
//         alert("Two emails must match");
//         return false;
//     }
// }

//JS on checkbox
// function nickName(){
//     let yesNick = document.getElementById("yesNick");
//     let nick = document.getElementById("nick");
//     let nickname = document.getElementById("nickname");
//     if(yesNick.checked){
//         nick.style.display="inline";
//         nickname.setAttribute("required", true);
//     }
//     else{
//         nick.style.display="none";
//         nickname.removeAttribute("required");
//     }
// }

//JS Expression
//search()
// function letSearch(){
//     let text = "Visit W3Schools!";
//     let n = text.search("W3Schools");
//     document.getElementById("demo").innerHTML = n;
// }

//replace()
function changeWord(){
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace("Microsoft", "W3Schools");
}