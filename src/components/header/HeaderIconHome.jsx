import React from 'react'
import Logo from './Logo'


const HeaderIconHome = () => {
    return (
        <div className='headerIconHomeContainer'>
            <div className='iconHomeContainer'>
                <div className='containerHomeInicio'>
                    <i class="fas fa-home"></i>
                    <p>Inicio</p>
                </div>
                <Logo />
                <h3>x</h3>
            </div>

        </div>
    )
}

export default HeaderIconHome
