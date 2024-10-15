import CardPlano from '../../components/CardPlano';
import styles from './Planos.module.css'

function Planos(){
    const beneficiosBasicos = ['Academia disponível 24h', 'Avaliação Física']

    return(
        <section className={styles.planos}>
            <div className={styles.planos__texto}>
                <h1>Planos</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor, placerat tincidunt nulla. Sed varius at quam a egestas.</h2>
            </div>
            <div className={styles.planos__container}>
                <CardPlano nomePlano='Plano Básico' precoPlano='R$ 79,99' descricaoPlano='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' beneficios={beneficiosBasicos}/>
            </div>
        </section>
    )
}

export default Planos;