import { Link } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import '../assets/styles/Error.scss'

function Error() {
    return (
        <>
        <Header/>
        <div className="container">
            <p className="container__error">404</p>
            <p className="container__message">Oups! La page que vous demandez n'existe pas.</p>
            <p className="container__link"><Link to="/">Retourner sur la page d'accueil</Link></p>
        </div>
        <Footer/>
        </>
    )
}

export default Error