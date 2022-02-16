import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'

const LoginBody = () => {
    const { dispatch } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [formValues, handleInputChange] = useForm({
        username: '',
        password: ''
    })

    const { Username, password } = formValues

    const handleLogin = async (e) => {

        e.preventDefault();

        const url = 'http://localhost:5000/api/login';
        const userData = {
            Username: Username,
            password: password
        };

        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(userData), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)

        if (data.token) {
            console.log("prueba");
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
    return (
        <>

            <form className='containerLoginInput' onSubmit={handleLogin}>


                <h4>INICIAR SESIÓN</h4>

                <div className='textlogin'><label htmlFor="">Usuario</label></div>
                <input
                    type="text"
                    placeholder='Usuario'
                    name='Username'
                    value={Username}
                    autoComplete='off'
                    onChange={handleInputChange}

                />
                <div className='textlogin'><label htmlFor="">Contraseña</label></div>
                <input
                    type="password"
                    placeholder='Contraseña'
                    name='password'
                    value={password}
                    autoComplete='off'
                    onChange={handleInputChange}
                />
                <p>¿Olvidaste tu contraseña?</p>

                <button className='button' type="submit" name="button">LOGIN</button>
                {
                    error.length > 0 &&
                    <p>{error}</p>
                }
            </form>
        </>
    )
}

export default LoginBody
