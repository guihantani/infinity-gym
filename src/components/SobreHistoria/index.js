import gsap from 'gsap';
import styles from './SobreHistoria.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function SobreHistoria(){

    useEffect(() =>{
        let mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.registerPlugin(ScrollTrigger);

            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: (`.${styles.imagemContainer}`),
                    start: 'top 99%'
                }
            })

            let tlText = gsap.timeline({
                scrollTrigger:{
                    trigger: (`.${styles.imagemContainer}`),
                    start: 'top 85%',
                    end: 'bottom 60%'
                }
            })

            tl.fromTo((`.${styles.imagemContainer} img`),{scale: 2}, {scale: 1, duration: 2, ease: "power4.out"})

            tlText.fromTo((`.${styles.sobreHistoria__texto} h1`),{opacity: 0, x:'-30%'}, {opacity: 1, x:'0%'})
            tlText.fromTo((`.${styles.sobreHistoria__texto} h3`),{opacity: 0, x:'-30%'}, {opacity: 1, x:'0%'})
        });
    })

    return(
        <section className={styles.sobreHistoria}>
            <div className={styles.sobreHistoria__conteudo}>
                <div className={styles.sobreHistoria__texto}>
                    <h1>Nossa <span style={{color: 'var(--vermelho)'}}>História</span></h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sociis morbi sed sagittis consectetur in quisque placerat enim. Vitae, lacus eros egestas suspendisse natoque consequat. Tellus enim eros diam sit leo blandit libero ut morbi. Convallis iaculis nam.</h3>
                </div>
                <div className={styles.imagemContainer}>
                    <img src="/images/sobre1.jpg" width={'450px'} alt={'Pessoa treinando com Halter'}/>
                </div>
            </div>
        </section>
    )
}

export default SobreHistoria