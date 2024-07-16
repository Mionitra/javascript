var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var window_width = innerWidth;
var window_height = innerHeight;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "white";


let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
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
    constructor(){
        this.size = Math.random()* 10 + 20;
        this.x = Math.random()*window_width;
        this.y = Math.random()*window_height;
        this.trajetX = Math.random()*5 - 2;// il y a certains qui montent puisque il est possible que c'est negatif
        this.trajety = 1;
        
    }
    update(){
        this.y += this.trajety;
        this.x -= this.trajetX;
        if(this.y + this.size > window_height){
            this.trajety = -this.trajety * 0.98; 
        }
        else{
            this.trajety += 1;
        }
        if (this.x - this.size <0 || this.x + this.size >window_width){
            this.trajetX = -this.trajetX;
// si la particule hurte la partie haut ou bas, elle change de direction                
        }
        

    }
    draw(){
        c.beginPath();
        var color = randomColors(colors);
        c.fillStyle = "chartreuse";
        c.arc(this.x, this.y, this.size, Math.PI*2,false);
        c.stroke();
        c.fill();
    }
}

function randomColors(colors){
    return Math.floor[(Math.random()*colors.length)];
}

function initialization(){
    cercle = [];
    let nbr = ( window_width * window_height) / 5000;
    for (let i=0; i<100; i++){
        cercle.push(new Particules());
    }
}
initialization();

function animate(){
    c.clearRect(0,0,window_width,window_height);
    for(let i=0; i<cercle.length; i++){
        cercle[i].update();
        cercle[i].draw();

    }
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initialization();
});
canvas.addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

