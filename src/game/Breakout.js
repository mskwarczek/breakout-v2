import React from 'react';

import { getWindowSize } from '../common/tools';
import { CONFIG, PALETTE } from './Global';
import Field from './class/Field';
import Paddle from './class/Paddle';
import Ball from './class/Ball';
import Wall from './class/Wall';
import Bonus from './class/Bonus';

export default class Breakout extends React.Component {
    constructor(props) {
        super();
        this.c = {}; // Internal state of game
    };

    componentDidMount() {
        const CANVAS = this.refs.canvas;
        const CTX = CANVAS.getContext('2d');
        const FIELD_X = CANVAS.width;
        const FIELD_Y = CANVAS.height;
        this.run(CTX, FIELD_X, FIELD_Y);
    };

    run(CTX, FIELD_X, FIELD_Y) {
        this.c  = {
            CTX,
            FIELD_X,
            FIELD_Y,
            field: new Field(CTX, FIELD_X, FIELD_Y, PALETTE.baseFieldFillStyle),
            wall: new Wall(CTX, FIELD_X),
            paddle: new Paddle(CTX, FIELD_X, FIELD_Y, CONFIG.basePaddleWidth, CONFIG.basePaddleSpeed, PALETTE.basePaddleFillStyle),
            balls: [new Ball(CTX, FIELD_X, FIELD_Y, CONFIG.baseBallSize, CONFIG.baseBallSpeed, CONFIG.baseBallPower, PALETTE.baseBallFillStyle)],
            bonus: [],
            level: CONFIG.baseLevel,
            lives: CONFIG.baseLives,
            score: CONFIG.baseScore,
            multiplier: CONFIG.baseMultiplier,
            levelBallSpeed: CONFIG.baseBallSpeed,
            levelMultiplier: CONFIG.baseMultiplier,
            alertText: '',
            alertColor: PALETTE.baseAlertFillStyle,
            pause: true
        };
        this.draw();
        this.addListeners();
        this.pause();
    };

    draw() {
        this.c.CTX.font = '16px Arial';
        this.c.CTX.fillStyle = PALETTE.baseTextFillStyle;
        this.c.CTX.fillText('Score: ' + this.c.score, 10, 20);
        this.c.CTX.fillText('Multiplier: ' + this.c.multiplier, 140, 20);
        this.c.CTX.fillText('Lives: ' + this.c.lives, this.c.FIELD_X - 160, 20);
        this.c.CTX.fillText('Level: ' + this.c.level, this.c.FIELD_X - 80, 20);
        this.c.CTX.fillStyle = this.c.alertColor;
        this.c.CTX.fillText(this.c.alertText, (this.c.FIELD_X / 2) - 40, 20);
    };

    addListeners = () => {
        document.addEventListener('keydown', this.keyDownHandler, false);
        document.addEventListener('keyup', this.keyUpHandler, false);
    };

    keyDownHandler = (event) => {
        if (event.key === 'ArrowRight' || event.key === 'Right') {
            this.c.paddle.isMoving.right = true;
        }
        else if (event.key === 'ArrowLeft' || event.key === 'Left') {
            this.c.paddle.isMoving.left = true;
        }
        else if (event.key === ' ' || event.code === 'Space') {
            if (this.c.pause === true) {
                this.c.pause = false;
                this.play();
            }
            else {
                this.c.pause = true;
                this.pause();
            };
        };
    };

    keyUpHandler = (event) => {
        if (event.key === 'ArrowRight' || event.key === 'Right') {
            this.c.paddle.isMoving.right = false;
        }
        else if (event.key === 'ArrowLeft' || event.key === 'Left') {
            this.c.paddle.isMoving.left = false;
        };
    };

