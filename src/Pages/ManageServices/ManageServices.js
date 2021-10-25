import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully!')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
                console.log(data);
            })

    }
    return (
        <div className="text-center">
            <h2 className='title'>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}</h4>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;