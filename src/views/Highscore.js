import React from 'react';
import { NavLink } from 'react-router-dom';

const Highscore = () => {
    return (
        <div>
            Highscore View
            <NavLink to='/'><div>Back</div></NavLink>
        </div>
    );
};

export default Highscore;