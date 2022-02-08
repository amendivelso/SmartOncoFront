import React from 'react'
import BtnCancell from '../btn/BtnCancell'
import BtnSave from '../btn/BtnSave'




import Footer from '../footer/Footer'
import HeaderIconHome from '../header/HeaderIconHome'


const ConfirmationDating = () => {
    return (

        <>
            <HeaderIconHome />

            <div className='confirmationDating'>

                <div className='titleBtnNuevo'>

                    <h1>Confirmación Citas</h1>

                </div>

                <table>
                    <tbody>
                        <tr>
                            <td>DIA HORA Y FECHA</td>
                            <td className='textColum2'>Martes 11 Enero 7+00</td>

                        </tr>
                        <tr>
                            <td>INSTITUCIÓN</td>
                            <td className='textColum2'>Centro Medico del Norte</td>


                        </tr>
                        <tr>
                            <td>DIRECCIÓN</td>
                            <td className='textColum2'>Avenida 1 Norte Número 65 -10</td>


                        </tr>
                        <tr>
                            <td>CONSULTORIO</td>
                            <td className='textColum2'>302</td>
                        </tr>
                        <tr>
                            <td>ESPECIALISTA</td>
                            <td className='textColum2'>Samuel Acosta</td>
                        </tr>
                        <tr>
                            <td>RECOMENDACIONES</td>
                            <td className='textColum2'>Llegar con al menos 15 minutos de antelacion para actividades administrativas y preparatorias de su cita.
                                Traer acompañante Mayor de Edad
                                Evitar traer niños
                                Avisar al personal médico si requiere de apoyo de traslado</td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <div className='btnsCancellSave'>
                <BtnCancell />
                <BtnSave />
            </div>


            <Footer />
        </>

    )
}

export default ConfirmationDating
