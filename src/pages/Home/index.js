import Banner from "../../components/Banner";
import Carrosel from "../../components/Carrosel";
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
        </>
    )
}

export default Home;