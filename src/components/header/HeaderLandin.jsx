import React from 'react';
import BtnIngresar from '../btn/BtnIngresar'
import Logo from './Logo';
import MenuHeaderLandig from './MenuHeaderLandig'







const HeaderLandin = () => {
    return (
        <div className='headerlanding'>
            <div className='MenuLogoBtn'>
                <MenuHeaderLandig />
                <Logo />
                <BtnIngresar />
            </div>

        </div>

    );
}

export default HeaderLandin;