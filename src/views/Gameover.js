import React from 'react';
import { NavLink } from 'react-router-dom';

const Gameover = () => {
    return (
        <div>
            Gameover View
            <NavLink to='/highscore'><div>Continue</div></NavLink>
        </div>
    );
};

export default Gameover;