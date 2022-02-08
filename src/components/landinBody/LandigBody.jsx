import React from 'react'
import Smartonco2 from '../../assets/Smartonco2.png'

const LandigBody = () => {

    return (
        <div className='containerLandinBoby'>
            <section className='containerTextInitial'>
                <div>
                    <div className='sudtitle'>
                        <h3 id='nosotros' >Acerca de nosotros</h3>
                        <div className="bar"></div>
                    </div>
                    <p>Operador en salud especializado en oncología.
                        Asegura el mejor resultado clínico</p>
                </div>

                <div>
                    <div className='sudtitle'>
                        <h3 >Nuestro Proposito</h3>
                        <div className="bar"></div>
                    </div>
                    <p>Transformar con tecnología el modelo de atención al paciente concológico, garantizando el mejor resultado clínico y reduciendo sustancialemte los costos de la prestacion del servicio</p>
                </div>

                <div>
                    <div className='sudtitle'>
                        <h3>Propuesta de valor</h3>
                        <div className="bar"></div>
                    </div>
                    <p>Solucion integral para contro de costos garantizando el mejor resultado clínico</p>
                </div>


                <div className='img'><img src={Smartonco2} alt="smartonco2" /></div>

            </section>


            <div id='gestion' className='sudtitle2'>
                <h3>Gestión Integral</h3>
                <div className="bar2"></div>
            </div>


            <section className='containericon'>

                <div className='icon'>
                    <div><i class="fas fa-user-md"></i></div>
                    <p>Implementacion de Programas de tamizaje.
                        Detección de factores de riesgos</p>
                </div>

                <div className='icon'>
                    <i className="fas fa-lungs"></i>
                    <p>Telemedicina para ampliación de cobertura
                        Uso racional de tecnologías para evitar desperdicios</p>
                </div>

                <div className='icon'>
                    <i className="fas fa-hospital"></i>
                    <p>Enfoque en calidad de vida
                        cuidado en casa
                        Racionalizacion de la hospitalización</p>
                </div>

                <div className='icon'>
                    <i className="fas fa-address-book"></i>
                    <p>Guías de tratamiento
                        Centros ambulatorios</p>
                </div>

            </section>

        </div>

    )
}

export default LandigBody
