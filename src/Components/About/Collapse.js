import styles from "../../assets/styles/Collapse.module.scss"

function Collapse({inputValue}) {
    
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
        <div className={styles.bar}>     
            <div className={styles.bar__title}>
                <p>{inputValue.title}</p>
                <span><i className={"arrow"+inputValue.id+" fa-solid fa-chevron-up"} onClick={() => handleShow(inputValue.id)}></i></span>
            </div>
            <div className={"content"+inputValue.id+" "+styles.bar__content}>
                <p>{Array.isArray(inputValue.content) ? "true" : "false"}</p>
            </div>
        </div>
        )
    }

export default Collapse