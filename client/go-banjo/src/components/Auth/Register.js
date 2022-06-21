import React, { Fragment, useState } from 'react';
import { register } from '../../controllers/authController.js';
const Register = () => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

    const enteredFirstNameHandler = (event) => {
        const firstName = event.target.value;

        if (/[^a-zA-Z]+/g.test(firstName) || firstName.length > 30) {
            console.log('Wrong', firstName);
        }
        setEnteredFirstName(firstName);
    };
    const enteredLastNameHandler = (event) => {
        const lastName = event.target.value;

        if (/[^a-zA-Z]+/g.test(lastName) || lastName.length > 30) {
            console.log('Wrong', lastName);
        }

        setEnteredLastName(lastName);
    };
    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const enteredPasswordHandler = (event) => {
        const password = event.target.value;

        if (password.lenght < 8) {
            console.log('Wrong', password);
        }
        setEnteredPassword(password);
    };
    const enteredConfirmPasswordHandler = (event) => {
        const confirmPassword = event.target.value;

        if (enteredPassword !== confirmPassword) {
            console.log('Wrong', confirmPassword);
        }
        setEnteredConfirmPassword(confirmPassword);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        register({
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            passwordConfirm: enteredConfirmPassword,
        });
    };

    return (
        <Fragment>
            <form className='auth' onSubmit={submitHandler}>
                <div className='auth__controls'>
                    <div className='auth__control'>
                        <label className='auth__label'>First Name</label>
                        <input
                            className='auth__input'
                            type='text'
                            value={enteredFirstName}
                            onChange={enteredFirstNameHandler}
                        />
                    </div>
                    <div className='auth__control'>
                        <label className='auth__label'>Last Name</label>
                        <input
                            className='auth__input'
                            type='text'
                            value={enteredLastName}
                            onChange={enteredLastNameHandler}
                        />
                    </div>
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
                    <div className='auth__control'>
                        <label className='auth__label'>Confirm Password</label>
                        <input
                            className='auth__input'
                            type='text'
                            value={enteredConfirmPassword}
                            onChange={enteredConfirmPasswordHandler}
                        />
                    </div>
                </div>
                <div>
                    <button type='submit' className='btn-square'>
                        Register
                    </button>
                </div>
            </form>
            <div className='img-container'></div>
        </Fragment>
    );
};

export default Register;
