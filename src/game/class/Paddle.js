export default class Paddle {
    constructor(CTX, FIELD_X, FIELD_Y, modX, width, speed, color) {
        this.CTX = CTX;
        this.FIELD_X = FIELD_X;
        this.shape = 'rectangle';
        this.size = {
            x: width,
            y: 10 * modX
        };
        this.position = {
            x: (FIELD_X - this.size.x) / 2,
            y: FIELD_Y - this.size.y
        };
        this.speed = {
            dx: speed
        };
        this.isMoving = {
            right: false,
            left: false
        };
        this.fillStyle = color;
    };
    move() {
        if (this.isMoving.right && (this.position.x + this.size.x) < this.FIELD_X) {
            this.position.x += this.speed.dx;
        }
        else if (this.isMoving.left && this.position.x > 0) {
            this.position.x -= this.speed.dx;
        };
    };
    draw() {
        this.CTX.beginPath();
        this.CTX.rect(this.position.x, this.position.y, this.size.x, this.size.y);
        this.CTX.fillStyle = this.fillStyle;
        this.CTX.fill();
        this.CTX.closePath();
    };
};
