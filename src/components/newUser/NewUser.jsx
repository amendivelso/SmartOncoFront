import React, { useContext, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import BtnClose from '../btn/BtnClose';
import BtnContinue from '../btn/BtnContinue';


const NewUser = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        UserLastName: '',
        UserDocument: '',
        TypeDocument: '',
        Username: '',
        UserEntity: '',
        UserEmail: '',
        password: '',
        password_repeat: '',
        profesionalRegister: '',
        Rol_idRol: ''
    })
    const { name, UserLastName, UserDocument, TypeDocument, Username, UserEntity, UserEmail, password, password_repeat, profesionalRegister, Rol_idRol } = formValues

    const { dispatch } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Username)

        const url = 'http://localhost:5000/api/user';
        const UserActive = 1
        const userData = {
            name, UserLastName, UserDocument, TypeDocument, Username, UserEntity, UserEmail, password, password_repeat, profesionalRegister, UserActive, Rol_idRol
        };
        console.log(userData)

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        const data = await response.json()
        console.log(data)
        if (data.message === 'Usuario registrado con exito...') {
            const action = {
                type: types.login,
                payload: {
                    Username,
                    password
                }
            }
            setError('')
            dispatch(action)

            const lastPath = localStorage.getItem('lastPath') || '/'

            navigate(lastPath, {
                replace: true
            })
        } else {
            setError(data.message)
        }

    }    
    return <div className='containerNewUser1'>
        <form action="#" className='containerNewUser2' onSubmit={handleSubmit}>

            <div className='iconNewUser'>
                <i class="fas fa-edit"></i>
                <h1>Nuevo Usuario</h1>
            </div>

            <div className='containerInputsVarious'>

                <div className='containerInputsRows'>

                    <div className='containerInputs'>
                        <label for="fname">Nombres</label>
                        <input type="text"
                            name='name'
                            value={name}
                            autoComplete='off'
                            onChange={handleInputChange}></input>
                    </div>

                    <div className='containerInputs'>
                        <label for="fname">Apellidos</label>
                        <input type="text"
                            name='UserLastName'
                            value={UserLastName}
                            autoComplete='off'
                            onChange={handleInputChange}>
                        </input>
                    </div>
                </div>
            </div>
            <div className='containerInputsVarious'>
                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname">Documento</label>
                        <input type="text"
                            name='UserDocument'
                            value={UserDocument}
                            autoComplete='off'
                            onChange={handleInputChange}></input>
                    </div>


                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <div className='selec'>
                            <label>Selecciona documento 
                            <select 
                            name='TypeDocument'
                            value={TypeDocument} onChange= {handleInputChange }> 
                            <option value=""></option> 
                            <option value="CC">CC</option> 
                            <option value="CE">CE</option> 
                            <option value="PAS">PASAPORTE</option> 
                            </select> 
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname">Empresa</label>
                        <input type="text"
                            name='UserEntity'
                            value={UserEntity}
                            autoComplete='off'
                            onChange={handleInputChange}></input>

                    </div>
                    <div className='containerInputs'>
                        <label for="fname">Usuario</label>
                        <input type="text"
                            name='Username'
                            value={Username}
                            autoComplete='off'
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>


                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname">Contraseña</label>
                        <input type="password"
                            name='password'
                            value={password}
                            autoComplete='off'
                            onChange={handleInputChange}
                        ></input>
                    </div>


                    <div className='containerInputs'>
                        <label for="fname">Repetir Contraseña</label>
                        <input type="password_repeat"
                            name='password_repeat'
                            value={password_repeat}
                            autoComplete='off'
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname" >Correo</label>
                        <input
                            name='UserEmail'
                            value={UserEmail}
                            autoComplete='off'
                            onChange={handleInputChange}
                        ></input>

                    </div>
                    
                        <div className='containerInputs'>
                            <div className='selec'>
                            <label>Selecciona Rol
                            <select 
                            name='Rol_idRol'
                            value={Rol_idRol} onChange= {handleInputChange }> 
                            <option value=""></option> 
                            <option value="Administrador">Administrador</option> 
                            <option value="Especialista">Especialista</option> 
                            <option value="Proveedor">Proveedor</option> 
                            <option value="Cliente">Cliente</option> 
                            </select> 
                            </label>
                            </div>
                        </div>
                    
                </div>

            </div>

            <div className='BtnCloseBtnContinue'>
                <BtnClose />
                <BtnContinue />
            </div>

        </form>
    </div>
}

export default NewUser;