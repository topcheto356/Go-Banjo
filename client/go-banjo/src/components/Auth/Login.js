import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <form className='auth-section-form' onSubmit={submitHandler}>
                <div className='auth-section-form__controls'>
                    <div className='auth-section-form__control'>
                        <label className='auth-section-form__label'>
                            Email
                        </label>
                        <input
                            className='auth-section-form__input'
                            type='text'
                            value={enteredEmail}
                            onChange={enteredEmailHandler}
                        />
                    </div>
                    <div className='auth-section-form__control'>
                        <label className='auth-section-form__label'>
                            Password
                        </label>
                        <input
                            className='auth-section-form__input'
                            type='text'
                            value={enteredPassword}
                            onChange={enteredPasswordHandler}
                        />
                    </div>
                </div>
                <div className='auth-section-form__forgot-pass'>
                    <Link to='#' className='nav__link'>
                        Forgotten Password
                    </Link>
                </div>
                <div className='auth-section-form__button-wrapper'>
                    <button
                        type='submit'
                        className='btn-square auth-section-form__btn-submit'
                    >
                        Login
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default Login;
