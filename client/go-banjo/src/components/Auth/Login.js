import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../controllers/authController';

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        login({ email: enteredEmail, password: enteredPassword });
    };

    return (
        <Fragment>
            <form className='auth' onSubmit={submitHandler}>
                <div className='auth__controls'>
                    <div className='auth__control'>
                        <label className='auth__label'>Email</label>
                        <input
                            className='auth__input'
                            type='text'
                            value={enteredEmail}
                            onChange={enteredEmailHandler}
                        />
                    </div>
                    <div className='auth__control'>
                        <label className='auth__label'>Password</label>
                        <input
                            className='auth__input'
                            type='text'
                            value={enteredPassword}
                            onChange={enteredPasswordHandler}
                        />
                    </div>
                </div>
                <div className='forgot-pass'>
                    <Link to='#' className='nav__link'>
                        Forgotten Password
                    </Link>
                </div>
                <div className='auth__button-wrapper'>
                    <button type='submit' className='btn-square'>
                        Login
                    </button>
                </div>
            </form>
            <div className='img-container'></div>
        </Fragment>
    );
};

export default Login;
