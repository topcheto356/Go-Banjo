import React from 'react';

import { Link } from 'react-router-dom';

const Naviagtion = () => {
    return (
        <nav className='nav'>
            <h1 className='nav__logo'>
                <Link to={'/'} className='nav__link'>
                    Go-Banjo
                </Link>
            </h1>
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
                <li className='nav__item btn-white'>
                    <Link to={'/auth'} className='nav__link'>
                        SingUp
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Naviagtion;
