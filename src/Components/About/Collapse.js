import styles from "../../assets/styles/About.module.scss"

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
    function handleShow(id) {
        let arrow = document.querySelector(`.arrow${id}`)
        let content = document.querySelector(`.content${id}`)
        
        arrow.classList.toggle("rotate")   
        
        if (arrow.classList.contains("rotate")) {
            arrow.style.transform = "rotate(-180deg)" 
            arrow.style.transition = "transform 1000ms" 
            content.style.transform = "translateY(0)" 
            content.style.height = "80px"
            content.style.transition = "all 1000ms"
        } else {
            arrow.style.transform = "rotate(0deg)" 
            arrow.style.transition = "transform 1000ms"
            content.style.transform = "translateY(-52px)"
            content.style.height = "0" 
            content.style.transition = "all 1000ms"
        }
    }

    return (
        table.map(inputValue => {
            return (
                <div key={inputValue.id} className={styles.collapse__bar}>
                    <div className={styles.collapse__bar__title}>
                        <p>{inputValue.title}</p>
                        <span><i className={"arrow"+inputValue.id+" fa-solid fa-chevron-up"} onClick={() => handleShow(inputValue.id)}></i></span>
                    </div>
                    <div className={"content"+inputValue.id+" "+styles.collapse__bar__content}>
                        <p>{inputValue.content}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Collapse