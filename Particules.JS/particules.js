// DOM
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var window_width = innerWidth;
var window_height = innerHeight;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "black";


// liste vide pour stocker les particules
let cercle = [];


class Particules{
    constructor(){
        this.size = Math.random()*5 + 3;
        this.x = Math.random()*window_width;
        this.y = Math.random()*window_height;
        this.trajetX = Math.random()*5 - 2;
        this.trajety = Math.random()*5 - 2;
        
    }
    update(){
        this.x -= this.trajetX;
        this.y -= this.trajety;
// si la particule hurte la partie gauche ou droite, elle change de direction       
        if (this.x - this.size <0 || this.x + this.size >window_width){
            this.trajetX = -this.trajetX;
// si la particule hurte la partie haut ou bas, elle change de direction                
        }
        if (this.y - this.size <0 || this.y + this.size >window_height){
            this.trajety = -this.trajety;
        }
// fonction qui dessine les particules
    }
    draw(){
        c.beginPath();
        c.fillStyle = "red";
        c.arc(this.x, this.y, this.size, Math.PI*2,false);
        c.fill();
    }
}
// fonction qui cree chacune des particules et l'ajoute dans la liste precedent
function creation(){
// ici on cree 300 particules
    for (let i=0; i<300; i++){
        cercle.push(new Particules());
    }
}
creation();

// animation des particules pour leurs mouvements
function animate(){
    c.clearRect(0,0,window_width,window_height);
    for(let i=0; i<cercle.length; i++){
// pour chacune des particules dans la liste, on les dessine et on etabli leur trajectoire
        cercle[i].update();
        cercle[i].draw();
// on regarde un par un la distance des particules
        for (let j=0; j<cercle.length; j++){
            let dx = cercle[j].x - cercle[i].x;
            let dy = cercle[j].y - cercle[i].y;
            let distance = Math.sqrt(dx*dx + dy*dy);
// si elles sont pres les un les autres, on cree un ligne entre eux
            if (distance < 80){
                c.beginPath();
                c.lineWidth = 2;
                c.strokeStyle = "#faebd72d";
                c.moveTo(cercle[j].x, cercle[j].y);
                c.lineTo(cercle[i].x, cercle[i].y);
                c.stroke();
            }
        }

    }
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


