import { NavLink  } from 'react-router-dom';
import styles from './Header.module.css';
import { useLenis } from 'lenis/react';

function Header(){
    const lenis = useLenis(() => {});

    return(
        <header className={styles.header}>
            <img src='/images/logo.png' alt='Logo da Infinity Gym'/>
            <nav className={styles.navbar}>
                <ul>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start');}} to={'/'} >Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start');}} to={'/sobre'}>Sobre</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start');}} to={'/equipe'}>Equipe</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start');}} to={'/planos'}>Planos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header