    applyBonus = (type) => {
        switch (type) {
            case 1:
                this.c.balls.forEach(ball => {
                    ball.speed.dx = ball.speed.dx > 0
                        ? this.c.levelBallSpeed + 2
                        : -this.c.levelBallSpeed - 2;
                    ball.speed.dy = ball.speed.dy > 0
                        ? this.c.levelBallSpeed + 2
                        : -this.c.levelBallSpeed - 2;
                    ball.fillStyle = "aqua";
                });
                this.c.alertText = 'Fast balls!';
                this.c.alertColor = PALETTE.negativeAlertFillStyle;
                break;
            case 2:
                this.c.paddle.size.x = CONFIG.basePaddleWidth / 2;
                this.c.alertText = 'Tiny paddle!';
                this.c.alertColor = PALETTE.negativeAlertFillStyle;
                break;
            case 3:
                this.c.balls.forEach(ball => ball.power = CONFIG.baseBallPower / 2);
                this.c.alertText = 'Weak balls!';
                this.c.alertColor = PALETTE.negativeAlertFillStyle;
                break;
            case 4:
                this.c.balls.forEach(ball => ball.size = CONFIG.baseBallSize / 2);
                this.c.alertText = 'Small balls!';
                this.c.alertColor = PALETTE.negativeAlertFillStyle;
                break;
            case 5:
                this.c.balls.forEach(ball => ball.size = CONFIG.baseBallSize * 2);
                this.c.alertText = 'Big balls!';
                this.c.alertColor = PALETTE.positiveAlertFillStyle;
                break;
            case 6:
                this.c.paddle.size.x = CONFIG.basePaddleWidth * 1.5;
                this.c.alertText = 'Big paddle!';
                this.c.alertColor = PALETTE.positiveAlertFillStyle;
                break;
            case 7:
                this.c.balls.forEach(ball => {
                    ball.speed.dx = ball.speed.dx > 0
                        ? this.c.levelBallSpeed - 1.5
                        : -this.c.levelBallSpeed + 1.5;
                    ball.speed.dy = ball.speed.dy > 0
                        ? this.c.levelBallSpeed - 1.5
                        : -this.c.levelBallSpeed + 1.5;
                    ball.fillStyle = "darkblue";
                });
                this.c.alertText = 'Slow balls!';
                this.c.alertColor = PALETTE.positiveAlertFillStyle;
                break;
            case 8:
                this.c.balls.forEach(ball => {
                    ball.power = CONFIG.baseBallPower * 10;
                    ball.fillStyle = "red";
                });
                this.c.alertText = 'Powerfull balls!';
                this.c.alertColor = PALETTE.positiveAlertFillStyle;
                break;
            case 9:
                this.c.balls.push(new Ball(this.c.CTX, this.c.FIELD_X, this.c.FIELD_Y, CONFIG.baseBallSize, this.c.levelBallSpeed, CONFIG.baseBallPower, PALETTE.baseBallFillStyle, this.c.balls[0].position.x));
                this.c.balls.push(new Ball(this.c.CTX, this.c.FIELD_X, this.c.FIELD_Y, CONFIG.baseBallSize, this.c.levelBallSpeed, CONFIG.baseBallPower, PALETTE.baseBallFillStyle, this.c.paddle.position.x));
                this.c.alertText = 'Multiple balls!';
                this.c.alertColor = PALETTE.positiveAlertFillStyle;
                break;
            case 10: 
                this.c.multiplier = this.c.levelMultiplier * 10;
                this.c.alertText = 'Multiplier x 10!';
                this.c.alertColor = PALETTE.positiveAlertFillStyle;
                break;
            default: console.error('Unknown bonus type in function applyBonus');
        };
    };

    gameover = (level, score) => {
        this.props.goToGameover(level, score);
    };

    pause = () => {
        this.c.CTX.clearRect(0, 0, this.c.FIELD_X, this.c.FIELD_Y);
        this.c.field.draw();
        this.draw();
        this.c.wall.draw();
        this.c.paddle.draw();
        this.c.balls.forEach(ball => ball.draw());
        this.c.bonus.forEach(bonus => bonus.draw());
    };

