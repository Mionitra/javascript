
var submit = document.getElementById("submit");
var result = document.getElementById("result");

function resultMessage(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    result.innerHTML = `Bienvenu ${name.value}, votre e-mail est ${email.value}`;
    saveData();
}

function saveData(){
    result.innerHTML = localStorage.getItem("data");
    
}
saveData();
function afficher(){
    localStorage.setItem("data",result.innerHTML);

}
afficher();