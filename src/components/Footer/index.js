import './styles.css';
import Logo from '../../assets/logo.svg';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';

function Footer() {
    return (
        <footer>
            <div className='left-footer'>
                <div className='container-address'>
                    <strong>Endereço</strong>
                    <span>Rua Cubos, 10</span>
                    <span>Jardim Academia</span>
                    <span>Salvador - Bahia - CEP: 41820-021</span>
                </div>
                <div className='container-social'>
                    <img src={FacebookIcon} alt="Facebook Icon" />
                    <img src={InstagramIcon} alt="Instagram Icon" />
                </div>
            </div>
            <div className='vertical-line'></div>
            <div className='right-footer'>
                <img src={Logo} alt="Logo Footer" />
            </div>
        </footer>
    )
}

export default Footer;