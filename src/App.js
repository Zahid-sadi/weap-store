import { useState } from 'react';
import './App.css';
import Guns from './Components/Guns/Guns';
import Navbar from './Components/Navbar/Navbar';

function App() {
   const [count , setCount] = useState(0);
  
  const handleToCurt = ()=> {
    setCount(count+1)
    // console.log('k');
  }
  return (
    <div className="App">
      <Navbar count ={count}></Navbar>
      <Guns handleToCurt={handleToCurt}></Guns>
      
    </div>
  );
}

export default App;
