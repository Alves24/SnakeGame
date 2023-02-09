class GraphicDetails{

    static drawSnakeEyes(nodes){
       
        var firstNode = nodes[0];
        var brushSize = 10;
        var startDrawPointX = (firstNode.gridX() + gridSize / 2) - brushSize;
        var startDrawPointY = (firstNode.gridY() + gridSize / 2) - brushSize;

        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillRect(startDrawPointX, startDrawPointY,brushSize * 2,brushSize * 2);

        
        console.log(firstNode);
        console.log(startDrawPointX);
    }
}