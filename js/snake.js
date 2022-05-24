class Snake{
    constructor(x,y,direction){
        this.nodes = new Array();
        this.nodes.push(new Node(x,y));
        this.nodes.push(new Node(x-1,y));
        this.nodes.push(new Node(x-2,y));
        // this.nodes.push(new Node(x-3,y));
        // this.nodes.push(new Node(x-4,y));
        this.direction = direction;
    }
    
    draw(){
        this.move();

        let color = {R:195,G:79,B:25};
        let lastNode, currentNode, nextNode;
        let border = 2;
        
        for(let i = 0; i < this.nodes.length ; i++){
            let borderR = border * 2;
            let borderL = border;
            let borderT = border;
            let borderB = border * 2;

            lastNode = this.nodes[i-1];
            currentNode = this.nodes[i];
            nextNode = this.nodes[i+1];
            
            // Nos fijamos en que direccion se estan tocando los nodos
            let touching = {
                right: false,
                left: false,
                top: false,
                bot: false
            }
            if(nextNode != undefined){
                checkDiff(currentNode.x - nextNode.x , currentNode.y - nextNode.y);
            }
            if(lastNode != undefined){
                checkDiff(currentNode.x - lastNode.x, currentNode.y - lastNode.y);
            }
            function checkDiff(x,y){
                if (x ==  1) touching.left = true;
                if (x == -1) touching.right = true;
                if (y ==  1) touching.top = true;
                if (y == -1) touching.bot = true; 
            }
            
            if(touching.right){
                borderR -= border;
            }
            if(touching.left){
                borderL -= border;
                borderR -= border;
            }
            if(touching.bot){
                borderB -= border;
            }
            if(touching.top){
                borderB -= border;
                borderT -= border;
            }
            
            ctx.shadowBlur = 0;
            // Fondo setting (bordes)
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.strokeStyle = "rgb(0,0,0)";
            ctx.fillRect(currentNode.gridX(), currentNode.gridY(),gridSize,gridSize);
            
            // Cuerpo setting
            ctx.fillStyle = "rgb("+color.R.toString()+","
                                  +color.G.toString()+","
                                  +color.B.toString()+")";
            ctx.strokeStyle = "rgb(0,0,0)";
            ctx.fillRect( currentNode.gridX() + borderL,
                        currentNode.gridY() + borderT,
                        gridSize - borderR,
                        gridSize - borderB);
            color.G += 3;
        }
    }

    move(){
        let x = 0;
        let y = 0;

        if (game.move == "ArrowLeft" && this.direction != "ArrowRight"){
            this.direction = game.move;               
        }
        if (game.move == "ArrowRight" && this.direction != "ArrowLeft"){
            this.direction = game.move;               
        }
        if (game.move == "ArrowDown" && this.direction != "ArrowUp"){
            this.direction = game.move;               
        }
        if (game.move == "ArrowUp" && this.direction != "ArrowDown"){
            this.direction = game.move;               
        }

        if (this.direction == "ArrowLeft"){
            x = -1;
        }
        if (this.direction == "ArrowRight"){
            x = 1;
        }
        if (this.direction == "ArrowUp"){
            y = -1;
        }
        if (this.direction == "ArrowDown"){
            y = 1;
        }

        // Recorro los nodos desde atras 
        // copiando las pos del siguiente nodo.
        for (let i = this.nodes.length - 1; i > 0; i--){
            this.nodes[i].x = this.nodes[i-1].x;
            this.nodes[i].y = this.nodes[i-1].y;
        }
        // Primer nodo (cabeza)
        let node = this.nodes[0];
        node.x += x;
        node.y += y;

        node.x = limits(node.x);
        node.y = limits(node.y);
        
        function limits(pos){
            if (pos == gridCount ){
            return 0;
            } else if (pos < 0){
            return gridCount - 1;
            } else {
            return pos;
            }
        }  
    }

    eat(){
        let lastNode = this.nodes[this.nodes.length - 1];
        this.nodes.push(new Node(lastNode.x,lastNode.y));
    }

    
};

class Node{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    gridX(){
        if (this.x == 0) return 0;
        return this.x * gridSize;
    }
    gridY(){
        if (this.y == 0) return 0;
        return this.y * gridSize;
    }
};