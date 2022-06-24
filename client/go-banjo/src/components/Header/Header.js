import React, { Fragment } from 'react';
import About from './About.js';
import Features from './Features.js';

const Header = () => {
    return (
        <Fragment>
            <header className='header'>
                <div className='header__text-box'>
                    <h1 className='header__main'>Leading House Broker</h1>
                    <h2 className='header__secondary'>Leading House Broker</h2>
                </div>
                <div className='header__button-wrapper'>
                    <button className='btn-white'>Browse</button>
                </div>
            </header>
            <About />
            <Features />
        </Fragment>
    );
};

export default Header;
