class Snake{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.direction = "ArrowRight";
    }

    // set direction(newDir){
    //     switch(this.direction){
    //         case "ArrowLeft":
    //             if(newDir != "ArrowRight") this.direction = newDir;
    //             break;
    //         case "ArrowUp":
    //             if(newDir != "ArrowDown") this.direction = newDir;
    //             break;
    //         case "ArrowRight":
    //             if(newDir != "ArrowLeft") this.direction = newDir;
    //             break;
    //         case "ArrowDown":
    //             if(newDir != "ArrowUp") this.direction = newDir;
    //             break;
    //         }
    // }
    // get direction() {
    //     return this.direction;
    // }

    move(){
        if (arrowKey == "ArrowLeft" && this.direction != "ArrowRight"){
            this.direction = arrowKey;               
        }
        if (arrowKey == "ArrowRight" && this.direction != "ArrowLeft"){
            this.direction = arrowKey;               
        }
        if (arrowKey == "ArrowDown" && this.direction != "ArrowUp"){
            this.direction = arrowKey;               
        }
        if (arrowKey == "ArrowUp" && this.direction != "ArrowDown"){
            this.direction = arrowKey;               
        }

        if (this.direction == "ArrowLeft"){
            this.x -= 1;
        }
        if (this.direction == "ArrowRight"){
            this.x += 1;
        }
        if (this.direction == "ArrowUp"){
            this.y -= 1;
        }
        if (this.direction == "ArrowDown"){
            this.y += 1;
        }

        ctx.fillStyle = "rgb(195,79,25)";
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillRect(this.x * gridSize,this.y * gridSize,gridSize,gridSize);
    };
}