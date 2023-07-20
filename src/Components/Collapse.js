import styles from "../assets/styles/Collapse.module.scss"

function Collapse({inputValue}) {
    let number = inputValue.content.length

    function handleShow(id) {
        let arrow = document.querySelector(`.arrow${id}`)
        let content = document.querySelector(`.content${id}`)
        
        arrow.classList.toggle("rotate")   
        
        if (arrow.classList.contains("rotate")) {
            arrow.style.transform = "rotate(-180deg)" 
            arrow.style.transition = "transform 1250ms" 
            content.style.transform = "translateY(0)"; 
            ( ((number > 3) && (number < 10)) || (number > 300) ) ? content.style.height = "150px" : content.style.height = "85px"
        } else {
            arrow.style.transform = "rotate(0deg)" 
            arrow.style.transition = "transform 1250ms"
            content.style.transform = "translateY(-150px)"
            content.style.height = "0"
        }
    }

    return (
        <div className={styles.bar}>     
            <div className={styles.bar__title}>
                <p>{inputValue.title}</p>
                <span><i className={"arrow"+inputValue.id+" fa-solid fa-chevron-up"} onClick={() => handleShow(inputValue.id)}></i></span>
            </div>
            <div className={"content"+inputValue.id+" "+styles.bar__content}>
                {Array.isArray(inputValue.content) ? 
                    <ul>
                        {inputValue.content.map((equipment,index)=><li key={index}>{equipment}</li>)}
                    </ul> 
                    : <p>{inputValue.content}</p>}
            </div>
        </div>
        )
    }

export default Collapse