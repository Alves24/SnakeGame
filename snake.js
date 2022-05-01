class Snake{
    constructor(x,y,direction){
        this.nodes = new Array();
        this.nodes.push(new Node(x,y));
        this.nodes.push(new Node(x-1,y));
        this.nodes.push(new Node(x-2,y));
        this.nodes.push(new Node(x-3,y));
        this.nodes.push(new Node(x-4,y));
        this.direction = direction;
    }
    
    draw(){
        this.move();
        ctx.fillStyle = "rgb(195,79,25)";
        ctx.strokeStyle = "rgb(0,0,0)";
        this.nodes.forEach(function(node){ 
            ctx.fillRect(node.x * gridSize, node.y * gridSize,gridSize,gridSize);
        });
    }

    move(){
        let x = 0;
        let y = 0;

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
        this.nodes[0].x += x;
        this.nodes[0].y += y;
    }

    eat(){
        // let lastNode = this.nodes[this.nodes.length - 1];
        // let newNode =  {x : lastNode.x, y : lastNode.y};

        // switch (this.direction) {
        //     case "ArrowLeft":
        //         newNode.x += 1; 
        //         break;
        //     case "ArrowRight":
        //         newNode.x -= 1;
        //         break;
        //     case "ArrowUp":
        //         newNode.y += 1;
        //         break;
        //     case "ArrowDown":
        //         newNode.y -= 1;
        //         break;
        // }
        // console.log(newNode,lastNode);
        
        // this.nodes.push(newNode);
    }
};

class Node{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
};