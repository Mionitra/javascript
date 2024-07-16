var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var window_width = innerWidth;
var window_height = innerHeight;

var gravity = 0.005;
var friction = 0.9999;

canvas.height = window_height;
canvas.width = window_width;


let mouse = {
    x: innerWidth /2,
    y: innerHeight / 2,
    rayon: window_width*(20/100)
}
let cercle = [];
let colors = ["'aqua'",
            "'chartreuse'",
            "'red'",
            "'yellow'",
            "'purple'",
            "'pink'"
];

class Particules{
    constructor(x,y,color,velocity,opacity){
        this.size = 1;
        this.x = x;
        this.y = y;
        this.color = color;
        this.opacity = 1;
        this.velocity = velocity;
        this.trajetX = Math.random()*5 - 2;// il y a certains qui montent puisque il est possible que c'est negatif
        this.trajety = Math.random()*3;
        
    }
    draw(){
        c.save();
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.size, Math.PI*2,false);
        c.fill();
        c.closePath();
        c.restore();
    }
    update(){
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.velocity.y += gravity;
        this.x += this.velocity.x ;
        this.y += this.velocity.y;
        this.opacity -= 0.005;
        
    }
}

function initialization(){
    cercle = [];
    
}
initialization();

function animate(){
    c.fillStyle = 'rgba(0, 0, 0, 0.05)';
    c.fillRect( 0, 0, window_width, window_width);
    requestAnimationFrame(animate);
    cercle.forEach((Particules, i) => {
        
        if (Particules.opacity > 0){
            Particules.update();

        }else{
            cercle.splice(i, 1);
        }
    })
}
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

addEventListener("click",(event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    
    var count = 400;
    var angle  = (Math.PI * 2) / count;

    for(let i=0; i<count; i++){
        cercle.push(new Particules(mouse.x,mouse.y,`hsl(${Math.random()*360}, 50%, 50%)`,{
            x:Math.cos(angle * i) * Math.random()*1.5,
            y:Math.sin(angle * i) * Math.random()*1.5
        }))
        cercle[i].draw();
    }
})