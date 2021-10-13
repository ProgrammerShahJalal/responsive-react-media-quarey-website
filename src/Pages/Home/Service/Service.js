import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, time, description } = service;
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h3 className='title my-3'>{name}</h3>
            <div className="sub-container mb-3">
                <h5>Price: ${price}</h5>
                <h5>Time: {time} hours</h5>
            </div>
            <p className='description'>{description}</p>
        </div>
    );
};

export default Service;