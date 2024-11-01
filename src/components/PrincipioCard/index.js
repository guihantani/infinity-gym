import styles from './PrincipioCard.module.css'

function PrincipioCard({titulo, texto, icone}){
    return(
        <div className={styles.principioCard}>
            <img src={icone} width={'70px'}/>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    )
}

export default PrincipioCard