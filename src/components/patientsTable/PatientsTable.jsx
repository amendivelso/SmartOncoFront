import React, {useEffect, useState} from 'react'
import BtnNuevo from '../btn/BtnNuevo'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'

import HeaderIconHome from '../header/HeaderIconHome'
import Search from '../search/Search'

const PatientsTable = () => {
    
  const url = 'http://localhost:5000/api/patient'
  const [todos, setTodos] = useState([])
  const patients = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson);
    setTodos(responseJson)
  }
  useEffect(() => {
    patients()
  }, []);
  
  return (
    <div >
      <HeaderIconHome />
      
      <div className='userTable'>

        <div className='titleBtnNuevo'>
          <Search />
          <h1>Pacientes</h1>
          <BtnNuevo />
        </div>

                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Nombre Completo</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>regimenEPS</th>
                            <th>Estado</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                        {!todos.users ? 'Cargando...' :
                            todos.users.map((patient, index) => {
                                return <tr>
                                    <td>{patient.patientDocument}</td>
                                    <td className='nameTable'>{patient.firstName}</td>
                                    <td>{patient.email1}</td>
                                    <td>{patient.patientPhone1}</td>
                                    <td>{patient.regimenEPS}</td>
                                    <td>{patient.active}</td>
                                    <td className='iconTable1'><i class="fas fa-edit"></i></td>
                                    <td className='iconTable2'><i class="fas fa-trash-alt"></i></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
            <Footer />
        </div>

    )
}

export default PatientsTable;

