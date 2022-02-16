import React from 'react';
import { Link } from 'react-router-dom';


const BtnIngresar = () => {
  return (
    
    <div className='cotainerBtn'>
     <Link to='/login'><button className='btnIngresar' name='button'>Ingresar</button></Link>
   </div>
  );
}

export default BtnIngresar; 