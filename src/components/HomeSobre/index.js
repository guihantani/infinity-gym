import { useEffect } from "react";
import BotaoInscrever from "../BotaoInscrever";
import styles from "./HomeSobre.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HomeSobre(){

    useEffect(() =>{
        let mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.set((`.${styles.homeSobre__texto} h1`), {xPercent: 0})
            gsap.set((`.${styles.homeSobre__texto} h3`), {xPercent: 0})
            gsap.set((`.${styles.botao}`), {yPercent: 0})

            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: (`.${styles.homeSobre__conteudo}`),
                    start: 'top 100%'
                }
            })

            let tlText = gsap.timeline({
                scrollTrigger:{
                    trigger: (`.${styles.homeSobre__conteudo}`),
                    start: 'top 85%',
                    end: 'bottom 60%'
                }
            })

            tl.fromTo((`.${styles.imagemContainer} img`),{scale: 2}, {scale: 1, duration: 2, ease: "power4.out"})

            tlText.fromTo((`.${styles.homeSobre__texto} h1`),{opacity: 0, x:'-30%'}, {opacity: 1, x:'0%'})
            tlText.fromTo((`.${styles.homeSobre__texto} h3`),{opacity: 0, x:'-30%'}, {opacity: 1, x:'0%'})
            tlText.fromTo((`.${styles.botao}`),{opacity: 0, y:'30%'}, {opacity: 1, y:'0%'})
        });
    })

    return(
        <section className={styles.homeSobre}>
            <div className={styles.homeSobre__conteudo}>
                <div className={styles.homeSobre__esquerda}>
                    <div className={styles.homeSobre__texto}>
                        <h1>Olá! Somos uma academia de alto nível localizada em <span style={{color: 'var(--vermelho)'}}>Lorem, Ipsum</span>.</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor, placerat tincidunt nulla. Sed varius at quam a egestas.</h3>
                    </div>
                    <div className={styles.botao}>
                        <BotaoInscrever targetPage={'/sobre'}>Saiba mais sobre</BotaoInscrever>
                    </div>
                </div>
                <div className={styles.imagemContainer}>
                    <img src="/images/building.jpg"/>
                </div>
            </div>
        </section>
    )
}

export default HomeSobre;