import React from 'react'


const MenuAdmin = () => {

    return (
        <div className='containerMenuAdmin'>
            <section>
                <h2>Menu</h2>

                <div className='containerIconMenu'>

                    <div className='iconMenu'>
                        <i className="fas fa-user-tie"></i>
                        <h5>Usuario</h5>
                    </div>



                    <div className='iconMenu'>
                        <i className="fas fa-user"></i>
                        <h5>Paciente</h5>
                    </div>

                    <div className='iconMenu'>
                        <i className="fas fa-user-clock"></i>
                        <h5>Roles</h5>
                    </div>

                    <div className='iconMenu'>
                        <i className="fas fa-address-card"></i>
                        <h5>Citas Medicas</h5>
                    </div>

                    <div className='iconMenu'>
                        <i className="fas fa-file-medical-alt"></i>
                        <h5>Historial Paciente</h5>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default MenuAdmin
