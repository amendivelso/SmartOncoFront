import React from 'react'
import BtnNuevo from '../btn/BtnNuevo'
import Footer from '../footer/Footer'
import HeaderIconHome from '../header/HeaderIconHome'
import Search from '../search/Search'

const QuotesDay = () => {
    return (
        <>
            <HeaderIconHome />

            <div className='quotesDayTable'>

                <div className='titleBtnNuevo'>
                    <Search />
                    <h2>Citas del día</h2>
                    <BtnNuevo />
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Nombre Completo</th>
                            <th>Documento</th>
                            <th>Descripción</th>
                            <th>Hora</th>
                            <th>Fecha</th>
                            <th>Ingresar</th>


                        </tr>
                        <tr>
                            <td>1</td>
                            <td className='nameTable'>Carlos Peres Acosta</td>
                            <td>11203753</td>
                            <td>TAC-Torax</td>
                            <td>7:00 </td>
                            <td>05-27-2022</td>
                            <td className='iconarChive'><i class="fas fa-file-archive"></i></td>


                        </tr>
                        <tr>
                            <td>2</td>
                            <td className='nameTable'>Andrea Lopez</td>
                            <td>Alopez@colsalud.com</td>
                            <td>315786245</td>
                            <td>7:40</td>
                            <td>05-27-2022</td>
                            <td className='iconarChive'><i class="fas fa-file-archive"></i></td>


                        </tr>
                        <tr>
                            <td>3</td>
                            <td className='nameTable'>Jhon Jairo Medina</td>
                            <td>JMedina@rxdiagnostic.com</td>
                            <td>300956548</td>
                            <td>8:40</td>
                            <td>05-27-2022</td>
                            <td className='iconarChive'><i class="fas fa-file-archive"></i></td>


                        </tr>

                    </tbody>
                </table>
            </div>

            <Footer />
        </>
    )
}

export default QuotesDay
