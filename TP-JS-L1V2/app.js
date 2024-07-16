var tab = [1, 1.5, 2.0, 4, 18, -45, 80];
var s = 0;
for (var i=0; i<tab.length; i++) {
    s = s + tab[i];
}
console.log('La somme du tableau est '+ s);
var moyenne = (s / tab.length).toFixed(2);
console.log('La moyenne du tableau est '+ moyenne);
var mybtn = document.querySelector('#mybtn');
mybtn.addEventListener('click', function() {
    alert("coucou");
})
var mybtn1 = document.querySelector('#mybtn1');
mybtn1.addEventListener('click', function() {
    alert("Salut");
})
var btn = document.querySelector('#btn');
function coucou(event){
    event.preventDefault();
    var name = getData('#name');
    var email = documnet.querySelector('#email').value;
    var message = document.querySelector('#msg').value;
    alert(event);
}
function getData(){
    return document.querySelector(idValue).value;
}
btn.onclick = coucou;