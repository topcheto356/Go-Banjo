import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { logout } from '../../slices/authSlice.js';

const Naviagtion = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

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
                {user ? (
                    <>
                        <li className='nav__item'>
                            <Link to={'/ads'} className='nav__link'>
                                Create AD
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link to={'/me'} className='nav__link'>
                                Me
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link to={'/updateMe'} className='nav__link'>
                                Update me
                            </Link>
                        </li>
                    </>
                ) : (
                    ''
                )}
                <li className='nav__item btn-white'>
                    {user ? (
                        <div onClick={() => dispatch(logout())}>Logout</div>
                    ) : (
                        <Link to={'/auth'} className='nav__link'>
                            Signup
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Naviagtion;
