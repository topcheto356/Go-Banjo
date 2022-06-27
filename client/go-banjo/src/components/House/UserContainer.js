import React from 'react';
import { useSelector } from 'react-redux';

const UserContainer = () => {
    const user = useSelector((state) => state.auth.user);

    console.log(user);

    if (!user) {
        return null;
    }

    return (
        <div className='user'>
            <figure className='user__image-container'>
                <img src={user.photo} alt='' />
            </figure>
            <div className='user__info-container'>
                <p className='user__paragraph'>
                    {user.firstName} {user.lastName}
                    <span className='user__span'>{user.email}</span>
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae necessitatibus neque magni nihil deserunt aut
                    alias, repudiandae quae facere totam ad, doloremque labore
                    assumenda dicta distinctio soluta quasi corrupti
                    quidem!Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Recusandae necessitatibus neque magni nihil deserunt
                    aut alias, repudiandae quae facere totam ad, doloremque
                    labore assumenda dicta distinctio soluta quasi corrupti
                    quidem!Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Recusandae necessitatibus neque magni nihil deserunt
                    aut alias, repudiandae quae facere totam ad, doloremque
                    labore assumenda dicta distinctio soluta quasi corrupti
                    quidem!
                </p>
            </div>
        </div>
    );
};

export default UserContainer;
