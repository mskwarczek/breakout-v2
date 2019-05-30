import React from 'react';
import { NavLink } from 'react-router-dom';

const Instructions = () => {
    return (
        <div>
            Instructions View
            <NavLink to='/game'><h3>Start game</h3></NavLink>
            <NavLink to='/'><div>Back</div></NavLink>
        </div>
    );
};

export default Instructions;