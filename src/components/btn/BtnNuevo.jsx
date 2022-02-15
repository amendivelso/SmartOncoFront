import React from 'react'
import { Link } from 'react-router-dom'

const BtnNuevo = () => {
    return (
        <div className='containerbtnNuevo'>
            <button className='btnNuevo'><Link to="/nuevoUsuario">+ Nuevo</Link></button>
        </div>
    )
}

export default BtnNuevo
