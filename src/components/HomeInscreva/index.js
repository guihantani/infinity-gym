import { useLayoutEffect } from 'react'
import BotaoInscrever from '../BotaoInscrever'
import styles from './HomeInscreva.module.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function HomeInscreva(){

    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.set((`.${styles.imagem2}`), {yPercent: 0})
        gsap.set((`.${styles.imagem1}`), {yPercent: 0})
        
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: (`.${styles.wrapper__imgs}`),
                start: 'top 65%',
                end: 'bottom 60%',
                scrub: true
            }
        })

        tl.fromTo((`.${styles.imagem2}`),{yPercent: 0}, {yPercent: -10})
        tl.fromTo((`.${styles.imagem1}`),{yPercent: 0}, {yPercent: 10}, '<');
        
    })

    return(
        <section className={styles.homeInscreva}>
            <div className={styles.homeInscreva__conteudo}>
                <h1>Garanta já o plano ideal para você!</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <BotaoInscrever targetPage={'/planos'} corReversa>Se Inscreva Agora</BotaoInscrever>
            </div>
            <div className={styles.container__imgs}>
                <div className={styles.wrapper__imgs}>
                    <img className={styles.imagem2} src='/images/HomeInscreva1.jpg' width={'640px'}/>
                    <img className={styles.imagem1} src='/images/HomeInscreva2.jpg' width={'500px'}/>
                </div>
            </div>
        </section>
    )
}

export default HomeInscreva