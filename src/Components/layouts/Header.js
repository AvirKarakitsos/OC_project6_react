import { Link, useLocation } from 'react-router-dom'
import '../../assets/styles/Header.scss'
import logo from '../../assets/images/logo-light.png'
import { useEffect, useState } from 'react'

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [home, setHome] = useState("")
    const [about, setAbout] = useState("")
    const location = useLocation()

    useEffect(() => {
        window.addEventListener("resize",()=> {
            setWindowWidth(window.innerWidth)
        })
        if(windowWidth <= 650) {
            setHome("ACCUEIL")
            setAbout("A PROPOS")
        } else {
            setHome("Accueil")
            setAbout("A propos")
        }

    },[location.pathname,windowWidth])
    
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo'/>
            <nav className='header__navbar'>
                {location.pathname === "/"
                && <ul className='header__navbar__list'>
                     <li>{home}</li>
                     <li><Link to='/about'>{about}</Link></li>
                </ul>
                }
                {location.pathname === "/about"
                && <ul className='header__navbar__list'>
                     <li><Link to='/'>{home}</Link></li>
                     <li>{about}</li>
                </ul>
                }
                {location.pathname !== "/" && location.pathname !== "/about"
                && <ul className='header__navbar__list'>
                     <li><Link className='link' to='/'>{home}</Link></li>
                     <li><Link className='link' to='/about'>{about}</Link></li>
                </ul>
                }

            </nav>
        </header>
    )
}

export default Header