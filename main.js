var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 100;
block_image_height = 100;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    


    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("P and shift is not not pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        console.log(block_image_height + block_image_width);
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("M and shift is not not pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        console.log(block_image_height + block_image_width);
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }

    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "82") {
        new_image("rr1.png");
        console.log("r");
    }
    if (keyPressed == "71") {
        new_image("gr.png");
        console.log("g");
    }
    if (keyPressed == "89") {
        new_image("yr.png");
        console.log("y");
    }
    if (keyPressed == "80") {
        new_image("pr.png");
        console.log("p");
    }
    if (keyPressed == "66") {
        new_image("br.png");
        console.log("b");
    }

}

function up() {
    if (player_y > 0) {
        player_y = player_y - block_image_height;
        console.log(player_y + player_x + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y < 440) {
        player_y = player_y + block_image_height;
        console.log(player_y + player_x + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_height;
        console.log(player_y + player_x + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x < 850) {
        player_x = player_x + block_image_height;
        console.log(player_y + player_x + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}