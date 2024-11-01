import BannerGeral from "../../components/BannerGeral";
import Carrosel from "../../components/Carrosel";
import SobreHistoria from "../../components/SobreHistoria";
import SobrePrincipios from "../../components/SobrePrincipios";

function Sobre(){
    return(
        <>
            <BannerGeral titulo={'Sobre Nossa Academia'} texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque dignissim vulputate pellentesque id consequat fringilla non ultrices.'} imagem={'/images/sobreBanner.jpg'}/>
            <SobreHistoria/>
            <SobrePrincipios/>
            <Carrosel/>
        </>
    )
}

export default Sobre;