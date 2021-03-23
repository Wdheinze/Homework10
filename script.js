var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 40;
var y = 40;
var x2 = 60;
var y2 = 60;
var square1;
var square2;

createSquares();
drawSquare();
setInterval(update, 1000 / 60);


function createSquares() {
    console.log(canvas);
    square1 = new square(x, y, 40, 40, "#FAC441");
    square2 = new square(x2, y2, 60, 60, "#D6565C");
}

function update() {
    drawSquare();
}
setInterval(moveOtherSquare, 5000 / 5);

function drawSquare() {
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}

function moveOtherSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {
    var didCollide = hasCollided(square1, square2);
    if (didCollide) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 205) + "," + Math.floor(Math.random() * 100) + "," + Math.floor(Math.random() * 325) + ")";

        square1.setWidth(square1.theWidth - 2);
        square1.setHeight(square1.theHeight - 2);
        square2.setWidth(square2.theWidth + 4);
        square2.setHeight(square2.theHeight + 5);
    }


    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    }
    if (actualLetter == "s") {
        moveDown();
    }
    if (actualLetter == "a") {
        moveLeft();
    }
    if (actualLetter == "d") {
        moveRight();
    }
    drawSquare();
}

//functions here

function moveUp() {
    square1.setY(square1.theY - 10);
}
function moveDown() {
    square1.setY(square1.theY + 10);
}
function moveLeft() {
    square1.setX(square1.theX - 10);
}
function moveRight() {
    square1.setX(square1.theX + 10);
}
drawSquare()

//collide 
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );

}


