import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <h1>Breakout! v2</h1>
            <h2>Menu</h2>
            <NavLink to='/game'><h3>Start game</h3></NavLink>
            <NavLink to='/highscore'><h4>High score</h4></NavLink>
            <NavLink to='/options'><h4>Options</h4></NavLink>
        </div>
    );
};

export default Menu;