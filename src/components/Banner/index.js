import { NavLink } from 'react-router-dom'
import styles from './Banner.module.css'

function Banner(){
    return(
        <section className={styles.banner}>
            <video autoPlay muted loop>
                <source src='/videos/gym-video.webm' type='video/webm'/>
            </video>
            <div className={styles.banner__content}>
                <h1>Infinity Gym</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor, placerat tincidunt nulla. Sed varius at quam a egestas.</h2>
                <div className={styles.banner__button}>
                    <NavLink to={'/planos'}>Se Inscreva Agora</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Banner