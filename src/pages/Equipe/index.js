import BannerGeral from '../../components/BannerGeral';
import EquipeLista from '../../components/EquipeLista';
import styles from './Equipe.module.css';

function Equipe(){
    return(
        <>
            <BannerGeral titulo={'Equipe'} texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis euismod dolor'} imagem={'/images/equipeBanner.jpg'}/>
            <EquipeLista/>
        </>
    )
}

export default Equipe;