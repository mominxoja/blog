import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

const Layout = () => {
    return (
        <>
            <Navbar />
            {
                <Outlet />
            }
            <Footer />
        </>
    );
}

export default Layout;
