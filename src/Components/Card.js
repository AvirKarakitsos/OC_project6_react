import { Link } from "react-router-dom"
import styles from "../assets/styles/Card.module.scss"

function Card({value}) {
    
    return (
        <article className={styles.articles} key={value.id}>
            <Link to={"/accommodation/"+value.id}>
                <img className={styles.articles__image} src={value.cover} alt="logement"/>
                <h2 className={styles.articles__title}>{value.title}</h2>
            </Link>
        </article>    
    )
}

export default Card