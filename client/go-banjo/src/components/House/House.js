import React from 'react';
import HouseContainer from './HouseContainer.js';
import UserContainer from './UserContainer.js';

const House = () => {
    return (
        <section className='house'>
            <HouseContainer />
            <UserContainer />
        </section>
    );
};

export default House;
