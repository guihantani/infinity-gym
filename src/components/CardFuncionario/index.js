import styles from './CardFuncionario.module.css'

function CardFuncionario({imagem, nome, funcao}){
    return(
        <div className={styles.cardFuncionario}>
            <div className={styles.container__imagem}>
                <img src={imagem}/>
            </div>
            <div className={styles.cardFuncionario__texto}>
                <h3>{nome}</h3>
                <p>{funcao}</p>
            </div>
        </div>
    )
}

export default CardFuncionario