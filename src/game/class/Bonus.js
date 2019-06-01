import { PALETTE }  from '../Global';

export default class Bonus {
    constructor(CTX, modX, positionX, positionY) {
        this.CTX = CTX;
        this.position = {
            x: positionX,
            y: positionY
        };
        this.size = 15 * modX;
        this.speed = 4 * modX;
        this.numberOfTypes = 10;
        this.type = Math.floor((Math.random() * this.numberOfTypes) + 1);
        this.fillStyle = PALETTE.baseBonusFillStyle;
        this.generate();
    };
    generate() {
        switch(this.type) {
            case 1:
            case 2:
            case 3:
            case 4: this.fillStyle = PALETTE.powerDownBonusFillStyle; break;
            case 5:
            case 6:
            case 7: 
            case 8:
            case 9: this.fillStyle = PALETTE.powerUpBonusFillStyle; break;
            case 10: this.fillStyle = PALETTE.scoreBonusFillStyle; break;
            default: this.fillStyle = PALETTE.baseBonusFillStyle;
        };
    };
    move() {
        this.position.y += this.speed;
    };
    capture(paddle) {
        if (
            this.position.x - this.size < paddle.position.x + paddle.size.x &&
            this.position.x + this.size > paddle.position.x &&
            this.position.y + this.size + this.speed > paddle.position.y) {
                this.size = 0;
                return 'captured';
        } else if (
            this.position.y - this.size + this.speed > paddle.position.y + paddle.size.y) {
                return 'lost';
        };
    };
    draw() {
        this.CTX.beginPath();
        this.CTX.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2)
        this.CTX.fillStyle = this.fillStyle;
        this.CTX.fill();
        this.CTX.closePath();
    };
};