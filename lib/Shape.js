class Shape {
    constructor() {
        this.color = new Color();
        this.position = new Vector2();
        this.size = new Vector2(10, 10);
    }

    draw(context) {
        const hex = this.color.toHex();
        console.log(hex);
        context.fillStyle = this.color.toHex();
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
