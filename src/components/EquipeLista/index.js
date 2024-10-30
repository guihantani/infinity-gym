import CardFuncionario from '../CardFuncionario'
import styles from './EquipeLista.module.css'
import equipe from '../../equipe.json'

function EquipeLista(){
    return(
        <section className={styles.equipeLista}>
            {equipe['equipe'].map((funcionario =>
                    <CardFuncionario key={funcionario['nome']} imagem={funcionario['imagem']} nome={funcionario['nome']} funcao={funcionario['funcao']}/>
            ))}
        </section>
    )
}

export default EquipeLista