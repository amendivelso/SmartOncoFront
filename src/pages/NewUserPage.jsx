import React from 'react';
import Footer from '../components/footer/Footer';
import HeaderAdmin from '../components/header/HeaderAdmin';
import NewUser from '../components/newUser/NewUser';

const NewUserPage = () => {
    return <div>
        <HeaderAdmin/>
        <NewUser />
        <Footer />
    </div>;
};

export default NewUserPage;
