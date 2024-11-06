import { useEffect } from 'react';
import PrincipioCard from '../PrincipioCard'
import styles from './SobrePrincipios.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function SobrePrincipios(){
    useEffect(() =>{
        let mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.registerPlugin(ScrollTrigger);

            let tlText = gsap.timeline({
                scrollTrigger:{
                    trigger: (`.${styles.sobrePrincipios__container}`),
                    start: 'top 85%',
                    end: 'bottom 60%'
                }
            })

            tlText.fromTo((`.${styles.sobrePrincipios__container} h1`),{opacity: 0, x:'-20%'}, {opacity: 1, x:'0%'})
            tlText.fromTo((`.${styles.sobrePrincipios__principios}`),{opacity: 0, y:'30%'}, {opacity: 1, y:'0%', ease: "power4.out"})
        });
    })

    return(
        <section className={styles.sobrePrincipios}>
            <div className={styles.sobrePrincipios__container}>
                <h1>Nossos<br></br><span className={styles.noFill}>princípios</span></h1>
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