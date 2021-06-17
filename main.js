//canvas properties

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_img = "Car.gif";

//define car 1 properties

car1_width = 170;
car1_height = 70;
car1_img = "Car1.png";
car1_x = 10;
car1_y = 10;

//define car 2 properties

car2_width = 170;
car2_height = 70;
car2_img = "Car2.jpeg";
car2_x = 10;
car2_y = 100;

//load images

function loadPage() {
    back = new Image();
    back.onload = uploadBack;
    back.src = background_img;

    car1 = new Image();
    car1.onload = uploadCar1;
    car1.src = car1_img;

    car2 = new Image();
    car2.onload = uploadCar2;
    car2.src = car2_img;
}

//upload images

function uploadBack() {
    ctx.drawImage(back,0,0,canvas.width,canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2,car2_x,car2_y,car2_width,car2_height);
}

//add keypress to cars

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;

    //control for car 1

    if (keypressed == "38") {
        car1_up();
    }
    if (keypressed == "40") {
        car1_down();
    }
    if (keypressed == "37") {
        car1_left();
    }
    if (keypressed == "39") {
        car1_right();
    }

    //control for car 2

    if (keypressed == "87") {
        car2_up();
    }
    if (keypressed == "83") {
        car2_down();
    }
    if (keypressed == "65") {
        car2_left();
    }
    if (keypressed == "68") {
        car2_right();
    }

    //check who won

    if (car1_x >= 850) {
        document.getElementById("result").innerHTML = "Car 1 won!";
    }

    if (car2_x >= 850) {
        document.getElementById("result").innerHTML = "Car 2 won!";
    }
}

//car 1 control

function car1_up() {
    if (car1_y >= 0) {
        car1_y -= 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}

function car1_down() {
    if (car1_y <= 600) {
        car1_y += 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}

function car1_left() {
    if (car1_x >= 0) {
        car1_x -= 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}

function car1_right() {
    if (car1_x >= 0) {
        car1_x += 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}

//car 2 control

function car2_up() {
    if (car2_y >= 600) {
        car2_y -= 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}

function car2_down() {
    if (car2_y <= 0) {
        car2_y += 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x -= 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}

function car2_right() {
    if (car2_x >= 0) {
        car2_x += 10;
        uploadBack();
        uploadCar1();
        uploadCar2();
    }
}
