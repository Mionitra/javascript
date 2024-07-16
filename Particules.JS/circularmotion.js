var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var window_width = innerWidth;
var window_height = innerHeight;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "whitesmoke";


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
        this.size = Math.random()*5 + 10;
        this.x = Math.random()*window_width;
        this.y = Math.random()*window_height;
        this.trajetX = Math.random()*5 - 2;// il y a certains qui montent puisque il est possible que c'est negatif
        this.trajety = Math.random()*2;
        
    }
    update(){
        this.y += this.trajety*0.2;
        if(this.y > window_height){
            this.y = 0;
        }
        if (this.y > window_height/4){
            c.beginPath();
            c.fillStyle = "rgba(60,40,180,0.7)";
            c.arc(this.x, this.y, this.size, Math.PI*2,false);
            c.fill();
        }
        if (this.y > window_height/3){
            c.beginPath();
            c.fillStyle = "rgba(160,20,10,0.5)";
            c.arc(this.x, this.y, this.size, Math.PI*2,false);
            c.fill();
        }
        if (this.y > window_height/2){
            c.beginPath();
            c.fillStyle = "rgba(200,20,10,0.5)";
            c.arc(this.x, this.y, this.size, Math.PI*2,false);
            c.fill();
        }

    }
    draw(){
        c.beginPath();
        c.fillStyle = "rgba(60,240,280,0.5)";
        c.arc(this.x, this.y, this.size, Math.PI*2,false);
        c.fill();
    }
}
var count = 0;
function initialization(){
    cercle = [];
    let nbr = ( window_width * window_height) /3000;
    for (let i=0; i<2000; i++){
        count += 2;
        if(count%15 == 0){
            cercle.push(new Particules());
        }
    }
}
initialization();
var count = 0;
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

