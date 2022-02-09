import React from 'react'


const MenuAdmin = () => {

    return (
        <div className='containerMenuAdmin'>
            <section>
                <h2>Menú</h2>

                <div className='containerIconMenu'>

                    <div className='iconMenu'>
                        <i className="fas fa-user-tie"></i>
                        <h5>Usuarios</h5>
                    </div>



                    <div className='iconMenu'>
                        <i className="fas fa-user"></i>
                        <h5>Pacientes</h5>
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
