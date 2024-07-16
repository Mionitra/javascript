var canvas = document.getElementById('canvas');

// utiliser la valeur totale de la page
var window_height = innerHeight;
var window_width = innerWidth;
// hauteur et largeur du canvas
canvas.width = window_width;
canvas.height = window_height;

// configurer l'arriere plann du canvas
canvas.style.background = "black";

let x = 50;
let y = 70;
 function draw()
 {
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');

    c.clearRect(0,0,canvas.width,canvas.height);

    c.fillStyle = 'red';
    c.fillRect(x, y, 50, 50);
    c.fill();

    x += 10;
    y += 10;
    if (x > innerWidth || y > innerHeight)
    {
        x += 10
        y -= 10;
    }
 }

 function animate(){
    window.requestAnimationFrame(animate);
    draw();
 }
 animate();

 for (let i = 0; i < 3; i++) {
   for (let j = 0; j < 4; j++) {
     const x = 25 + j * 50; // abscisse (x)
     const y = 25 + i * 50; // ordonnée (y)
     const radius = 20; // rayon d'arc
     const startAngle = 0; // Point de départ du cercle
     const endAngle = Math.PI + (Math.PI * j) / 2; // Point final pour le cercle
     const counterclockwise = i % 2 !== 0; // sens de rotation horaire ou non

     ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
   }
 }