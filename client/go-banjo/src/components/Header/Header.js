import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__text-box'>
                <h1 className='header__main'>Leading House Broker</h1>
                <h2 className='header__secondary'>Leading House Broker</h2>
            </div>
            <div className='header__button-wrapper'>
                <button className='login-btn'>Browse</button>
            </div>
        </header>
    );
};

export default Header;
