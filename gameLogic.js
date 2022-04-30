class GameLogic{
    checkEvents(){
        this.#hitTheWall();
    }

    #hitTheWall(){
        let maxCordenates = screenSize / gridSize;
        if(snake.x <= 0 || snake.x >= maxCordenates ||snake.y <= 0 || snake.y >= maxCordenates){
            //The boluda snake hit the wall
            alert("You loose");
        }
    }


}