import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllHouses } from '../../controllers/housesController.js';
import HouseCard from '../UI/HouseCard.js';

const Houses = () => {
    const houses = useSelector((state) => state.house.houses);
    useEffect(() => {
        getAllHouses();
    }, []);

    return (
        <section className='houses'>
            {houses.map((house) => (
                <HouseCard key={house.id} house={house} className='houses' />
            ))}
        </section>
    );
};

export default Houses;
