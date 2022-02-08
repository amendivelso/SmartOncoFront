import React from 'react'
import Footer from '../footer/Footer'

import HeaderIconHome from '../header/HeaderIconHome'


const AgendaDay = () => {
    return (
        <>
            <HeaderIconHome />

            <div className='agendaDayTable'>

                <div className='titleBtnNuevo'>

                    <h2>martes 11 Enero</h2>

                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>Hora</th>
                            <th>Profesional</th>
                            <th>especialidad</th>
                            <th>Consultorio</th>
                            <th>Estado</th>
                        </tr>
                        <tr>
                            <td>7:00</td>
                            <td className='nameTable'>Samuel Acosta</td>
                            <td>Oncología</td>
                            <td>301</td>
                            <td className='available'>Disponible</td>
                        </tr>
                        <tr>
                            <td>8:00</td>
                            <td className='nameTable'>Silverio Sanjuan</td>
                            <td>Oncología</td>
                            <td>204</td>
                            <td className='assigned'>Asignada</td>
                        </tr>
                        <tr>
                            <td>9:00</td>
                            <td className='nameTable'>Jhon Jairo Medina</td>
                            <td>Oncología</td>
                            <td>302</td>
                            <td className='assigned'>Asignada</td>

                        </tr>

                        <tr>
                            <td>10:00</td>
                            <td className='nameTable'>Ana María Soto</td>
                            <td>Oncología</td>
                            <td>304</td>
                            <td className='assigned'>Asignada</td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <Footer />
        </>

    )
}

export default AgendaDay
