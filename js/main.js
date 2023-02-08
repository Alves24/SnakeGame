const screenSize = 600;
const gridCount = 10;
let screenCenter;
let gridSize;
let ctx;
let game;


window.onload = function(){
    gridSize = screenSize / gridCount;
    screenCenter = (screenSize / gridSize) / 2;
    
    let canvas = document.getElementById('screen');
    canvas.width = screenSize;
    canvas.height = screenSize;
    ctx = canvas.getContext('2d');

    game = new Game();
    draw();
};

document.onkeydown = function(event){
    if (event.key == "ArrowLeft"  || event.key == "ArrowDown" ||
        event.key == "ArrowRight" || event.key == "ArrowUp" )
        game.move = event.key;

    if (event.key == "Escape"){
        game.pause();
    }
};

function update(){
    draw();
    game.checkEvents();
}

function draw(){
    ctx.clearRect(0,0,screenSize,screenSize);
    game.food.draw();
    game.snake.draw(); 
}