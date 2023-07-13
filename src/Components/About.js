import Footer from "./Footer";
import Header from "./Header";
import image from "../assets/images/image-source-2.png"
import styles from "../assets/styles/About.module.scss"

function About() {
    return (
        <>
        <Header/>
        <main>
            <div className={styles.container}>
                <div className={styles.background}>
                    <img className={styles.background__image} src={image} alt="paysage"/>
                </div>
                <section className={styles.collapse}>
                    <div className={styles.collapse__bar}>
                        <div className={styles.collapse__bar__title}>
                            <p>Fiabilité</p>
                            <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div className={styles.collapse__bar__content}>
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                        </div>
                    </div>
                    <div className={styles.collapse__bar}>
                        <div className={styles.collapse__bar__title}>
                            <p>Respect</p>
                            <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div className={styles.collapse__bar__content}>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                    <div className={styles.collapse__bar}>
                        <div className={styles.collapse__bar__title}>
                            <p>Service</p>
                            <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div className={styles.collapse__bar__content}>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                    <div className={styles.collapse__bar}>
                        <div className={styles.collapse__bar__title}>
                            <p>Sécurité</p>
                            <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div className={styles.collapse__bar__content}>
                            <p>La sécurité est la priorité de Kasa.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default About