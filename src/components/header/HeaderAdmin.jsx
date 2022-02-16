import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'




const HeaderAdmin = () => {
  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    
    const action = {
      type: types.logout
    }
    dispatch(action)

    navigate('/login', {
      replace: true,
    })
  }
  return (
    <div className='containerHeaderAdmin'>
            <div className='iconHomeContainer'>
            <div className='containerHomeInicio'>
                    <i class="fas fa-home"></i>
                    <p><Link to = '/'>Inicio</Link></p>
                </div>
        </div>
      <Logo />
      <div className='cotainerBtn'>
     <button className='btnIngresar' onClick={handleLogout}>Salir</button>
   </div>
   </div>
     
  )
}

export default HeaderAdmin
