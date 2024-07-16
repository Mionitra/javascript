/*var typed = new typed('.auto',{
    typeSpeed: 150,
    loop: false
})*/
var text = document.querySelectorAll('h2');
text.forEach( h2 =>{
    h2.innerHTML = h2.textContent.split('').map((text,wave)=>
    `<span style="transition-delay:${wave*25}ms">${text}</span>`).join('');
    ;
})

var text2 = document.querySelector(".second");
function textLoad(){
    setTimeout(()=>{
       text2.textContent = "Good" ;
    }, 0);
    setTimeout(()=>{
       text2.textContent = "Better" ;
    }, 4000);
    setTimeout(()=>{
       text2.textContent = "The Best" ;
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);