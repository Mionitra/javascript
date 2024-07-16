var time = document.getElementById("time");
var user = document.getElementById("user");
var objectif = document.getElementById("objectif");
var salut = document.getElementById("salut");
var date = document.getElementById("date");
var bg = document.getElementById("bg");
// date d'aujourd'hui
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

//fonction pour l'heure
function setTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    var amPam = hour >= 12 ? 'PM' : 'AM';
    /*if hour <= 12{
        amPm = 'AM';
    }
    else{
        amPm = 'PM';
    }*/
    if (hour < 12){
        salut.textContent = 'Bonjour';
        bg.src = 'sunrise.jpg';
        document.body.style.color = "aqua";
    }
    else if(hour < 18){
        salut.textContent = 'Bonne apres-midi';
        bg.src = 'daylight.jpg';
    }
    else{
        salut.textContent = 'Bonsoir';
        bg.src = 'night.jpg';
        document.body.style.color = "white";
    }
    hour = hour % 12;


    document.getElementById("time").innerHTML = zero(hour)+":"+ zero(min) +":" + zero(sec) +" "+amPam;
    setTimeout(setTime, 1000);
}

//fonction pour ajouter un '0' devant un unite
function zero(n) {
    //analyser le chiffre
    /*
    if((le nombre n a 9)<10){
        n= '0' + n;
    }
    else{
        n = '' + n;
    }
    */
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}
// entrer le nom
function getName (){
    if(localStorage.getItem('name') === null)
    {
        user.textContent = "[Enter name]";
    }
    else{
        user.textContent = localStorage.getItem('name');
    }
}
//configurer ou afficher le nom
function setName(e){
    if(e.type == 'keypress'){
        // 13 est le numero de la touche 'entrer'
        if (e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name',e.target.innerText);
            user.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}
// afficher ou configurer le nom quand la touche 
// entrer est pressee ou quand on clique sur autre chose
user.addEventListener('keypress',setName);
user.addEventListener('blur',setName);
// entrer l'objectif
function getObjectif (){
    if(localStorage.getItem('objectif') === null)
    {
        objectif.textContent = "[Entrer objectif]";
    }
    else{
        objectif.textContent = localStorage.getItem('objectif');
    }
}
//configurer ou afficher l'objectif
function setObject(o){
    if(o.type == 'keypress'){
        // 13 est le numero de la touche 'entrer'
        if (o.which == 13 || o.keyCode == 13){
            localStorage.setItem('objectif',o.target.innerText);
            objectif.blur();
        }
    }
    else{
        localStorage.setItem('object', o.target.innerText);
    }
}
// afficher ou configurer le nom quand la touche 
// entrer est pressee ou quand on clique sur autre chose
objectif.addEventListener('keypress',setObject);
objectif.addEventListener('blur',setObject);

getObjectif();
getName();
setTime();