    play = () => {
        this.c.CTX.clearRect(0, 0, this.c.FIELD_X, this.c.FIELD_Y);

        this.c.field.draw();

        this.draw();

        this.c.wall.draw();

        this.c.paddle.draw();
        this.c.paddle.move();

        this.c.balls.forEach((ball, index) => {
            ball.draw();
            ball.move();
            ball.collision(this.c.paddle);
            this.c.wall.lines.forEach((line, ) => {
                line.bricks.forEach((brick) => {
                    if (ball.collision(brick) === 'hit') {
                        this.c.score += brick.value * this.c.multiplier;
                        if (Math.floor(Math.random() * 10) < CONFIG.bonusDropRate) {
                            this.c.bonus.push(new Bonus(this.c.CTX, ball.position.x, ball.position.y));
                        };
                    };
                });
            });
            if (ball.collision(this.c.field) === 'lost') {
                this.c.balls.splice(index, 1);
            };
        });

        this.c.bonus.forEach((bonus, index, array) => {
            bonus.draw();
            bonus.move();
            if (bonus.capture(this.c.paddle) === 'captured') {
                this.applyBonus(bonus.type);
                array.splice(index, 1);
            } else if (bonus.capture(this.c.paddle) === 'lost') {
                array.splice(index, 1);
            };
        });

        this.c.wall.lines.forEach(line => line.calculateStrength());
        if (this.c.wall.calculateStrength() === 0) {
            this.c.levelBallSpeed = CONFIG.baseBallSpeed + (this.c.level * CONFIG.ballSpeedIncrease);
            this.c.levelMultiplier = CONFIG.baseMultiplier + (this.c.level * CONFIG.multiplierIncrease)
            this.c.paddle = new Paddle(this.c.CTX, this.c.FIELD_X, this.c.FIELD_Y, CONFIG.basePaddleWidth, CONFIG.basePaddleSpeed, PALETTE.basePaddleFillStyle);
            this.c.balls = [new Ball(this.c.CTX, this.c.FIELD_X, this.c.FIELD_Y, CONFIG.baseBallSize, this.c.levelBallSpeed, CONFIG.baseBallPower, PALETTE.baseBallFillStyle)];
            this.c.wall = new Wall(this.c.CTX, this.c.FIELD_X);
            this.c.score += this.c.level * 1000;
            this.c.level += 1;
            this.c.multiplier = this.c.levelMultiplier;
            this.c.alertText = 'Next level!';
            this.c.alertColor = PALETTE.baseAlertFillStyle;
            this.c.pause = true;
            this.pause();
        };

        if (this.c.balls.length === 0) {
            this.c.paddle = new Paddle(this.c.CTX, this.c.FIELD_X, this.c.FIELD_Y, CONFIG.basePaddleWidth, CONFIG.basePaddleSpeed, PALETTE.basePaddleFillStyle);
            this.c.balls = [new Ball(this.c.CTX, this.c.FIELD_X, this.c.FIELD_Y, CONFIG.baseBallSize, this.c.levelBallSpeed, CONFIG.baseBallPower, PALETTE.baseBallFillStyle)];
            this.c.multiplier = this.c.levelMultiplier;
            this.c.lives -= 1;
            this.c.alertText = 'Ball lost.';
            this.c.alertColor = PALETTE.baseAlertFillStyle;
            this.c.pause = true;
            this.pause();
            if (this.c.lives === 0) this.gameover(this.c.level, this.c.score);
        };

        // Hack for test purposes
        //this.c.paddle.position.x = this.c.balls[0].position.x - (this.c.paddle.size.x / 2);
        if (this.c.pause !== true) requestAnimationFrame(this.play);
    };

    render() {
        return (
            <div className='canvas-container'>
                <canvas ref='canvas' width={getWindowSize().width} height={getWindowSize().height} />
            </div>
        );
    };
};