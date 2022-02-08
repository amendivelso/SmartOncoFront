import React from 'react'
import BtnNuevo from '../btn/BtnNuevo'
import Footer from '../footer/Footer'




const ListRoles = () => {
  return (
    <>
      <div className='containerListRoles1'>

        <div className='titleBtnNuevo'>
          <h2>Listado de Roles</h2>
          <BtnNuevo />
        </div>

        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Administrador</th>
              <th>Agregado</th>
              <th>Usuarios</th>
              <th>Editar</th>
              <th>Eliminar</th>

            </tr>
            <tr>
              <td>1</td>
              <td className='nameTable'>Especialista</td>
              <td>05-27-2022</td>
              <td>1 <i class="fas fa-eye"></i></td>
              <td className='iconTable1'><i class="fas fa-edit"></i></td>
              <td className='iconTable2'><i class="fas fa-trash-alt"></i></td>
            </tr>
            <tr>
              <td>2</td>
              <td className='nameTable'>Proveedor</td>
              <td>05-27-2022</td>
              <td>1 <i class="fas fa-eye"></i></td>
              <td className='iconTable1'><i class="fas fa-edit"></i></td>
              <td className='iconTable2'><i class="fas fa-trash-alt"></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td className='nameTable'>Cliente</td>
              <td>05-27-2022</td>
              <td>1 <i class="fas fa-eye"></i></td>
              <td className='iconTable1'><i class="fas fa-edit"></i></td>
              <td className='iconTable2'><i class="fas fa-trash-alt"></i></td>
            </tr>

          </tbody>
        </table>
      </div>

      <Footer />
    </>
  )
}

export default ListRoles
