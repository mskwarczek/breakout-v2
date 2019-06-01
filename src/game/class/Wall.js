import Line from './Line';

export default class Wall {
    constructor(CTX, FIELD_X, modX) {
        this.CTX = CTX;
        this.FIELD_X = FIELD_X;
        this.modX = modX;
        this.lineCount = Math.floor((Math.random() * 3 ) + 5);
        this.topMargin = 50;
        this.lineHeight = 20 * modX;
        this.padding = 10 * modX;
        this.lines = [];
        this.generate();
        this.calculateStrength();
    };
    generate() {
        for (let i = 0; i < this.lineCount; i++) {
            this.lines.push(new Line(this.CTX, this.FIELD_X, this.modX, this.topMargin + (this.lineHeight + this.padding) * i, this.lineHeight));
        };
    };
    calculateStrength() {
        return this.lines.reduce((total, line) => total += line.totalStrength, 0);
    };
    draw() {
        this.lines.forEach(line => line.draw());
    };
};
