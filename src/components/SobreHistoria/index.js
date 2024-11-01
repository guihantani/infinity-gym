import styles from './SobreHistoria.module.css'

function SobreHistoria(){
    return(
        <section className={styles.sobreHistoria}>
            <div className={styles.sobreHistoria__conteudo}>
                <div className={styles.sobreHistoria__texto}>
                    <h1>Nossa <span style={{color: 'var(--vermelho)'}}>História</span></h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sociis morbi sed sagittis consectetur in quisque placerat enim. Vitae, lacus eros egestas suspendisse natoque consequat. Tellus enim eros diam sit leo blandit libero ut morbi. Convallis iaculis nam.</h3>
                </div>
                <img src="/images/sobre1.jpg" width={'450px'}/>
            </div>
        </section>
    )
}

export default SobreHistoria