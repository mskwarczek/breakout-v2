import Brick from './Brick';

export default class Line {
    constructor(CTX, FIELD_X, positionY, brickHeight) {
        this.CTX = CTX;
        this.FIELD_X = FIELD_X;
        this.positionY = positionY;
        this.padding = Math.floor((Math.random() * 3 ) + 1) * 5;
        this.brickData = {
            width: Math.floor((Math.random() * 4 ) + 2) * 20,
            height: brickHeight,
            type: Math.floor((Math.random() * 10 ) + 1)
        };
        this.brickCount = Math.floor(this.FIELD_X / (this.brickData.width + this.padding));
        this.sideMargin = (this.FIELD_X - (this.brickCount * (this.brickData.width + this.padding) - this.padding)) / 2;
        this.bricks = [];
        this.totalStrength = 0;
        this.generate();
        this.calculateStrength();
    };
    generate() {
        for (let i = 0; i < this.brickCount; i++) {
            this.bricks.push(new Brick(this.CTX, this.sideMargin + (this.brickData.width + this.padding) * i, this.positionY, this.brickData.width, this.brickData.height, this.brickData.type));
        };
    };
    calculateStrength() {
        this.totalStrength = this.bricks.reduce((total, brick) => total += brick.strength, 0);
    };
    draw() {
        this.bricks.forEach(brick => brick.draw());
    };
};
