canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");    
color = "black";
width_of_line = 2;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
var lastx;
var lasty;
var currentx;
var currenty;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touchstart);
canvas.addEventListener("touchmove", touchmove)

function touchstart(e) {
    console.log("touchstart");
    lastx = e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;
}

function touchmove(e) {
    console.log("touchmove");
    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientX - canvas.offsetLeft;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log(lastx,lasty);
    ctx.moveTo(lastx,lasty);
    console.log(currentx,currenty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke()
    lastx = currentx;
    lasty = currenty;
}
