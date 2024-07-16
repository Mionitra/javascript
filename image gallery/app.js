var container = document.querySelector(".gallery");
var back = document.getElementById("back");
var next = document.getElementById("next");

function nextBtn(){
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += 200;
}
function backBtn(){
    container.scrollLeft -= 200;
    container.style.scrollBehavior = "smooth";
}
