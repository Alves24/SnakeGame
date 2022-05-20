const screenSize = 600;
const gridCount = 12;
let screenCenter;
let gridSize;
let ctx;

let game;

function NuevaFuncion(){
    return "Prueba Git VScode";
}

window.onload = function(){
    gridSize = screenSize / gridCount;
    screenCenter = (screenSize / gridSize) / 2;
    
    let canvas = document.getElementById('screen');
    canvas.width = screenSize;
    canvas.height = screenSize;
    ctx = canvas.getContext('2d');

    game = new Game();
    draw();
    // game.run();
};

document.onkeydown = function(event){
    if (event.key == "ArrowLeft"  || event.key == "ArrowDown" ||
        event.key == "ArrowRight" || event.key == "ArrowUp" )
        game.move = event.key;

    if (event.key == "Escape"){
        game.run();
    }
};

function update(){
    game.checkEvents();
    draw();
}

function draw(){
    ctx.clearRect(0,0,screenSize,screenSize);
    game.food.draw();
    game.snake.draw(); 
}