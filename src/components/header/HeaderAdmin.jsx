import React, { useContext } from 'react'

import Logo from './Logo'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'



const HeaderAdmin = () => {
  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('holis')
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
      <Logo />
      <button className='btn nav-item nav-link' onClick={handleLogout}>
        Salir
      </button>
    </div>
  )
}

export default HeaderAdmin
