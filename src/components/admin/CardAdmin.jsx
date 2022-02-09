import React from 'react'
import { Link } from 'react-router-dom'


const CardAdmin = () => {
    return (
        <div className='containerCardAdmin'>

            <div className='cardPaccientes'>
                <i className="fas fa-user"></i>
                <div className='numText'><Link to='#'>36</Link>
                    <h4>Pacientes</h4>
                </div>
            </div>

            <div className='cardCitas'>
                <i className="fas fa-file-alt"></i>
                <div className='numText'><Link to='#'>15</Link>
                    <h4>Citas del día</h4>
                </div>
            </div>

            <div className='cardTotalCitas'>
                <i className="fas fa-copy"></i>
                <div className='numText'><Link to='#'>48</Link>
                    <h4>Total citas</h4>
                </div>

            </div>


        </div>
    )
}

export default CardAdmin
