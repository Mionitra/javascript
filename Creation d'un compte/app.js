var password = document.getElementById("password");
var eyeicon = document.getElementById("eyeicon");
var eyeicon2 = document.getElementById("eyeicon2");
var name = document.getElementById("name");
var email = document.getElementById("email");
var confirm = document.getElementById("confirm");
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var confirm_error = document.getElementById("confirm_error");
var confirm = document.getElementById("confirm");


function show(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eyeopen.jpg";
    }
    else{
        password.type = "password";
        eyeicon.src = "eyeclosed.jpg";
    }
}
function show2(){
    if(confirm.type == "password"){
        confirm.type = "text";
        eyeicon2.src = "eyeopen.jpg";
    }
    else{
        confirm.type = "password";
        eyeicon2.src = "eyeclosed.jpg";
    }
}

function validationName(){
    nameInput = document.getElementById("name").value;
    if ( nameInput.length <= 3)
    {
        name_error.innerHTML = 'Doit au moins comporter 3 caracteres';
        return false;
        
    }
// doit commencer par un majuscule
    if (!nameInput.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_error.innerHTML = 'Ecrivez correctement votre nom';
        return false;
    }
    
    name_error.innerHTML = '<i>Nom valide</i>';
    return true;
}
function validationEmail(){
    var emailInput = document.getElementById("email").value;
// contient des minuscules,@mot,.,mot de 2 a 4 caracteres
    if ( !emailInput.match(/^[a-z]*[@][a-z]*[\.][a-z]{2,4}$/))
    {
        email_error.innerHTML = 'Entrer un email valide';
        return false;
        
    }
    email_error.innerHTML = "<i>Email valide</i>";
    return true;
}
console.log(validationEmail());
function validationMdp(){
    mdpInput = document.getElementById("password").value;
    if(!mdpInput.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@.#%$&*!?]{8,15}$/)){
        mdp_error.innerHTML = "Mot de passe simple";
        return false;
    }
    mdp_error.innerHTML = "Mot de passe fort"
    return true;
}


