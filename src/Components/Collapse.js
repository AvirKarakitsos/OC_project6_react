import styles from "../assets/styles/About.module.scss"

function Collapse() {
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
        table.map(inputValue => {
            return (
                <div key={inputValue.id} className={styles.collapse__bar}>
                    <div className={styles.collapse__bar__title}>
                        <p>{inputValue.title}</p>
                        <span><i className="fa-solid fa-chevron-up"></i></span>
                    </div>
                    <div className={styles.collapse__bar__content}>
                        <p>{inputValue.content}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Collapse