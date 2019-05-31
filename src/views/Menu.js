import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div className='header'>
                <h2>Menu</h2>
            </div>
            <div className='content'>
                <NavLink to='/instructions'><h3>Start game</h3></NavLink>
                <NavLink to='/highscore'><h4>High score</h4></NavLink>
                <NavLink to='/options'><h4>Options</h4></NavLink>
            </div>
        </div>
    );
};

export default Menu;