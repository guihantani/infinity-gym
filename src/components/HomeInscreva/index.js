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

        let tlText = gsap.timeline({
            scrollTrigger:{
                trigger: (`.${styles.homeInscreva__conteudo}`),
                start: 'top 85%',
                end: 'bottom 60%'
            }
        })

        tl.fromTo((`.${styles.imagem2}`),{yPercent: 0}, {yPercent: -10})
        tl.fromTo((`.${styles.imagem1}`),{yPercent: 0}, {yPercent: 10}, '<')

        tlText.fromTo((`.${styles.homeInscreva__conteudo} h1`),{opacity: 0, scale: 2}, {opacity: 1, scale: 1})
        tlText.fromTo((`.${styles.homeInscreva__conteudo} h2`),{opacity: 0, y:'100%'}, {opacity: 1, y:'0%'})
        tlText.fromTo((`.${styles.homeInscreva__conteudo} div`),{opacity: 0, y:'100%'}, {opacity: 1, y:'0%'})
    })

    return(
        <section className={styles.homeInscreva}>
            <div className={styles.homeInscreva__conteudo}>
                <h1>Garanta já o plano ideal para você!</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <div>
                    <BotaoInscrever targetPage={'/planos'} corReversa>Se Inscreva Agora</BotaoInscrever>
                </div>
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