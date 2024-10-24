import styles from './Banner.module.css'
import { Player } from '@lottiefiles/react-lottie-player';

function Banner(){
    return(
        <section className={styles.banner}>
            <video autoPlay muted loop>
                <source src='/videos/gym-video.webm' type='video/webm'/>
            </video>
            <div className={styles.banner__content}>
                <div className={styles.banner__titulo}>
                    <h1>Infinity </h1>
                    <h1 className={styles.vermelho}>Gym</h1>
                </div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor, placerat tincidunt nulla. Sed varius at quam a egestas.</h2>
            </div>
            <div className={styles.player}>
                <Player src='https://lottie.host/987dbaba-2139-4134-8ae3-126f558a44ea/KMVBlXmzJZ.json' loop autoplay style={{position: "absolute", bottom: '20px'}}/>
            </div>
        </section>
    )
}

export default Banner