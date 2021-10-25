import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    reset();
                }
            })
    }

    return (
        <div className='add-service'>
            <h2 className="title">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' {...register("description")} />
                <input placeholder="price" type="number" {...register("price")} />
                <input placeholder="image url" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;