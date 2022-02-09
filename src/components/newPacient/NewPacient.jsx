// import React from 'react';
// import BtnClose from '../btn/BtnClose';
// import BtnContinue from '../btn/BtnContinue';
// import Btngoback from '../btn/Btngoback';

// const NewPacient = () => {
//     const [formValues, handleInputChange] = useForm({
//         patientDocument :"",
//         firstName:"",
//         secondName:"", 
//         firstLastName:"",
//         secondLastName:"",
//         sex:"",
//         age:"",
//         birthday:"",
//         activity:"",
//         email1:"",
//         email2:"",
//         address:"",
//         zone:"",
//         nacionality:"",
//         active:"",
//         patientNeighborhood:"",
//         patientTypeId:"",
//         patientCity:"",
//         patientDepartment:"",
//         patientPhone1:"",
//         patientPhone2:"",
//         EPSName:"",
//         regimenEPS:"",
//         tutela:"",
//         familyTypeID:"",
//         familyID:"",
//         familyFirstName:"",
//         familySecondName:"",
//         familyFirstLastname:"",
//         familySecondLastname:"",
//         familyAddress:"",
//         familyCityfamilyDepartment:"",
//         familyEmail1:"",
//         familyEmail2:"",
//         familyPhone1:"",
//         familyPhone2:"",
//         familyNeighborhood:"",
//         familyCity:"",
//         familyDepartment:"",
//     })
//     const { patientDocument,firstName,secondName, firstLastName, secondLastName,sex, age, birthday, activity, email1, email2, address, zone, nacionality, active, patientNeighborhood, patientTypeId, patientCity, patientDepartment, patientPhone1,patientPhone2,EPSName,regimenEPS,tutela,familyTypeID,familyID,familyFirstName,familySecondName,familyFirstLastname,familySecondLastname,familyAddress,familyNeighborhood,familyCity,familyDepartment,familyEmail1,familyEmail2,familyPhone1,familyPhone2 } = formValues
//     const { dispatch } = useContext(AuthContext)
//     const [error, setError] = useState('')
//     const navigate = useNavigate()
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(Username)
    
//             const url = 'http://localhost:5000/api/patient';
//             const userData = {
//                 patientDocument,firstName,secondName, firstLastName, secondLastName,sex, age, birthday, activity, email1, email2, address, zone, nacionality, active, patientNeighborhood, patientTypeId, patientCity, patientDepartment, patientPhone1,patientPhone2,EPSName,regimenEPS,tutela,familyTypeID,familyID,familyFirstName,familySecondName,familyFirstLastname,familySecondLastname,familyAddress,familyNeighborhood,familyCity,familyDepartment,familyEmail1,familyEmail2,familyPhone1,familyPhone2
//             };
//             console.log (userData)
    
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify(userData),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })

//             const data = await response.json()
//             console.log(data)
//             if (data.message === 'Paciente registrado con exito...') {
//                 const action = {
//                     type: types.login,
//                     payload: {
//                         patientDocument
//                 }
//                 setError('')
//                 dispatch(action)
    
//                 const lastPath = localStorage.getItem('lastPath') || '/'
    
//                 navigate(lastPath, {
//                     replace: true
//                 })
//             } else {
//                 setError(data.message)
//             }
    
//     }


//     return <div>

//         <div className='containerNewPacient1'>

//             <form action="#" className='containerNewUser2'>



//                 <h1>Nuevo Paciente</h1>


//                 <div className='containerInputsVarious'>

//                     <div className='containerInputsRows'>

//                         <div className='containerInputs'>
//                             <label for="fname">Tipo de Documento</label>
//                             <input type="text"
//                                 name='patientTypeId'
//                                 value={patientTypeId}
//                                 autoComplete='off'
//                                 onChange={handleInputChange}></input>
//                             </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Número de Documento</label>
//                             <input type="number"
//                             name='patientDocument'
//                             value={patientDocument}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>
//                     </div>

//                     <div className='containerInputsRows'>
//                         <div className='containerInputs'>
//                             <label for="fname">Primer nombre</label>
//                             <input type="text"
//                             name='firstName'
//                             value={firstName}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Segundo nombre</label>
//                             <input type="text"
//                             name='secondName'
//                             value={secondName}
//                             autoComplete='off'
//                             onChange={handleInputChange}
//                             ></input>
//                         </div>
//                     </div>

