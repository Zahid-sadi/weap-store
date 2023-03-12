import React from 'react';

const Modal = (props) => {
    const {data,setModalData} = props;
    const {name,img,bullet,capacity,action , category,price} = data
    return (
        <div>
    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
    <h3 className="font-bold text-lg">{name}</h3>
    <div className="py-4">
       <img src={img} alt="" />
        <h1>{bullet}</h1>
        <h1>{capacity}</h1>
        <h1>{action}</h1>
        <h1>{category}</h1>
        <h1>{price}</h1>
    </div>
        
    <div className="modal-action">
      <label onClick={()=>setModalData()} htmlFor="my-modal-6" className="btn">close!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;