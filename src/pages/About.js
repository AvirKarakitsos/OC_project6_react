import image from "../assets/images/image-source-2.png"
import styles from "../assets/styles/About.module.scss"
import Layout from "../Components/layouts/Layout"
import Collapse from "../Components/Collapse"

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
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
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