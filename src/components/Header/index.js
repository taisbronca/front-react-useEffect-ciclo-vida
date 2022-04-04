import './styles.css';
import Logo from '../../assets/logo.svg'

function Header() {
    return (
        <header>
            <div>
                <h1>MODA MASCULINA</h1>
                <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
            </div>
            <img
                className='logo'
                src={Logo}
                alt="Logo" />
        </header>
    )
}

export default Header;