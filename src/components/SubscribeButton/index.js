import { NavLink } from 'react-router-dom'
import styles from './SubscribeButton.module.css'

function SubscribeButton({targetPage, children, corReversa = false, estatico = false}){
    return(
        <div className={`${styles.subscribeButton} ${corReversa ? styles.corReversa : ''} ${estatico ? styles.estatico : ''}`}>
                <NavLink to={targetPage}>{children}</NavLink>
        </div>
    )
}

export default SubscribeButton