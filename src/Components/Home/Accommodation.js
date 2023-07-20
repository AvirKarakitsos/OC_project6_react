import { Navigate, useParams } from "react-router-dom"
import Layout from "../layouts/Layout"
import Slideshow from "./Slideshow"
import styles from '../../assets/styles/Accommodation.module.scss'
import Collapse from "../About/Collapse"
import jsonFile from "../../assets/api/logements.json"


function Accommodation() {
   
    const param = useParams()
    const dataArray = jsonFile.filter(value => value.id === param.id)
    let data = null
    let stars = null
    let noStars = null
    let collapses = []

    if(dataArray.length === 1) {
        data = dataArray[0] 
    } else {
        return (<Navigate to="/error"/>)
    }
   
    stars = Array.from(Array(parseInt(data.rating)).keys())
    noStars = Array.from(Array(5-parseInt(data.rating)).keys())
    collapses = [
        {
            id: 0,
            title: "Description",
            content: data.description, 
        },
        {
            id: 1,
            title: "Equipements",
            content: data.equipments
        }
    ]

    return (
        <Layout>
            <div className={styles.container}>
                <Slideshow images={data.pictures}/>
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
                            <h2>{data.host.name.split(" ")[0]}<br/>{data.host.name.split(" ")[1]}</h2>
                            <img height={64} width={64} src={data.host.picture} alt="propriétaire"/>
                        </div>
                        <div className={styles.content__owner__rating}>
                            {stars.map((star) => <i key={star} className="fa-solid fa-star" aria-hidden="true"></i>)}
                            {noStars.map((star) => <i key={star} className={"fa-solid fa-star "+styles.noActive} aria-hidden="true"></i>)}
                        </div>
                    </section>
                </div>
                <div className={styles.collapse}>
                    {collapses.map(inputValue => <Collapse inputValue={inputValue}  key={inputValue.id}/>)}
                </div>
            </div>
        </Layout>
    )
}

export default Accommodation