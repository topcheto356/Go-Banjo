import React from 'react';

import { Link } from 'react-router-dom';

const Naviagtion = () => {
    return (
        <nav className='nav'>
            <h1 className='nav__logo'>Go-Banjo</h1>
            <ul className='nav__links'>
                <li className='nav__item'>
                    <Link to={'/houses'} className='nav__link'>
                        Houses
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to={'/ads'} className='nav__link'>
                        Create AD
                    </Link>
                </li>
                <li className='nav__item login-btn'>
                    <Link to={'/register'} className='nav__link'>
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Naviagtion;
