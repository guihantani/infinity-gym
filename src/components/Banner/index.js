import styles from './Banner.module.css'

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
        </section>
    )
}

export default Banner