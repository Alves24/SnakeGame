class Food{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.updatePos();
        this.draw();
    }

    draw(){
        ctx.fillStyle = "rgb(51,204,51)";
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillRect(this.x * gridSize,this.y * gridSize,gridSize,gridSize);
    }

    updatePos(){
        let max = screenSize / gridSize;
        let min = 0; 
        let x,y,space;
        do{
            x = Math.floor(Math.random() * (max - min) + min);
            y = Math.floor(Math.random() * (max - min) + min);  
              
            space = snake.nodes.find(p => p.x == x && p.y == y);
        } while(space != undefined);

        this.x = x;
        this.y = y;
    }
}