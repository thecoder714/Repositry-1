canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function drawCirc(color,x,y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.arc(x,y,50,0, 2 * Math.PI);
    ctx.stroke();
}

function drawLogo() {
    drawCirc("black",500,300);
    drawCirc("blue",400,300);
    drawCirc("red",600,300);
    drawCirc("yellow",450,350);
    drawCirc("green",550,350)
}