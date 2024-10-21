import { NavLink } from 'react-router-dom'
import styles from './BotaoInscrever.module.css'

function BotaoInscrever({targetPage, children, corReversa = false, estatico = false, estilo1}){
    return(
        <div className={`${styles.botaoInscrever} ${corReversa ? styles.corReversa : ''} ${estatico ? styles.estatico : ''} ${estilo1 ? styles.estilo1 : ''}`}>
                <NavLink to={targetPage} onClick={() => {window.scroll(0, 0);}}>{children}</NavLink>
        </div>
    )
}

export default BotaoInscrever