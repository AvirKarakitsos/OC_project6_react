import logo from '../../assets/images/logo-dark.png'
import styles from '../../assets/styles/Footer.module.scss'

function Footer() {
    return(
        <footer className={styles.footer}>
            <img width={122} src={logo} alt='logo'/>
            <p>&copy; 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer