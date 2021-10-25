import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <div>
            < h2 className="text-center"> Details of {service.name}</h2 >
            <div className="service-details">
                <div className='w-25'></div>
                <div className="card" style={{ 'width': '36rem', }}>
                    <img src={service.img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Booking;