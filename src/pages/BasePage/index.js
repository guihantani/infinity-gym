import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function BasePage(){
    return(
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    )
}

export default BasePage;