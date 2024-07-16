var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var window_width = innerWidth;
var window_height = innerHeight;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "aquamarine";


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
    constructor(x,y,color,velocity){
        this.size = 8;
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.trajetX = Math.random()*5 - 2;// il y a certains qui montent puisque il est possible que c'est negatif
        this.trajety = Math.random()*3;
        
    }
    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.size, Math.PI*2,false);
        c.fill();
    }
    update(){
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;

    }
}

function initialization(){
    cercle = [];
    
}
initialization();

function animate(){
    c.clearRect(0,0,window_width,window_height);
    cercle.forEach((Particules) => {
        Particules.update();
    })
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

addEventListener("mousemove",(event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    var count = 400;
    var angle  = (Math.PI * 2) / count;

    for(let i=0; i<count; i++){
        cercle.push(new Particules(mouse.x,mouse.y,'rgba(81, 253, 20, 0.05)',{
            x:Math.cos(angle * i),
            y:Math.sin(angle * i)
        }))
        cercle[i].draw();
    }
})