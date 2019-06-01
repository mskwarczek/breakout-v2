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
                <p>
                    It is highly recommended to play Breakout in fullscreen landscape mode.
                </p>
                { isTouchDevice()
                    ? <p>
                        Tap left / right side of your screen to move paddle left and right.<br />
                        Tap screen with two fingers at the same time to start / pause the game.</p>
                    : <p>
                        Use arrow keys to move paddle left and right.<br />
                        Press spacebar to start / pause the game.</p>
                }
                <p>
                    GREY bricks may need several hits to break.<br />
                    YELLOW bricks give extra points.
                </p>
                <p>
                    You may see coloured balls falling down from destroyed bricks.<br />
                    Avoid RED ones (power-downs).<br />
                    Collect GREEN (power-ups) and YELLOW ones (points multipliers).
                </p>
            </div>
            <div className='buttons'>
                <NavLink to='/game'><h3>Start game</h3></NavLink>
                <NavLink to='/'><h4>Back</h4></NavLink>
            </div>
        </div>
    );
};

export default Instructions;