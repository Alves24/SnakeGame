class GameLogic{
    constructor(){
        this.points = 0;
    }

    checkEvents(){
        this.#hitTheWall();
        this.#snakeEat();
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
        var node = snake.nodes[0]; //Cabeza de snake
        if (node.x == food.x && node.y == food.y){
            snake.eat();
            food.updatePos();
            this.points += 10;
            let htmlPoints = document.getElementById('points');
            htmlPoints.textContent = "Points: " + this.points.toString();
        }
    }
}