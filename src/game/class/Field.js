import { PALETTE }  from '../Global';

export default class Field {
    constructor(CTX, FIELD_X, FIELD_Y, color) {
        this.CTX = CTX;
        this.shape = 'field';
        this.size = {
            x: FIELD_X,
            y: FIELD_Y
        };
        this.fillStyle = color;
    };
    draw() {
        this.CTX.beginPath()
        this.CTX.rect(0, 0, this.size.x, this.size.y);
        this.CTX.strokeStyle = PALETTE.baseFieldStrokeStyle;
        this.CTX.lineWidth = 1;
        this.CTX.fillStyle = this.fillStyle;
        this.CTX.shadowColor = PALETTE.baseFieldShadowColor;
        this.CTX.shadowBlur = 20;
        this.CTX.shadowOffsetX = 15;
        this.CTX.shadowOffsetY = 15;
        this.CTX.fill();
        this.CTX.stroke();
        this.CTX.closePath();
    };
};
