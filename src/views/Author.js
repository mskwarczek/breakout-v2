import React from 'react';
import { NavLink } from 'react-router-dom';

const Author = () => {
    return (
        <div>
            <div className='header'>
                <h2>Author</h2>
            </div>
            <div className='content'>
                <p>Hi, I'm Maciej Skwarczek.</p>
                <a href='http://www.mskwarczek.com' target='_blank' rel='noopener noreferrer'>See my other projects</a>
            </div>
            <div className='buttons'>
                <NavLink to='/'><h3>Back</h3></NavLink>
            </div>
        </div>
    );
};

export default Author;