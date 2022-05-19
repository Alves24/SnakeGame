class Game{
    
    constructor(){
        this.points = 0;
        this.intervalId = null;
        this.move;

        this.snake = new Snake(screenCenter,screenCenter,"ArrowRight");
        this.food = new Food(this.snake);
    }

    run(){
        if (this.intervalId == null){
            this.intervalId = setInterval(update,200);
        }else{
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    pause(){
        clearInterval(this.intervalId);
    }

    checkEvents(){
        this.#hitTheWall();
        this.#snakeEat();
    }

    restartGame(){
        
    }

    #hitTheWall(){
        // var node = snake.nodes[0];
        // let maxCordenates = screenSize / gridSize;
        // if(node.x < 0 || node.x > maxCordenates || node.y < 0 || node.y > maxCordenates){
        //     //The boluda snake hit the wall
        //     console.log("You Loose");
        // }
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