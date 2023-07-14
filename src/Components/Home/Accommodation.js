import { useLocation } from "react-router-dom"
import Slideshow from "./Slideshow"
import styles from '../../assets/styles/Accommodation.module.scss'


function Accommodation() {
    const location = useLocation()
    const data = location.state
    const stars = Array.from(Array(parseInt(data.rating)).keys())
    const noStars = Array.from(Array(5-parseInt(data.rating)).keys())

    return (
        <div className={styles.container}>
            <Slideshow/>
            <div className={styles.content}>
                <section className={styles.content__description}>
                    <h1 className={styles.content__description__title}>{data.title}</h1>
                    <h2 className={styles.content__description__location}>{data.location}</h2>
                    <ul className={styles.content__description__tags}>
                        {data.tags.map((tag,index) => <li key={index}>{tag}</li>)}
                    </ul>
                </section>
                <section className={styles.content__owner}>
                    <div className={styles.content__owner__picture}>
                        <h2>{data.host.name}</h2>
                        <img height={64} width={64} src={data.host.picture} alt="propriétaire"/>
                    </div>
                    <div className={styles.content__owner__rating}>
                        {stars.map((star) => <i key={star} className="fa-solid fa-star" aria-hidden="true"></i>)}
                        {noStars.map((star) => <i key={star} className={"fa-solid fa-star "+styles.noActive} aria-hidden="true"></i>)}
                    </div>
                </section>
            </div>
            <div>
                <div>Description</div>
                <div>Equipement</div>
            </div>
        </div>
    )
}

export default Accommodation