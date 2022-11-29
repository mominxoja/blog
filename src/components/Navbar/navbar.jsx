import React from 'react';
import styles from './navbar.module.scss'
import style from '../../../src/App.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <h1 className={styles.Navbar__logo}>LOGO</h1>
          <ul className={styles.Navbar__nav}>
            <NavLink className={active =>active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive } to='/' >Home</NavLink>
            <NavLink className={active =>active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive } to='/about' >About</NavLink>
            <NavLink className={active =>active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive } to='/blog' >Blog</NavLink>
            <NavLink className={active =>active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive } to='/projects' >Projects</NavLink>
            <NavLink className={active =>active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive } to='/service' >Service</NavLink>
          </ul>

        </div>
    );
}

export default Navbar;
