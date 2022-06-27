import React from 'react';
import { useSelector } from 'react-redux';

const HouseDescription = () => {
    const house = useSelector((state) => state.house.house);

    if (!house) {
        return null;
    }

    return (
        <div className='description'>
            <h2 className='heading-secondary'>{house.name}</h2>
            <div className='description__statististics'>
                <p>
                    <i class='fa-solid fa-people-group icon'></i>
                    {house.maxGroupSize}
                </p>
                <p>
                    <i class='fa-solid fa-money-bill-1-wave icon'></i>
                    {house.price}
                </p>
                <p>
                    <i class='fa-solid fa-star icon'></i>
                    {house.ratingsAverage}
                </p>
                <p>
                    <i class='fa-solid fa-location-dot icon'></i>
                    {house.location}
                </p>
            </div>
            <div className='description__info'>
                <p className='description__info-paragraph'>
                    {house.description}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis, quasi enim deserunt doloremque adipisci illo
                    incidunt, optio molestiae itaque voluptates numquam illum
                    ullam voluptatibus repellendus iusto corporis accusamus.
                    Corporis, quae!Lorem Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Molestiae ducimus voluptates sit. Alias
                    debitis minus impedit amet suscipit numquam repellendus
                    quasi dolore, rem fugit tenetur repudiandae mollitia,
                    laborum nostrum nihil.
                </p>
            </div>
        </div>
    );
};

export default HouseDescription;
