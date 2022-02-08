import React from 'react'
import Footer from '../footer/Footer'
import BtnNuevo from '../btn/BtnNuevo'
import HeaderIconHome from '../header/HeaderIconHome'
import Search from '../search/Search'

const PatientsTable = () => {
    return (

        <>
            <HeaderIconHome />

            <div className='patientsTable'>

                <div className='titleBtnNuevo'>
                    <Search />
                    <h2>Pacientes</h2>
                    <BtnNuevo />
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Nombre Completo</th>
                            <th>Correo/Usuario</th>
                            <th>Telefono</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Acciones</th>


                        </tr>
                        <tr>
                            <td>1</td>
                            <td className='nameTable'>Carlos Peres Acosta</td>
                            <td>carlos203@solsalud.com</td>
                            <td>311756345</td>
                            <td>05-27-2022</td>
                            <td>Activo</td>
                            <td className='iconSetting'><i class="fas fa-cog"></i>
                                <i class="fas fa-caret-down"></i>
                            </td>


                        </tr>
                        <tr>
                            <td>2</td>
                            <td className='nameTable'>Andrea Lopez</td>
                            <td>Alopez@colsalud.com</td>
                            <td>315786245</td>
                            <td>05-27-2022</td>
                            <td>Activo</td>
                            <td className='iconSetting'><i class="fas fa-cog"></i>
                                <i class="fas fa-caret-down"></i>
                            </td>


                        </tr>
                        <tr>
                            <td>3</td>
                            <td className='nameTable'>Jhon Jairo Medina</td>
                            <td>JMedina@rxdiagnostic.com</td>
                            <td>300956548</td>
                            <td>05-27-2022</td>
                            <td>Activo</td>
                            <td className='iconSetting'><i class="fas fa-cog"></i>
                                <i class="fas fa-caret-down"></i>
                            </td>


                        </tr>

                    </tbody>
                </table>
            </div>

            <Footer />
        </>

    )
}

export default PatientsTable

