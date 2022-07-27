import React, { useState } from 'react';

import { register } from '../../controllers/authController.js';
import userFields from '../../inputFields/userFields';
import Form from '../UI/Form';

const Register = () => {
    const neededFields = [
        'firstName',
        'lastName',
        'email',
        'password',
        'passwordConfirm',
    ];

    const filteredFields = userFields.filter((el) =>
        neededFields.includes(el.field)
    );

    const [user, setUser] = useState({});

    const addData = (data) => {
        user[data.key] = data.value;

        setUser((prevState) => {
            return { ...prevState, ...user };
        });
    };

    return (
        <Form
            className='auth-section-form'
            addData={addData}
            submit={register}
            submitData={user}
            fields={filteredFields}
            btn='Register'
        />
    );
};

export default Register;
