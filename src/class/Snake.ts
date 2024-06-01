enum DIR{
    UP,
    DOWN,
    LEFT,
    RIGHT
}

interface ISnake{
    body: {
        x: number,
        y: number
    }[]

    direction: DIR,
    point: number,
}

class Snake implements ISnake{
    public body: {
        x: number,
        y: number
    }[] = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}]
    public direction: DIR = DIR.RIGHT;
    public point: number = 0;

    public Update(food: Food){
        this.body.shift();

        switch(this.direction){
            case DIR.UP:
                this.body.push({x: this.body[this.body.length - 1].x, y: this.body[this.body.length - 1].y - 1});
                break;
            case DIR.DOWN:
                this.body.push({x: this.body[this.body.length - 1].x, y: this.body[this.body.length - 1].y + 1});
                break;
            case DIR.LEFT:
                this.body.push({x: this.body[this.body.length - 1].x - 1, y: this.body[this.body.length - 1].y});
                break;
            case DIR.RIGHT:
                this.body.push({x: this.body[this.body.length - 1].x + 1, y: this.body[this.body.length - 1].y});
                break;
        }

        if(this.body[this.body.length - 1].x == 16)
            this.body[this.body.length - 1].x = 0
        else if(this.body[this.body.length - 1].x == -1)
            this.body[this.body.length - 1].x = 15

        if(this.body[this.body.length - 1].y == 16)
            this.body[this.body.length - 1].y = 0
        else if(this.body[this.body.length - 1].y == -1)
            this.body[this.body.length - 1].y = 15

        
        if(this.body[this.body.length - 1].x == food.x && this.body[this.body.length - 1].y == food.y){
            food.x = Math.floor(Math.random() * 16);
            food.y = Math.floor(Math.random() * 16);
            
            this.body.unshift({x: this.body[0].x, y: this.body[0].y});
            this.point += 1;
        }

        for(const i in this.body){
            // @ts-ignore
            if(i == this.body.length - 1) return;

            if(this.body[this.body.length - 1].x == this.body[i].x && this.body[this.body.length - 1].y == this.body[i].y){
                window.location.reload();
            }   
        }
    }

    public KeyPress(){
        document.addEventListener('keydown', (e)=>{
            
            switch(e.keyCode){
                case 37:
                    if(this.direction != DIR.RIGHT)
                    this.direction = DIR.LEFT;
                    break;
                case 38:
                    if(this.direction != DIR.DOWN)
                    this.direction = DIR.UP;
                    break;
                case 39:
                    if(this.direction != DIR.LEFT)
                    this.direction = DIR.RIGHT;
                    break;
                case 40:
                    if(this.direction != DIR.UP)
                    this.direction = DIR.DOWN;
                    break;
            }
        })
    }
}