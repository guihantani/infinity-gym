import PrincipioCard from '../PrincipioCard'
import styles from './SobrePrincipios.module.css'

function SobrePrincipios(){
    return(
        <section className={styles.sobrePrincipios}>
            <div className={styles.sobrePrincipios__container}>
                <h1>Nossos<br></br>princípios</h1>
                <div className={styles.sobrePrincipios__principios}>
                    <PrincipioCard titulo={'Saúde'} texto={'Lorem ipsum dolor sit amet, consectetur adipiscingol elit. adipiscing amet, aliquet orci tellus lorem ip.'} icone={'/svgs/health.svg'}/>
                    <PrincipioCard titulo={'Evolução'} texto={'Lorem ipsum dolor sit amet, consectetur adipiscingol elit. adipiscing amet, aliquet orci tellus lorem ip.'} icone={'/svgs/evolution.svg'}/>
                    <PrincipioCard titulo={'Comunidade'} texto={'Lorem ipsum dolor sit amet, consectetur adipiscingol elit. adipiscing amet, aliquet orci tellus lorem ip.'} icone={'/svgs/community.svg'}/>
                    <PrincipioCard titulo={'Respeito'} texto={'Lorem ipsum dolor sit amet, consectetur adipiscingol elit. adipiscing amet, aliquet orci tellus lorem ip.'} icone={'/svgs/handshake.svg'}/>
                </div>
            </div>
        </section>
    )
}

export default SobrePrincipios