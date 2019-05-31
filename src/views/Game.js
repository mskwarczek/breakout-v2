import React from 'react';
import { NavLink } from 'react-router-dom';

import { getWindowSize } from '../common/tools';

const Game = () => {
    return (
        <div>
            <canvas id="canvas" width={getWindowSize().width} height={getWindowSize().height} />
            <NavLink to='/'><div>Back</div></NavLink>
        </div>
    );
};

export default Game;