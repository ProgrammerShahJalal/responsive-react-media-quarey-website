import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className='w-50' src={notfound} alt="" /> <br />
            <Link to="/">
                <button className='btn-grad'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;