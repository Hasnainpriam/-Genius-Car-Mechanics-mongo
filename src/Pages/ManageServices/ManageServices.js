import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])

  const handleDelete=id=>{
      fetch(`http://localhost:5000/services/${id}`,{
        method:'DELETE'
      }).then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          alert('Deleted Successfully.')
          const remainingId= services.filter(service=>service._id !== id);
          setServices(remainingId)
        }
      })
      
  }

  return (
    <div>
      <h1>Manage Service</h1>
      {
        services.map(service=> 
        <div key={service._id} > 
         <h5>{service.name}</h5> <p>$ {service.price}</p>
         <button onClick={()=>handleDelete(service._id)}>DELETE</button>
        </div>)
      }
    </div>
  );
};

export default ManageServices;