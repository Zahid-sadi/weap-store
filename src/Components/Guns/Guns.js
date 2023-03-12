import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';


const Guns = (props) => {
    const {handleToCurt}= props;
    const [guns, setGuns] = useState([]);
   
  

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
          .then((res) => res.json())
          .then((data) => setGuns(data));
         
      }, []);

    return (
          <div>
             <h1 className='text-5xl text-center font-serif mt-4'>Welcome to our gun store </h1>
                
           
        <div className=" w-96% m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                guns.map(gun=><Gun
                key={gun.id}
                    gun = {gun}
                    handleToCurt={handleToCurt}
                ></Gun>)
            }
        
            
        </div>
          </div>
    );
};

export default Guns;