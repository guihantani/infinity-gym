import styles from './BannerGeral.module.css'

function BannerGeral({titulo, texto, imagem, legenda}){
    return(
        <section className={styles.bannerGeral}>
            <div className={styles.bannerGeral__conteudo}>
                <h1>{titulo}</h1>
                <h3>{texto}</h3>
            </div>
            <img src={imagem} alt={legenda}/>
        </section>
    )
}

export default BannerGeral