// fonction qui permettra de diminuer la valeur
var compteur = 0;
function diminuer(){
    compteur = compteur - 1;
/* getElementById: prendre l'element de l'id dans l'html
innerHTML: affecter l'html par le compteur*/
    document.getElementById('compteur').innerHTML = compteur;
}
function ajouter(){
    compteur = compteur + 1;
    document.getElementById('compteur').innerHTML = compteur
}
var canvas = document.createElement('canvas');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

window_width = window.innerWidth;
window_height = wiindow.innerHeight;

canvas.width = window_width;
canvas.height =window_height;


canvas.style.background = "purple";

document.body.appendChild(canvas);
// send message
/*var childWindow = window.open("http://receiver.com", "_blank");

var btn = document.getElementById("btn");
var text = document.getElementById("text");
btn.addEventListener("click", function () {
    sendMessage(text.value);
    text.value = "";
});*/
function draw() {
    var canvas = document.getElementById('main');

    if (canvas.getContext){
        var ctx= canvas.getContext('2d');
// rectangle avec un remplissage orange
       /* ctx.fillStyle = "rgb(255, 195, 0)";
        ctx.strokeStyle = "rgb(142, 68, 173)";
        ctx.fillRect (0,10,70,50);

// rectangle qui coupe le rectangle precedent
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
// rectangle avec contour
        ctx.strokeStyle = "rgb(135, 12, 24)";
        ctx.strokeRect(70,70,30,30);
        ctx.fillStyle = "rgb(255, 195, 0)";
        ctx.fillRect(70,70,30,30);

        ctx.beginPath();
        ctx.moveTo(35, 30);
        ctx.lineTo(300, 75);
        ctx.lineTo(500, 25);
        ctx.fill();*/
/*// smiley
        ctx.beginPath();
    ctx.arc(75, 70, 50, 0, Math.PI * 2, true); // Cercle extérieur
    ctx.moveTo(40, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Bouche (sens horaire)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Oeil gauche
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Oeil droite
    ctx.stroke();
    ctx.fillStyle = "rgb(24, 190, 152 )"
    ctx.strokeStyle = "rgb(255 ,25, 25)"
    }*/


/*
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          ctx.beginPath();
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
      }*/
       // Exemples de courbes quadratiques
   /* ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
 // courbe de bezier
    ctx.beginPath();
   ctx.moveTo(75, 40);
   ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
   ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
   ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
   ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
   ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
   ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
   ctx.fill();*/
//couleur
   var degrade = ctx.createLinearGradient(0, 0, 200, 0);
degrade.addColorStop(0, "green");
degrade.addColorStop(1, "white");
ctx.fillStyle = degrade;
ctx.fillRect(10, 10, 200, 100);

   
  
      rectArrondi(ctx, 12, 12, 150, 150, 15);
      rectArrondi(ctx, 19, 19, 150, 150, 9);
      rectArrondi(ctx, 53, 53, 49, 33, 10);
      rectArrondi(ctx, 53, 119, 49, 16, 6);
      rectArrondi(ctx, 135, 53, 49, 33, 10);
      rectArrondi(ctx, 135, 119, 25, 49, 10);
  
      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(31, 37);
      ctx.fill();
  
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }
  
      for (i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }
  
      for (i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }
  
      ctx.beginPath();
      ctx.moveTo(83, 116);
      ctx.lineTo(83, 102);
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      ctx.lineTo(111, 116);
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill();
  
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();
  
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  
  // Une fonction utilitaire pour tracer des rectangles avec des coins arrondis
  
  function rectArrondi(ctx, x, y, largeur, hauteur, rayon) {
    ctx.beginPath();
    ctx.moveTo(x, y + rayon);
    ctx.lineTo(x, y + hauteur - rayon);
    ctx.quadraticCurveTo(x, y + hauteur, x + rayon, y + hauteur);
    ctx.lineTo(x + largeur - rayon, y + hauteur);
    ctx.quadraticCurveTo(
      x + largeur,
      y + hauteur,
      x + largeur,
      y + hauteur - rayon,
    );
    ctx.lineTo(x + largeur, y + rayon);
    ctx.quadraticCurveTo(x + largeur, y, x + largeur - rayon, y);
    ctx.lineTo(x + rayon, y);
    ctx.quadraticCurveTo(x, y, x, y + rayon);
    ctx.stroke();
  }


