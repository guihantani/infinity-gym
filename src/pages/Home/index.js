import Banner from "../../components/Banner";
import HomeInscreva from "../../components/HomeInscreva";
import styles from './Home.module.css'

function Home(){
    return(
        <>
            <Banner/>
            <div className={styles.padding}></div>
            <HomeInscreva/>
        </>
    )
}

export default Home;