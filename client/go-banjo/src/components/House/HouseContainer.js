import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHouse } from '../../controllers/housesController.js';

const HouseContainer = () => {
    const [current, setCurrent] = useState(0);
    let length = 0;
    const { id } = useParams();

    useEffect(() => {
        const awaitHouse = async () => {
            await getHouse(id);
        };

        awaitHouse();
    }, [id]);

    const house = useSelector((state) => state.house.house);

    if (!house) {
        return <div>Loading</div>;
    }

    length = house.images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className='house__container'>
            <div className='house__image'>
                <span className='left-arrow' onClick={prevImage}>
                    &larr;
                </span>
                <span className='right-arrow' onClick={nextImage}>
                    &rarr;
                </span>
                {house.images.map((image, index) => {
                    return (
                        <div
                            className={
                                index === current ? 'slide active' : 'slide'
                            }
                            key={index}
                        >
                            {index === current && (
                                <img
                                    src={image}
                                    alt=''
                                    className='house__image-item'
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className='house__info'></div>
        </div>
    );
};

export default HouseContainer;
