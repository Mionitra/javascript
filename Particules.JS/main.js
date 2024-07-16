let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
// utiliser la valeur totale de la page
var window_height = innerHeight;
var window_width = innerWidth;
// hauteur et largeur du canvas
canvas.width = window_width;
canvas.height = window_height;

// configurer l'arriere plann du canvas
 canvas.style.background = "black";

 // classe qui gerera les particules
class Particules{
    //constructeurs (arguments ou prorietes)
    constructor(pos_x,pos_y, taille, couleur, trajet){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.taille = taille;
        this.couleur = couleur;
        this.trajet = trajet;
        this.new_x = 1 * this.trajet;
        this.new_y = 1 * this.trajet;
    }
    // fonction draw qui dessinera les particules

    /*creation(){
        var context = canvas.getContext('2d');
    
        let random_x = Math.random() * innerWidth;
        let random_y = Math.random() * innerHeight;

        context.strokeStyle = "blue";
        context.lineWidth = 10;
        context.arc(random_x,random_y, 2, 0, Math.PI * 2,false);
        context.stroke();
    }*/
    update(){
        random_x += this.new_x;
        random_y += this.new_y;
    }
    
}
/*
let random_x = Math.random() * innerWidth;
let random_y = Math.random() * innerHeight;

let circle = new Particules(random_x,random_y,20,"powderblue",2);
circle.creation();*/

let random_x = Math.random() * innerWidth;
let random_y = Math.random() * innerHeight;
let dx = Math.random() * 5 - 2.5;
let dy = Math.random() * innerHeight;
function creation(){
        var c = canvas.getContext('2d');
    

        c.clearRect(0,0,window_width,window_height);

        c.fillStyle = "blue";
        c.lineWidth = 10;
        c.fillRect(random_x,random_y, 200, 200);
        c.fill();
        random_x += 1;
        random_y += 2;
        if ( random_x + 200 > canvas.width)
        {
            random_y = 0;

        }
        if ( random_y + 200 > canvas.height)
        {
            random_x += 0;
            
        }
        
}
creation();
function creation1(){
        var c = canvas.getContext('2d');
    

        c.clearRect(0,0,window_width,window_height);

        c.fillStyle = "blue";
        c.lineWidth = 10;
        c.fillRect(random_x,random_y, 200, 200);
        c.fill();
        random_x += 1;
        random_y += 1;
        
}
creation1();
function creation3(){
        var c = canvas.getContext('2d');
    

        c.clearRect(0,0,window_width,window_height);

        c.fillStyle = "blue";
        c.lineWidth = 10;
        c.fillRect(random_x,random_y, 200, 200);
        c.fill();
        random_x += 1;
        random_y += 1;
        
}
creation3();
function creation4(){
        var c = canvas.getContext('2d');
    

        c.clearRect(0,0,window_width,window_height);

        c.fillStyle = "blue";
        c.lineWidth = 10;
        c.fillRect(random_x,random_y, 200, 200);
        c.fill();
        random_x += 1;
        random_y += 1;
        
}
creation4();


function animate(){
    window.requestAnimationFrame(animate);
    creation();
    creation1();
    creation4();
    creation3();
    
    if (random_y > canvas.height)
        {
            random_y = -0;
            creation();
        }
    if (random_x > canvas.width)
    {
        random_x = -0;
    }
}
animate();
tick = 0;
particles = [];
function createParticles(){
    if (tick % 10 == 0)
    {
        if (particles.length < 100)
        {
            particles.push({
                x: Math.random()*canvas.width,
                y : 0,
                speed : 2+ Math.random()*3,//entre 1 et 2
                radius: 5+Math.random()*5,//entre 1 et 5
                color:"white",
            });
        }
    }
}
function drawParticles(){
    var c = canvas.getContext('2d');
    c.fillRect(0,0,canvas.width,canvas.height);
    for(var i in particles){
        var part = particles[i];
        c.clearRect(0,0,window_width,window_height);

        c.fillStyle = "blue";
        c.lineWidth = 10;
        c.fillRect(random_x,random_y, 20, 20);
        c.fill();
        random_x += 1;
        random_y += 1;

    }
    

}
function loop() {
    window.requestAnimationFrame(loop);
    createParticles();
    
}
window.requestAnimationFrame(loop);

document.addEventListener('onclick', (event) => {
    if (event.key === 'ArrowLeft'){
        random_x -= 1;
    }
    else if (event.key === 'ArrowRight'){
        random_x += 1;
    }
    else if (event.key === 'ArrowUp'){
        random_y -= 1;
    }
    else if (event.key === 'ArrowDown'){
        random_y += 1;
    }
});






