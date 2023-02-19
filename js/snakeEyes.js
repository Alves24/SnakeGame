class snakeEyes{
    draw(nodes, direction){
        var firstNode = nodes[0];
        var paintSize = gridSize / 15;
        
        // Calculamos el los puntos de dibujado (Centro del nodo)
        var startDrawPointX = (firstNode.gridX() + gridSize / 2) - paintSize;
        var startDrawPointY = (firstNode.gridY() + gridSize / 2) - paintSize;
        
        // Calculamos el los puntos de dibujado finales
        var distantFromCenter = gridSize / 4.5; // Distancia de separacion desde el punto central
        var distantEyes = gridSize / 2.5;       // Distancia de separacion entre los ojos
        var eyeX1, eyeX2, eyeY1, eyeY2;

        switch (direction) {
            case "ArrowLeft":
                startDrawPointX -= distantFromCenter;
                eyeX1 = startDrawPointX;
                eyeX2 = startDrawPointX;
                eyeY1 = startDrawPointY + distantEyes;
                eyeY2 = startDrawPointY - distantEyes;
                break;
            case "ArrowRight":
                startDrawPointX += distantFromCenter;
                eyeX1 = startDrawPointX;
                eyeX2 = startDrawPointX;
                eyeY1 = startDrawPointY + distantEyes;
                eyeY2 = startDrawPointY - distantEyes;
                break;
            case "ArrowUp":
                startDrawPointY -= distantFromCenter;
                eyeX1 = startDrawPointX + distantEyes;
                eyeX2 = startDrawPointX - distantEyes;
                eyeY1 = startDrawPointY;
                eyeY2 = startDrawPointY;
                break;
            case "ArrowDown":
                startDrawPointY += distantFromCenter;
                eyeX1 = startDrawPointX + distantEyes;
                eyeX2 = startDrawPointX - distantEyes;
                eyeY1 = startDrawPointY;
                eyeY2 = startDrawPointY;
                break;
        }

        // Dibujamos ojos
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillRect(eyeX1, eyeY1,paintSize * 2,paintSize * 2);
        ctx.fillRect(eyeX2, eyeY2,paintSize * 2,paintSize * 2);
    }
}