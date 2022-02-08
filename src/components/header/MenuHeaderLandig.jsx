import React from 'react'
import BtnIngresar from '../btn/BtnIngresar'



const MenuHeaderLandig = () => {
    return (
        <div className='navBtnContainer'>
            <div>

                <nav>
                    <ul className='navcontainer'>
                        <li><a href='#nosotros'>NOSOTROS</a></li>
                        <li><a href='#gestion'>GESTIÓN</a></li>
                        <li><a href='#contacto'>CONTÁCTENOS</a></li>
                    </ul>
                </nav>

            </div>


            <BtnIngresar />
        </div >

    )
}

export default MenuHeaderLandig
