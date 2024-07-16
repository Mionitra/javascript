var canvas = document.getElementById('canvas');
var particles = [];
var tick = 0;

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
// utiliser la valeur totale de la page
var window_height = innerHeight;
var window_width = innerWidth;
// hauteur et largeur du canvas
canvas.width = window_width;
canvas.height = window_height;



function createParticles(){
    if (tick % 10 == 0)
    {
        if (particles.length < 100)
        {
            particles.push({
                x: Math.random()*canvas.width,
                y : 0,
                speed : 2+ Math.random()*3,
                radius: 5+Math.random()*5,
                color:"white",
            });
        }
    }
}
var i;
var part;
function updateParticles(){
    for (var i in particles)
    {
        var part = particles[i];
        part.y += part.speed;
    }
}
function killParticles(){
    for (var i in particles){
        var part = particles [i];
        if (part.y > canvas.height){
            part.y = 0;
        }
    }
}
function drawParticles(){
    var c = canvas.getContext('2d');
    canvas.style.background = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
    for(var i in particles){
        var part = particles[i];
        c.fillArc(20, 20, 20, 0, Math.PI*2,false);
        c.fillStyle = part.color;
        c.fill();

    }
    

}

function loop() {
    window.requestAnimationFrame(loop);
    createParticles();
    updateParticles();
    killParticles();
    drawParticles();
}
window.requestAnimationFrame(loop);
