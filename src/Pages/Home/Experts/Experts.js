import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: "https://i.ibb.co/3SRhnQt/mechanic-1.jpg",
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: "https://i.ibb.co/6v19c86/mechanic-2.jpg",
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: "https://i.ibb.co/3RQJS4Y/mechanic-3.jpg",
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: "https://i.ibb.co/ydq2xmh/mechanic-4.jpg",
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        img: "https://i.ibb.co/4fXb660/mechanic-5.jpg",
        name: 'Sultan Mansore',
        expertize: '-Washing Master-'
    }
]

const Experts = () => {
    return (
        <div className="container mb-5">
            <h2 className='title'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;