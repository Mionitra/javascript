var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

window_width = window.innerWidth;
window_height = window.innerHeight;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "black";
/*class Particles{
    constructor(sx,y,directionX,directionY,size){
        this.size = Math.random() * 5 + 3;
        this.x = Math.random() * (canvas.width - 50);
        this.y = Math.random() * (window_height - 50);
        this.directionX = Math.random() * 5 - 2.5;
        this.directionY = Math.random() * 5 - 2.5;
    }

    update(){
        this.x -= this.directionX;
        this.y -= this.directionY;

        if (this.x - this.size < 0 || this.x + this.size > canvas.width)
        {
            this.directionX = -this.directionX;
        }
        if (this.y - this.size < 0 || this.y + this.size > window_height)
        {
            this.directionY = -this.directionY;
        }
        
    }
    draw(){
        context.beginPath();
        context.fillStyle = "#fff";
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2,false);
        context.fill();
        context.closePath();
    }
}

const init = () => {
    let createParticle = (canvas.width * window_height) /3000;
    for (let i=0; i<createParticle; i++)
    {
        ParticlesArrays.push(new Particles());
    }
}

init();

let animate = () => {
    context.clearRect(0,0,canvas.width,window_height);
    for (let i=0; i< ParticlesArrays.length; i++){
        ParticlesArrays[i].update();
        ParticlesArrays[i].draw();
    }
    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize", () =>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})*/
/*var x = 0;
var y = 0;
let draw = function(){
        context.fillStyle = "#fff";
        context.arc(x, y, 20, 0, Math.PI * 2,false);
        context.arc(canvas.width, 0, 20, 0, Math.PI * 2,false);
        context.fill();
        x += 1;
        y += 1;
}
draw(context);
let animation = function(){
    requestAnimationFrame(animation);
    draw(context);
}
animation();*/
/*var x = canvas.width/2;
var y = 0;
let draw1 = function(){
        context.fillStyle = "#fff";
        context.arc(x, y, 20, 0, Math.PI * 2,false);
        context.fill();
        x -= 1;
        y += 1;
}
draw1(context);

let animation1 = function(){
    requestAnimationFrame(animation1);
    draw(context);
}
animation1();*/
// let particles = new Particles(200,200,100,100,20);
// particles.draw();

for (i=0; i<= 4; i++)
{
    for(j=0;i <= 4; i++)
    {
        context.fillStyle = "aqua";
        context.arc(50*i + 20,40*j + 20,20,0,Math.PI * 2,false);
        context.fill();

        

    }
}

/*for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
    context.fillStyle= "chartreuse" ;
      const x = 25 + j * 50; // abscisse (x)
      const y = 25 + i * 50; // ordonnée (y)
      const radius = 20; // rayon d'arc
      const startAngle = 0; // Point de départ du cercle
      const endAngle = Math.PI + (Math.PI * j) / 2; // Point final pour le cercle
      const counterclockwise = i % 2 !== 0; // sens de rotation horaire ou non
 
      context.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      context.fill();
    }
  }*/