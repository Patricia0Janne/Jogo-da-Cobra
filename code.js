const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const size = 30;

const snake= [
    { x: 210, y: 210}
];

let direction, loopId

const drawSnake = ()=> {
    ctx.fillStyle = "#ddd";
// for.Each percorre o array snake e desenha em casa posição com as 4 orientações dadas;
    snake.forEach((position, index) => {
        if(index == snake.length - 1){
            ctx.fillStyle = "white";

        }
        ctx.fillRect(position.x, position.y, size, size);//posições pra a função desenhar do array snake

    } )
}

const moveSnake = () => {
    if (!direction) return
   const head = snake[snake.length-1]; //snake.at(-1)

    snake.shift() //shift remove o ultimo elemento do array snake
    if(direction =="right"){
        snake.push({x: head.x + size, y: head.y});
    }
    if(direction =="left"){
        snake.push({x: head.x - size, y: head.y});
    }
    if(direction =="down"){
        snake.push({x: head.x, y: head.y + size});
    }
    if(direction =="up"){
        snake.push({x: head.x, y: head.y - size});
    }

}

const gameLoop = () => {
    clearInterval(loopId);
    ctx.clearRect(0, 0, 600, 600)

    moveSnake()
    drawSnake()

    loopId = setTimeout(() =>{
        gameLoop()
    }, 300)
}

gameLoop();

document.addEventListener("keydown", ({key}) =>{
    if(key == "ArrowRight" && direction != "left"){
        direction ="right";
    }
    if(key == "ArrowLeft" && direction != "right"){
        direction ="left";
    }
    if(key == "ArrowDown" && direction != "up"){
        direction ="down";
    }
    if(key == "ArrowUp" && direction != "down"){
        direction ="up";
    }

})