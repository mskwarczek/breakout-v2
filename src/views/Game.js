import React from 'react';
import { NavLink } from 'react-router-dom';

const Game = () => {
    return (
        <div>
            Game View
            <NavLink to='/'><div>Back</div></NavLink>
        </div>
    );
};

export default Game;