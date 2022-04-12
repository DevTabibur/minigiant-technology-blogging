import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';
import HeaderTop from './Header Top/HeaderTop';

const Header = () => {
    return (
        <>
        <HeaderTop/>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
        </>
    );
};

export default Header;