//                     <div className='containerInputsRows'>
//                         <div className='containerInputs'>
//                             <label for="fname">Primer Apellido</label>
//                             <input type="text"
//                             name='firstLastName'
//                             value={firstLastName}
//                             autoComplete='off'
//                             onChange={handleInputChange}>
//                             </input>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Segundo Apellido</label>
//                             <input type="text"
//                             name='secondLastName'
//                             value={secondLastName}
//                             autoComplete='off'
//                             onChange={handleInputChange}>                                
//                             </input>
//                         </div>
//                     </div>

//                     <div className='containerInputsRows'>

//                         <div className='containerInputs'>
//                             <label for="fname">Sexo</label>
//                             <input type="text" placeholder='Escoja  Sexo'
//                             name='sex'
//                             value={sex}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                             <i class="fas fa-caret-down"></i>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Edad</label>
//                             <input type="number"                            
//                             name='age'
//                             value={age}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>

//                     </div>

//                     <div className='containerInputsRows'>
//                         <div className='containerInputs'>
//                             <label for="fname">Fecha de Nacimiento</label>
//                             <input type="date"
//                             name='birthday'
//                             value={birthday}
//                             autoComplete='off'
//                             onChange={handleInputChange}>                                
//                             </input>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Actividad Laboral</label>
//                             <input type="text"
//                             name='activity'
//                             value={activity}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>
//                     </div>

//                     <div className='containerInputsRows'>
//                         <div className='containerInputs'>
//                             <label for="fname">Correo1</label>
//                             <input className='inputEmail' type="email"
//                              name='email1'
//                              value={email1}
//                              autoComplete='off'
//                              onChange={handleInputChange}></input>
//                         </div>
//                     </div>
//                     <div className='containerInputsRows'>
//                         <div className='containerInputs'>
//                             <label for="fname">Correo2</label>
//                             <input className='inputEmail' type="email"
//                              name='email2'
//                              value={email2}
//                              autoComplete='off'
//                              onChange={handleInputChange}></input>
//                         </div>
//                     </div>

//                     <div className='containerInputsRows'>

//                         <div className='containerInputs'>
//                             <label for="fname">Régimen</label>
//                             <input type="text"
//                             name='regimenEPS'
//                             value={regimenEPS}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">EPS</label>
//                             <input type="text" placeholder='Escoja  Eps'
//                             name='EPSName'
//                             value={EPSName}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                             <i class="fas fa-caret-down"></i>
//                         </div>


//                     </div>

//                     <div className='containerInputsRows'>
//                         <div className='containerInputs'>
//                             <label for="fname">Direccion</label>
//                             <input type="text"
//                             name='address'
//                             value={address}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Barrio</label>
//                             <input type="text"
//                             name='patientNeighborhood'
//                             value={patientNeighborhood}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>
//                     </div>

//                     <div className='containerInputsRows'>

//                         <div className='containerInputs'>
//                             <label for="fname">Ciudad</label>
//                             <input type="text"
//                             name='patientCity'
//                             value={patientCity}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                             <i class="fas fa-caret-down"></i>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Departamento</label>
//                             <input type="text"
//                             name='patientDepartment'
//                             value={patientDepartment}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                             <i class="fas fa-caret-down"></i>
//                         </div>

//                     </div>

//                     <div className='containerInputsRows'>

//                         <div className='containerInputs'>
//                             <label for="fname">Zona</label>
//                             <input type="text"
//                             name='zone'
//                             value={zone}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                             <i class="fas fa-caret-down"></i>
//                         </div>

//                         <div className='containerInputs'>
//                             <label for="fname">Nacionalidad</label>
//                             <input type="text"
//                             name='nacionality'
//                             value={nacionality}
//                             autoComplete='off'
//                             onChange={handleInputChange}></input>
//                         </div>

//                     </div>



//                 </div>

//                 <div className='BtngobackBtnContinue'>
//                     <Btngoback />
//                     <BtnContinue />
//                     <BtnClose />
//                 </div>
//             </form>

//         </div>

//     </div>
// }
// export default NewPacient;