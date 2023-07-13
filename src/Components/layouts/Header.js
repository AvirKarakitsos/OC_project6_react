import { Link } from 'react-router-dom'
import '../../assets/styles/Header.scss'
import logo from '../../assets/images/logo-light.png'

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo'/>
            <nav className='header__navbar'>
                <ul className='header__navbar__list'>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='about'>A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header