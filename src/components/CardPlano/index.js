import BotaoInscrever from '../BotaoInscrever'
import styles from './CardPlano.module.css'

function CardPlano({nomePlano, precoPlano, descricaoPlano, destaque = false, beneficios}){
    return(
        <div className={`${styles.cardPlano} ${destaque ? styles.destaque : ''}`}>
            <div className={styles.cardPlano__texto}>
                <p>{nomePlano}</p>
                <h2>{precoPlano}</h2>
                <p>{descricaoPlano}</p>
            </div>
            <span></span>
            <div className={styles.container__beneficios}>
                {beneficios.map((beneficio =>
                    <div className={styles.cardPlano__beneficio}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
                        <p>{beneficio}</p>
                    </div>
                ))}
            </div>
            {destaque ?
            <BotaoInscrever targetPage={'/planos'} estatico estilo1>Se Inscreva Agora</BotaoInscrever> :
            <BotaoInscrever targetPage={'/planos'} corReversa estatico>Se Inscreva Agora</BotaoInscrever>}
        </div>
    )
}

export default CardPlano