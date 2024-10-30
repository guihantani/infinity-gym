import styles from './EquipeBanner.module.css'

function EquipeBanner(){
    return(
        <section className={styles.equipeBanner}>
            <div className={styles.equipeBanner__conteudo}>
                <h1>Equipe</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor</h3>
            </div>
            <img src='images/equipeBanner.jpg'/>
        </section>
    )
}

export default EquipeBanner