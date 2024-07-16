var open = document.getElementById("open");
var password = document.getElementById("password");

function show(){
    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}