var ajout = document.getElementById("inputfield");
var list = document.getElementById("list");

function add(){
    if (ajout.value === '')
    {
        alert("L'ajout est vide!");
    }
    else{
        var li = document.createElement('li');
        li.innerHTML = ajout.value;
        li.value = ajout.value;
        list.appendChild(li);
        var span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.value = "\u00d7";
        li.appendChild(span);
    }
    ajout.value = "";
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

/*function saveData(){
    list.innerHTML = localStorage.getItem("data");
    
}
function afficher(){
    localStorage.setItem("data",list.innerHTML);

}

afficher();*/