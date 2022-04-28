import React from 'react';
import './Card.css';

const Card = ({ user }) => {
    const { id, name, email } = user;
    return (
        <div className='card-item'>
            <h1 className='card-number'>{id < 10 ? '0' + id : id}</h1>
            <div className='user-desc'>
                <p className='user-name'><span className='desc-initiate'>Name: </span> {name}</p>
                <p className='user-email'><span className='desc-initiate'>Email: </span> {email}</p>
            </div>
        </div>
    );
};

export default Card;
