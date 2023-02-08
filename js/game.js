class Game{
    constructor(){
        this.move;
        this.points = 0;
        this.intervalId = null;
        this.speed = 300;

        this.snake = new Snake(screenCenter,screenCenter,"ArrowRight");
        this.food = new Food(this.snake);
    }

    pause(){
        if (this.intervalId == null){
            this.intervalId = setInterval(update, this.speed);
        }else{
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    checkEvents(){
        this.#win();
        this.#snakeEat();
        //this.#teleport();
    }

    restartGame(){
        this.points = 0;
        this.food = new Food(this.snake);
        this.snake = new Snake(screenCenter,screenCenter,"ArrowRight");
        update(); 
        this.pause();
    }

    #win(){
        if (this.snake.nodes.length == gridCount * gridCount){
            this.restartGame();
            this.pause();
        }
    }

    #snakeEat(){
        var node = this.snake.nodes[0]; //Cabeza de snake
        if (node.x == this.food.x && node.y == this.food.y){
            this.snake.eat();
            this.food.updatePos(this.snake);
            this.points += 10;
            let htmlPoints = document.getElementById('points');
            htmlPoints.textContent = "Points: " + this.points.toString();
        }
    }
}