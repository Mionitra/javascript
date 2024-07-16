var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

window_width = window.innerWidth;
window_height = window.innerHeight;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "aqua";
/*
class Circle {
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = x;
        this.dy = y;
    }

    draw(context){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2,false);
        context.fill();
        context.closePath();

    }
    update(){
        this.x += 2;
        this.y += 2;

    }
}
*/
for (i=1 ; 1 <= 10; i++){
    var random_x = Math.random() * window_width;
var random_y = Math.random() * window_height;
var dx = Math.random() *window_width/5;
var dy = Math.random() *window_height/5;
let draw = function(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "white";
    context.fillRect(random_x, random_y, 200,200);
    context.fill();

    random_x += dx /10;
    random_y += dy /15;
    if(random_x>canvas.width)
    {
        random_x = 0;
        random_y = dy;
    }
    if(random_y>canvas.height)
    {
        random_y = 0;
        random_x = dx;
    }
    if(random_x + 200 < 0)
    {
        random_x = window_width;
    }
    if(random_y + 200 < 0)
    {
        random_y = window_height;
    }
}
draw();
}


let direction = function(){
    window.requestAnimationFrame(direction);
    draw();
}
direction();