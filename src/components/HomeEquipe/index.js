import gsap from 'gsap';
import BotaoInscrever from '../BotaoInscrever'
import styles from './HomeEquipe.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function HomeEquipe(){

    useEffect(() =>{
        let mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.registerPlugin(ScrollTrigger);

            let tlText = gsap.timeline({
                scrollTrigger:{
                    trigger: (`.${styles.homeEquipe__conteudo}`),
                    start: 'top 85%',
                    end: 'bottom 60%'
                }
            })

            tlText.fromTo((`.${styles.homeEquipe__texto} h1`),{opacity: 0, scale: 2}, {opacity: 1, scale: 1})
            tlText.fromTo((`.${styles.homeEquipe__texto} h3`),{opacity: 0, y:'100%'}, {opacity: 1, y:'0%'})
            tlText.fromTo((`.${styles.homeEquipe__texto} div`),{opacity: 0, y:'100%'}, {opacity: 1, y:'0%'})
        });
    })

    return(
        <section className={styles.homeEquipe}>
            <div className={styles.homeEquipe__conteudo}>
                <div className={styles.homeEquipe__texto}>
                    <h1>Nosso Time Está preparado para receber você</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor</h3>
                    <div>
                        <BotaoInscrever targetPage={'/equipe'}>Conheça Nossa Equipe</BotaoInscrever>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeEquipe