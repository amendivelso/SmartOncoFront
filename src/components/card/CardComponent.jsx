import React from 'react'
import paciente from '../../assets/Img-paciente.jpg';

function CardComponent() {
    return (
      <div className="container">
      <div className="card">
        <img src={paciente} alt="paciente" />
        <div className="card-body">
          <h4>Sobre Nosotros</h4>
          <p>Somos un operador en salud especializado en oncología, que busca asegurar el mejor
             resulatdo clínico y reduce en 30 o 40% los costos de prestacion de servicio. </p>
        </div>
      </div>
      </div>
        
    )
}

export default CardComponent
