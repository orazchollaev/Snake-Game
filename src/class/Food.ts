class Food{
    public x: number = 0
    public y: number = 0
    public constructor() {
        this.x = Math.floor(Math.random() * 16);
        this.y = Math.floor(Math.random() * 16);
    }
}