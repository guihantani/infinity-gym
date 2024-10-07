import { NavLink  } from 'react-router-dom'
import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <img src='/images/logo.png' alt='Logo da Infinity Gym'/>
            <nav className={styles.navbar}>
                <ul>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/'} >Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/sobre'}>Sobre</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/equipe'}>Equipe</NavLink></li>
                    <li><NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/planos'}>Planos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header