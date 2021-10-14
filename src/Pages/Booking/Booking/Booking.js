import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className="text-center">This is booking page of : {serviceId} </h2>
        </div>
    );
};

export default Booking;