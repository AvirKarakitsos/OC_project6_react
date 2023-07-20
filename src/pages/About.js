import image from "../../assets/images/image-source-2.png"
import styles from "../../assets/styles/About.module.scss"
import Collapse from "./Collapse"
import Layout from "../layouts/Layout"

function About() {
    const table = [
        {
            id: 0,
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            id: 1,
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: 2,
            title: "Service",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: 3,
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa."
        }
    ]

    return (
        <Layout>
            <main>
                <div className={styles.container}>
                    <div className={styles.background}>
                        <img className={styles.background__image} src={image} alt="paysage"/>
                    </div>
                    <section className={styles.collapse}>
                    {table.map(inputValue => <Collapse inputValue={inputValue}  key={inputValue.id}/>)}
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export default About