import React from 'react';

const Naviagtion = () => {
    return (
        <nav className='nav'>
            <h1 className='nav__logo'>Go-Banjo</h1>
            <ul className='nav__links'>
                <li className='nav__item'>Houses</li>
                <li className='nav__item'>Create AD</li>
                <li className='nav__item login-btn'>Register</li>
            </ul>
        </nav>
    );
};

export default Naviagtion;
