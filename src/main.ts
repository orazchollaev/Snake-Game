// Select Canvas In DOM
const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const pointText = document.getElementById("point") as HTMLCanvasElement;

const buttons = document.querySelectorAll(".button");

const cellSize = 20;
canvas.width = cellSize * 16;
canvas.height = cellSize * 16;

const grid = new Grid(cellSize);
const snake = new Snake();
const food = new Food();

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pointText.innerHTML = `Point: ${snake.point}`

  snake.KeyPress();
  snake.Update(food)
  grid.Clear();


  grid.grid[food.x][food.y] = 2;

  snake.body.forEach(item => {
    grid.grid[item.x][item.y] = 1;  
  })

  grid.Draw(ctx);
}

loop();
setInterval(
loop,
100
)

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    if(button.innerHTML == "UP" && snake.direction != DIR.DOWN){
      snake.direction = DIR.UP;
    }else if(button.innerHTML == "Down" && snake.direction != DIR.UP){
      snake.direction = DIR.DOWN;
    }else if(button.innerHTML == "Left" && snake.direction != DIR.RIGHT){
      snake.direction = DIR.LEFT;
    }else if(button.innerHTML == "Right" && snake.direction != DIR.LEFT){
      snake.direction = DIR.RIGHT;
    }
  })
})