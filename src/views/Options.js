import React from 'react';
import { NavLink } from 'react-router-dom';

const Options = () => {
    return (
        <div>
            <div className='header'>
                <h2>Options</h2>
            </div>
            <div className='content'>

            </div>
            <div className='buttons'>
                <NavLink to='/'><h3>Back</h3></NavLink>
            </div>
        </div>
    );
};

export default Options;