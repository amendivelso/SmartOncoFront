import React, {useEffect, useState} from 'react'
import BtnNuevo from '../btn/BtnNuevo'
import Footer from '../footer/Footer'

import HeaderIconHome from '../header/HeaderIconHome'
import Search from '../search/Search'

const UserTable = () => {
  const url = 'http://localhost:5000/api/user'
  const [todos, setTodos] = useState([])
  const users = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson);
    setTodos(responseJson)
  }
  useEffect(() => {
    users()
  }, []);
  
  return (
    <div >
      <HeaderIconHome />

      <div className='userTable'>

        <div className='titleBtnNuevo'>
          <Search />
          <h1>Usuarios</h1>
          <BtnNuevo />
        </div>

        <table >
          <thead>
            <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>Correo/Usuario</th>
                <th>Telefono</th>
                <th>Entidad</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
          </thead>
          <tbody>
            { !todos.users ? 'Cargando...' :
              todos.users.map((user, index) =>{
                return <tr>
                        <td>{user.UserDocument}</td>
                        <td className='nameTable'>{user.name +" "+ user.UserLastName}</td>
                        <td>{user.UserEmail}</td>
                        <td>{user.UserDocument}</td>
                        <td>{user.UserEntity}</td>
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

export default UserTable
