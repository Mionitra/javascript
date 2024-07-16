var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var window_width = innerWidth;
var window_height = innerHeight;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "black";


let mouse = {
    x: undefined,
    y: undefined,
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
    constructor(){
        this.size = Math.random()*5 + 3;
        this.x = Math.random()*window_width;
        this.y = Math.random()*window_height;
        this.trajetX = Math.random()*5 - 2;// il y a certains qui montent puisque il est possible que c'est negatif
        this.trajety = Math.random()*3;
        
    }
    update(){
        this.y += this.trajety;
        if(this.y > window_height){
            this.y = 0;
        }

    }
    draw(){
        c.beginPath();
        c.fillStyle = "#eeeeeea2";
        c.arc(this.x, this.y, this.size, Math.PI*2,false);
        c.fill();
    }
}

function initialization(){
    cercle = [];
    let nbr = ( window_width * window_height) / 4000;
    for (let i=0; i<nbr; i++){
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
})

