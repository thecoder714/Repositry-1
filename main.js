var canvas = new fabric.Canvas("mycanvas");

var height = 150; 
var width = 130;
var block_height = 30;
var block_width = 30; 
var x = 10;
var y = 10;
var player, block_image;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img){
        player = Img;
        player.scaleToWidth(width);
        player.scaleToHeight(height);
        player.set({
            top: y,
            left: x
        });
        canvas.add(player);
    })
}

function block_update(block) {
    fabric.Image.fromURL(block, function (Img){
        block = Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top: y,
            left: x
        });
        canvas.add(block);
    })
}