import React from 'react';
import { NavLink } from 'react-router-dom';

import { isTouchDevice } from '../common/tools';

const Instructions = () => {
    return (
        <div>
            <div className='header'>
                <h2>Instructions</h2>
            </div>
            <div className='content'>
                <div>
                    <p>It is highly recommended to play Breakout in fullscreen landscape mode.</p>
                    <svg width='90' height='20'>
                        <rect x='5' y='5' width='80' height='10' fill='black' />
                    </svg>
                    { isTouchDevice()
                        ? <p>
                            Tap left / right side of your screen to move paddle left and right.<br />
                            Tap screen with two fingers at the same time to start / pause the game.</p>
                        : <p>
                            Use arrow keys to move paddle left and right.<br />
                            Press spacebar to start / pause the game.</p>
                    }
                    <p>Don't let the ball fall down and try to destroy all of the bricks.</p>
                </div>
                <div>
                    <svg width='200' height='25'>
                        <rect x='5' y='5' width='60' height='15' fill='blue' />
                        <rect x='70' y='5' width='60' height='15' fill='grey' />
                        <rect x='135' y='5' width='60' height='15' fill='yellow' />
                    </svg>
                    <p>
                        BLUE bricks are standard ones<br />
                        GREY bricks may need several hits to break.<br />
                        YELLOW bricks give extra points.<br />
                        On each level bricks are generated randomly.
                    </p>
                </div>
                <div>
                    <svg width='110' height='40'>
                        <circle cx='20' cy='20' r='15' fill='red' />
                        <circle cx='55' cy='20' r='15' fill='green' />
                        <circle cx='90' cy='20' r='15' fill='yellow' />
                    </svg>
                    <p>
                        You may see coloured balls falling down from destroyed bricks.<br />
                        Avoid RED ones (power-downs).<br />
                        Collect GREEN (power-ups) and YELLOW ones (points multipliers).
                    </p>
                </div>
            </div>
            <div className='buttons'>
                <NavLink to='/game'><h3>Start game</h3></NavLink>
                <NavLink to='/'><h4>Back</h4></NavLink>
            </div>
        </div>
    );
};

export default Instructions;