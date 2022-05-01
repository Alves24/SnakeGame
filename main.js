const screenSize = 600;
const gridCount = 6;
let gridSize;
let ctx;
let snake;
let food;
let gameLogic;
let arrowKey;

window.onload = function(){
    gridSize = screenSize / gridCount;
    
    let canvas = document.getElementById('screen');
    let screenCenter = (screenSize / gridSize) / 2;
    canvas.width = screenSize;
    canvas.height = screenSize;
    ctx = canvas.getContext('2d');
    
    gameLogic = new GameLogic();
    snake = new Snake(screenCenter,screenCenter,"ArrowRight");
    food = new Food();

    setInterval(update,250);
};

document.onkeydown = function(event){
    if (event.key == "ArrowLeft"  || event.key == "ArrowDown" ||
        event.key == "ArrowRight" || event.key == "ArrowUp" )
        arrowKey = event.key;
};

function update(){
    gameLogic.checkEvents();
    draw();
}

function draw(){
    ctx.clearRect(0,0,screenSize,screenSize);
    food.draw();
    snake.draw(); 
}

