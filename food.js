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
        var max = (screenSize / gridSize) / 2;
        var min = 0; 
        this.x = Math.floor(Math.random() * (max - min) + min);
        this.y = Math.floor(Math.random() * (max - min) + min);
    }
}