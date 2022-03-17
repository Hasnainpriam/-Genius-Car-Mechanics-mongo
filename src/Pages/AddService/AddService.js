import axios from 'axios';
import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './addService.css'
const AddService = () => {
  const { register, handleSubmit ,reset } = useForm();
  const onSubmit = data =>{

    console.log(data);
    axios.post('http://localhost:5000/services',data)
    .then(res=>{
      if(res.data.insertedId){
        alert('Data updated Successfully.')
        reset()
      }
    })

  }
  return (
    <div className='add-service'>
      <h1>Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder='Name' />
      <input type="number" {...register("price")} placeholder='Price' />
      <textarea {...register("description")} placeholder='Description'/>
      <input {...register("img")} placeholder='image url' />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddService;