import CardPlano from '../../components/CardPlano';
import styles from './Planos.module.css';
import BannerGeral from '../../components/BannerGeral';

function Planos(){
    const beneficiosBasicos = ['Academia disponível 24h', 'Avaliação Física']
    const beneficiosPremium = ['Academia disponível 24h', 'Avaliação Física', 'Personal Trainer']
    const beneficiosInfinity = ['Academia disponível 24h', 'Avaliação Física', 'Personal Trainer', 'Nutricionista']

    return(
        <section className={styles.planos}>
            <BannerGeral titulo={'Planos'} texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor'} imagem={'/images/planos.jpg'}/>
            <div className={styles.planos__container}>
                <CardPlano nomePlano='Plano Básico' precoPlano='R$ 79,99' descricaoPlano='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' beneficios={beneficiosBasicos}/>
                <CardPlano nomePlano='Plano Premium' precoPlano='R$ 109,99' descricaoPlano='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' beneficios={beneficiosPremium} destaque/>
                <CardPlano nomePlano='Plano Infinity' precoPlano='R$ 179,99' descricaoPlano='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' beneficios={beneficiosInfinity}/>
            </div>
        </section>
    )
}

export default Planos;