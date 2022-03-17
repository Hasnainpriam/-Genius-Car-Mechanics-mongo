import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h4>this is booking: {service._id}</h4>
            <h1>Info of : {service.name}</h1>
            <p>{service.description}</p>
            <h4>Price : $ {service.price}</h4>
            <img src={service.img} alt="" />
        </div>
    );
};

export default Booking;