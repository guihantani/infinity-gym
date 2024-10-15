import styles from './Banner.module.css'
import SubscribeButton from '../SubscribeButton'

function Banner(){
    return(
        <section className={styles.banner}>
            <video autoPlay muted loop>
                <source src='/videos/gym-video.webm' type='video/webm'/>
            </video>
            <div className={styles.banner__content}>
                <h1>Infinity Gym</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor, placerat tincidunt nulla. Sed varius at quam a egestas.</h2>
                <SubscribeButton targetPage={'/planos'}>Se Inscreva Agora</SubscribeButton>
            </div>
        </section>
    )
}

export default Banner