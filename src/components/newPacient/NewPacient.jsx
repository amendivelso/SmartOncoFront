import React from 'react';
import BtnClose from '../btn/BtnClose';
import BtnContinue from '../btn/BtnContinue';
import Btngoback from '../btn/Btngoback';

const NewPacient = () => {
    /*const [formValues, handleInputChange] = useForm({
        patientDocument :"",
        firstName:"",
        secondName:"", 
        firstLastName:"",
        secondLastName:"",
        sex:"",
        age:"",
        birthday:"",
        activity:"",
        email1:"",
        email2:"",
        address:"",
        zone:"",
        nacionality:"",
        active:"",
        patientNeighborhood:"",
        patientTypeId:"",
        patientCity:"",
        patientDepartment:"",
        patientPhone1:"",
        patientPhone2:"",
        EPSName:"",
        regimenEPS:"",
        tutela:"",
        familyTypeID:"",
        familyID:"",
        familyFirstName:"",
        familySecondName:"",
        familyFirstLastname:"",
        familySecondLastname:"",
        familyAddress:"",
        familyCityfamilyDepartment:"",
        familyEmail1:"",
        familyEmail2:"",
        familyPhone1:"",
        familyPhone2:"",
        familyNeighborhood:"",
        familyCity:"",
        familyDepartment:"",
    })
    const { patientDocument,firstName,secondName, firstLastName, secondLastName,sex, age, birthday, activity, email1, email2, address, zone, nacionality, active, patientNeighborhood, patientTypeId, patientCity, patientDepartment, patientPhone1,patientPhone2,EPSName,regimenEPS,tutela,familyTypeID,familyID,familyFirstName,familySecondName,familyFirstLastname,familySecondLastname,familyAddress,familyNeighborhood,familyCity,familyDepartment,familyEmail1,familyEmail2,familyPhone1,familyPhone2 } = formValues
    const { dispatch } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Username)
    
            const url = 'http://localhost:5000/api/patient';
            const userData = {
                name, UserLastName, UserDocument, Username, UserEntity, UserEmail, password, password_repeat, profesionalRegister, UserActive, Rol_idRol
            };
            console.log (userData)
    
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
    
    }*/


    return <div>

        <div className='containerNewPacient1'>

            <form action="#" className='containerNewUser2'>



                <h1>Nuevo Paciente</h1>


                <div className='containerInputsVarious'>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Tipo de Documento</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Número de Documento</label>
                            <input type="number"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Primer nombre</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Segundo nombre</label>
                            <input type="text"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Primer Apellido</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Segundo Apellido</label>
                            <input type="text"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Sexo</label>
                            <input type="text" placeholder='Escoja  Sexo'></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Edad</label>
                            <input type="number"></input>
                        </div>

                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Fecha de Nacimiento</label>
                            <input type="date"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Actividad Laboral</label>
                            <input type="text"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Correo</label>
                            <input className='inputEmail' type="email"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Régimen</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">EPS</label>
                            <input type="text" placeholder='Escoja  Eps'></input>
                            <i class="fas fa-caret-down"></i>
                        </div>


                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Direccion</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Barrio</label>
                            <input type="text"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Ciudad</label>
                            <input type="text"></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Departamento</label>
                            <input type="text"></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                    </div>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Zona</label>
                            <input type="text"></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Nacionalidad</label>
                            <input type="text"></input>
                        </div>

                    </div>



                </div>

                <div className='BtngobackBtnContinue'>
                    <Btngoback />
                    <BtnContinue />
                    <BtnClose />
                </div>
            </form>

        </div>

    </div>
}

export default NewPacient
