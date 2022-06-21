import React, { Fragment } from 'react';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Authentication = () => {
    const [register, setRegister] = useState(false);

    const switchHandler = (e) => {
        console.log(register);
        setRegister(!register);
    };

    return (
        <Fragment>
            <section className='authentication'>
                <div className='button-wrapper'>
                    <button
                        className='btn-white auth-btn-position'
                        onClick={switchHandler}
                    >
                        Switch To {register ? 'Login' : 'Register'}
                    </button>
                </div>
                {register ? <Register /> : <Login />}
            </section>
        </Fragment>
    );
};

export default Authentication;
