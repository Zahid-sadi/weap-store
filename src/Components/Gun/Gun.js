import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Gun = ({gun,handleToCurt}) => {
  const [modalData, setModalData] = useState ({});
  // console.log(gun);
    const {name,img,bullet,capacity,action , category,price}=gun;
    
    return (

<div className="card h-full w-full bg-base-100 shadow-xl">
   <figure><img className='w-full h-96' src={ img} alt=""   /></figure>

  <div className="card-body">
    <h2 className="card-title">
     {name}!
      <div className="badge badge-secondary">NEW</div>
    </h2>
       <h3 className='text-4xl font-semibold font-mono text-orange-800 '>{category}</h3>
    <div className="card-actions ">
      <div className="badge badge-warning p-4 font-serif text-2xl ">{action}</div> 
      <div className="">Price: ${price}</div>
      <div className='m-3 '>
      {/* <button onClick={()=>handleToCurt()}  className="btn btn-outline btn-success mx-2"> Details</button> */}

      <label onClick={()=> setModalData(gun)} 
      htmlFor="my-modal-6" 
      className="btn btn-outline btn-success mx-4 mb-2"
      >Details</label>
     
      <button className="btn btn-outline btn-warning mx-2 " onClick={()=>handleToCurt()}  >buy now</button>
      </div>
    </div>
    {

      modalData && <Modal data = {modalData}setModalData = {setModalData}>  </Modal>
    }
  </div>
</div>
    );
};

export default Gun;