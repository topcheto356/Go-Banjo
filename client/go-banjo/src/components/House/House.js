import React from 'react';
import HouseContainer from './HouseContainer.js';
import HouseDescription from './HouseDescription.js';
import UserContainer from './UserContainer.js';

const House = () => {
    return (
        <section className='house'>
            <HouseContainer />
            <UserContainer />
            <HouseDescription />
        </section>
    );
};

export default House;
