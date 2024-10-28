import Banner from "../../components/Banner";
import Carrosel from "../../components/Carrosel";
import HomeEquipe from "../../components/HomeEquipe";
import HomeInscreva from "../../components/HomeInscreva";
import HomeSobre from "../../components/HomeSobre";
import styles from './Home.module.css'

function Home(){
    return(
        <>
            <Banner/>
            <div className={styles.padding}></div>
            <HomeSobre/>
            <HomeInscreva/>
            <Carrosel/>
            <HomeEquipe/>
        </>
    )
}

export default Home;