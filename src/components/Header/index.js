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
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start', {immediate: true});}} to={'/'} >Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start', {immediate: true});}} to={'/sobre'}>Sobre</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start', {immediate: true});}} to={'/equipe'}>Equipe</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} onClick={() => {lenis.scrollTo('start', {immediate: true});}} to={'/planos'}>Planos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header