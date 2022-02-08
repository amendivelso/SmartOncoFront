import React from 'react';
import BtnClose from '../btn/BtnClose';
import BtnNuevo from '../btn/BtnNuevo';
import BtnSave from '../btn/BtnSave';

const NewRole = () => {
    return <>
        <div className='containerNewRole'>

            <h1>Nuevo Rol</h1>

            <BtnNuevo />

            <div className='containerNomInput'>
                <label for="fname">Nombres</label>
                <input type="text"></input>
            </div>

            <div className='containerCheckboxText'>
                <div className='CheckboxText'><input type="checkbox"></input> <p>Histria Clínica</p></div>
                <div className='CheckboxText'><input type="checkbox"></input> <p>Agendar cita espedialista</p></div>
                <div className='CheckboxText' ><input type="checkbox"></input> <p>Agendar cita  proveedor</p></div>
                <div className='CheckboxText'><input type="checkbox"></input> <p>Agendar cita  proveedor</p></div>
            </div>

        </div>

        <div className='containerBtnCloseBtnSave'>

            <BtnClose />
            <BtnSave />

        </div>

    </>
};

export default NewRole;
