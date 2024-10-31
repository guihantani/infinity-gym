import CardFuncionario from '../CardFuncionario'
import styles from './EquipeLista.module.css'
import equipe from '../../equipe.json'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function EquipeLista(){

    useEffect(() =>{
        let mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.registerPlugin(ScrollTrigger);


            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: (`.${styles.gatilho}`),
                    start: 'top 60%'
                }
            })
            
            tl.fromTo((`.${styles.equipeLista}`),{opacity: 0, y:'100%'}, {opacity: 1, y:'0%', duration: 1, ease: "back.out(1.4)"})
        });
    })


    return(
        <>
            <div className={styles.gatilho}></div>
            <section className={styles.equipeLista}>
                {equipe['equipe'].map((funcionario =>
                        <CardFuncionario key={funcionario['nome']} imagem={funcionario['imagem']} nome={funcionario['nome']} funcao={funcionario['funcao']}/>
                ))}
            </section>
        </>
    )
}

export default EquipeLista