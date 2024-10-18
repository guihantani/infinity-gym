import Banner from "../../components/Banner";
import styles from './Home.module.css'

function Home(){
    return(
        <>
            <Banner/>
            <div className={styles.padding}></div>
        </>
    )
}

export default Home;