import { getWindowSize } from '../common/tools';

export const modX = getWindowSize().width / 1300;

export const CONFIG = {
    basePaddleWidth: 80 * modX,
    basePaddleSpeed: 8 * modX,
    baseBallSize: 10 * modX,
    baseBallSpeed: 3 * modX,
    baseBallPower: 10,
    baseLives: 3,
    baseMultiplier: 1,
    baseLevel: 1,
    baseScore: 0,
    bonusDropRate: 3,
    ballSpeedIncrease: 1,
    multiplierIncrease: 0.2
};
export const PALETTE = {
    baseFieldFillStyle: 'rgb(238,238,238)',
    baseFieldStrokeStyle: 'rgb(0,0,0)',
    baseFieldShadowColor: 'rgba(153,153,153,.5)',
    baseTextFillStyle: 'rgb(0,0,0)',
    baseBallFillStyle: 'rgb(15,15,15)',
    basePaddleFillStyle: 'rgb(15,15,15)',
    baseAlertFillStyle: 'rgb(0,0,0)',
    positiveAlertFillStyle: 'rgb(41,154,11)',
    negativeAlertFillStyle: 'rgb(255,48,25)',
    baseBrickFillStyle: 'rgb(73,155,234)', 
    strongBrickFillStyle: 'rgb(96,108,136)', 
    valuableBrickFillStyle: 'rgb(241,231,103)',
    baseBonusFillStyle: 'rgb(0,0,0)',
    powerUpBonusFillStyle: 'rgb(41,154,11)',
    powerDownBonusFillStyle: 'rgb(255,48,25)',
    scoreBonusFillStyle: 'rgb(241,231,103)'
};