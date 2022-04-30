const screenSize = 600;
const gridCount = 30;
let gridSize;
let ctx;
let snake;

window.onload = function(){
    gridSize = screenSize / gridCount;
    
    let canvas = document.getElementById('screen');
    let screenCenter = (screenSize / gridSize) / 2;
    canvas.width = screenSize;
    canvas.height = screenSize;
    snake = new Snake(screenCenter,screenCenter);
    ctx = canvas.getContext('2d');
    
    setInterval(update,200);
};

document.onkeydown = function(event){
    snake.direccion = event.key;
};

function update(){
    draw();
}

function draw(){
    snake.move(); 
}

