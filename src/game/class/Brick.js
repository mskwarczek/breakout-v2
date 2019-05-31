import { PALETTE }  from '../Global';

export default class Brick {
    constructor(CTX, positionX, positionY, width, height, type) {
        this.CTX = CTX;
        this.shape = 'rectangle';
        this._strength = 10;
        this.value = 10;
        this.position = {
            x: positionX,
            y: positionY
        };
        this.size = {
            x: width,
            y: height
        };
        this.type = type;
        this.fillStyle = PALETTE.baseBrickFillStyle;
        this.setParameters();
    };
    setParameters() {
        if (this.type > 8 ) {
            switch(this.type) {
                case 9:
                    this.strength = 50;
                    this.value = 20;
                    this.fillStyle = PALETTE.strongBrickFillStyle;
                    break;
                case 10:
                    this.value = 100;
                    this.fillStyle = PALETTE.valuableBrickFillStyle;
                    break;
                default: break;
            };
        };
    };
    get strength() {
        return this._strength;
    };
    set strength(value) {
        this._strength = value > 0
        ? value
        : 0;
    };
    draw() {
        if (this.strength > 0) {
            this.CTX.beginPath();
            this.CTX.rect(this.position.x, this.position.y, this.size.x, this.size.y);
            this.CTX.fillStyle = this.fillStyle;
            this.CTX.fill();
            this.CTX.closePath();
        };
    };
};