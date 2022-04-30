class Snake{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.direction = "ArrowRight";
        this.prevDirection = "ArrowLeft";
    }

    move(){
        switch(this.direction){
            case "ArrowLeft":
                if(prevDirection != "ArrowRight"){
                    this.x -= 1;
                    this.prevDirection = this.direction;
                }    
                break;
            case "ArrowUp":
                if(prevDirection != "ArrowDown") this.y -= 1;
                break;
            case "ArrowRight":
                if(prevDirection != "ArrowLeft") this.x += 1;
                break;
            case "ArrowDown":
                if(prevDirection != "ArrowUp") this.y += 1;
                break;
            }
        ctx.fillStyle = "rgb(195,79,25)";
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillRect(snake.x * gridSize,snake.y * gridSize,gridSize,gridSize);
    
    };
}