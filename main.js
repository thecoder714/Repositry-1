canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverx = 300;
rovery = 400;
rover_width = 90;
rover_height = 90;
backImg = "mars.jpg";
roverImg = "rover.png";
images = ["Curiosity-1.jpeg","Curiosity-2.jpeg","Curiosity-3.jpeg","Curiosity-4.jpeg"];
random_Number = Math.floor(Math.random() * 4);
backImg = images[random_Number];
console.log(backImg);

function loadPage() {
    back = new Image();
    back.onload = loadBack()
    back.src = backImg;

    rover = new Image();
    rover.onload = loadRover()
    rover.src = roverImg;
}

function loadBack() {
    ctx.drawImage(back,0,0,canvas.width,canvas.height);
}

function loadRover() {
    ctx.drawImage(rover,roverx,rovery,rover_width,rover_height);
}

window.addEventListener("keydown", key);

function key(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if (keyPressed == '38') {
        UP();
        console.log("up");
    }
    if (keyPressed == '40') {
        DOWN();
        console.log("down");
    }
    if (keyPressed == '37') {
        LEFT();
        console.log("left");
    }
    if (keyPressed == '39') {
        RIGHT();
        console.log("right");
    }
}

function UP() {
    if (rovery >= 0) {
        rovery -= 10;
        console.log(roverx,rovery);
        loadBack();
        loadRover();
    }
}

function DOWN() {
    if (rovery <= 600) {
        rovery += 10;
        console.log(roverx,rovery);
        loadBack();
        loadRover();
    }
}

function LEFT() {
    if (roverx >= 0) {
        roverx -= 10;
        console.log(roverx,rovery);
        loadBack();
        loadRover();
    }
}

function RIGHT() {
    if (roverx <= 800) {
        roverx += 10;
        console.log(roverx,rovery);
        loadBack();
        loadRover();
    }
}

