import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.js';

const HouseCard = ({ house, className }) => {
    console.log(house.id);

    return (
        <Link
            to={`/houses/house/${house.id}`}
            className={`${className}__house-card house-card nav__link
        `}
        >
            <div className='house-card__name'>{house.name}</div>
            <div className={'house-card__image-container'}>
                <img
                    src='https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'
                    alt=''
                />
            </div>
            <div className='house-card__info'>
                <div className='house-card__info-text-container'>
                    <h2 className='house-heading-secondary'>House summary</h2>
                    <p className='paragraph house-card__summary'>
                        {house.summary}
                    </p>
                </div>

                <div className='house-card__info-stats-container'>
                    <div className='house-card-item'>
                        <Icon size={1} color='black' name='user'></Icon>
                        <p className='paragraph'>{house.maxGroupSize} people</p>
                    </div>
                    <div className='house-card-item'>
                        <Icon name='map-pin'></Icon>
                        <p className='paragraph house-card-item-location'>
                            {house.location}
                        </p>
                    </div>
                </div>
            </div>
            <div className='house-card__info-row'>
                <div className='house-card-item-column'>
                    <p className='house-card__paragraph'>
                        ${house.price} per person
                    </p>
                    <p className='house-card__paragraph'>
                        {house.ratingAverage} rating ({house.ratingQuantity})
                    </p>
                </div>

                <div className='house-card-item'>
                    <Link
                        to={'/joe-kenya'}
                        className='btn-grad house-btn nav__link'
                    >
                        bruh
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default HouseCard;
