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
                <section className={styles.all}>
                    <div className={styles.all__bar}>
                        <div>
                            <p>Fiabilité</p>
                            <span><i className="styles.fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                        </div>
                    </div>
                    <div className={styles.all__bar}>
                        <div>
                            <p>Respect</p>
                            <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                    <div className={styles.all__bar}>
                        <div>
                            <p>Service</p>
                            <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                    <div className={styles.all__bar}>
                        <div>
                            <p>Sécurité</p>
                            <span><i className="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
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