var square=""
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 
var x = 50;
var y = 50;
var x2 = 150;
var y2 = 100;
ctx.fillStyle = "#FAC441";
createSquares();
drawSquare();
setInterval(update, 1000/60);

function createSquares() {
    square1 = new Square(x, y, 40, 40, "#FAC441");
    square2 = new Square(x2, y2, 60, 60, "#D6565C");
}
function update()
    {
        drawSquare();
    }
    setInterval(moveOtherSquare, 3000/60);

    function drawSquare()
    {
        ctx.clearRect(0, 0, 700, 900);
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

    $(document).ready(function(){
        $(this).keypress(function(event){
            getKey(event);
        });
    });
    
    function getKey(event)
{
  
  var didCollide = hasCollided(square1, square2);
  if (didCollide) {
   canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
 
    square1.setWidth(square1.theWidth - 2);
    square1.setHeight(square1.theHeight -2);
    square2.setWidth(square2.theWidth + 4);
    square2.setHeight(square2.theHeight + 5);
}


        var char = event.which || event.keyCode;
        var actualLetter = String.fromCharCode(char);
        if(actualLetter == "w")
        {
            moveUp();
        }
        if(actualLetter == "s")
        {
            moveDown();
        }
        if(actualLetter=="a"){
            moveLeft();
        }
        if(actualLetter=="d"){
            moveRight
        }
        drawSquare();
    }

    //functions here
    
    function moveUp()
    {
        y-=10;
    }
    function moveDown()
    {
        y+=10; 
     }
    function moveLeft()
    {
        x+=10;
    }
    function moveRight()
    {
        x-=10;
    }
    //collide 
    function hasCollided(object1, object2) {
        return !(
            ((object1.y + object1.height) < (object2.y)) ||
            (object1.y > (object2.y + object2.height)) ||
            ((object1.x + object1.width) < object2.x) ||
            (object1.x > (object2.x + object2.width))
        );
    }