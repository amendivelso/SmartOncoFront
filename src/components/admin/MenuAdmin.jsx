import React from 'react'
import { Link } from 'react-router-dom'


const MenuAdmin = () => {

    return (
        <div className='containerMenuAdmin'>
            <section>
                <h2>Menú</h2>

                <div className>
                    <div className='iconMenu'>
                        <i className="fas fa-user-tie"></i>
                        <Link to="/usuarios" >Usuarios</Link>

                    </div>


                    <div className='iconMenu'>
                        <i className="fas fa-user"></i>
                        <Link to="/pacientes" >pacientes</Link>
                        

                    </div>

                    <div className='iconMenu'>
                        <i className="fas fa-user-clock"></i>
                        <h5>Roles</h5>
                    </div>

                    <div className='iconMenu'>
                        <i className="fas fa-address-card"></i>
                        <h5>Citas Médicas</h5>
                    </div>

                    <div className='iconMenu'>
                        <i className="fas fa-file-medical-alt"></i>
                        <h5>Historial Pacientes</h5>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MenuAdmin
