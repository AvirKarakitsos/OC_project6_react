import { Link } from "react-router-dom"
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import styles from '../assets/styles/Error.module.scss'

function Error() {
    return (
        <>
        <Header/>
        <div className={styles.container}>
            <p className={styles.container__error}>404</p>
            <p className={styles.container__message}>Oups! La page que vous demandez n'existe pas.</p>
            <p className={styles.container__link}><Link to="/">Retourner sur la page d'accueil</Link></p>
        </div>
        <Footer/>
        </>
    )
}

export default Error