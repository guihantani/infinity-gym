import { NavLink } from 'react-router-dom';
import styles from './BotaoInscrever.module.css';
import { useLenis } from 'lenis/react';


function BotaoInscrever({targetPage, children, corReversa = false, estatico = false, estilo1}){
    const lenis = useLenis(() => {});

    return(
        <div className={`${styles.botaoInscrever} ${corReversa ? styles.corReversa : ''} ${estatico ? styles.estatico : ''} ${estilo1 ? styles.estilo1 : ''}`}>
                <NavLink to={targetPage} onClick={() => {lenis.scrollTo('start', {immediate: true});}}>{children}</NavLink>
        </div>
    )
}

export default BotaoInscrever