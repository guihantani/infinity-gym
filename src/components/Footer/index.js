import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.conteudo__container}>
                    <img src='/images/email.svg'/>
                    <div className={styles.contato__conteudo}>
                        <h1>Contato</h1>
                        <div className={styles.contato__texto__h3}>
                            <h3>lorem@infinitygym.com</h3>
                            <h3>(12) 3456-7890</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.conteudo__container}>
                    <img src='/images/clock.svg'/>
                    <div className={styles.horario__conteudo}>
                        <h1>Horários</h1>
                        <div className={styles.horario__container}>
                            <div className={styles.horario__texto}>
                                <h3>Segunda - Sexta</h3>
                                <h3>Sábado</h3>
                                <h3>Domingo</h3>
                            </div>
                            <div className={styles.horario__numeros}>
                                <h3>6:00 - 23:00</h3>
                                <h3>8:00 - 18:00</h3>
                                <h3>8:00 - 14:00</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.conteudo__container}>
                    <img src='/images/location.svg'/>
                    <div className={styles.contato__conteudo}>
                        <h1>Localização</h1>
                        <div className={styles.contato__texto__h3}>
                            <h3>Lorem ipsum, dolor sit amet</h3>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer