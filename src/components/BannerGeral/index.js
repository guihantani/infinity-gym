import styles from './BannerGeral.module.css'

function BannerGeral({titulo, texto, imagem}){
    return(
        <section className={styles.bannerGeral}>
            <div className={styles.bannerGeral__conteudo}>
                <h1>{titulo}</h1>
                <h3>{texto}</h3>
            </div>
            <img src={imagem}/>
        </section>
    )
}

export default BannerGeral