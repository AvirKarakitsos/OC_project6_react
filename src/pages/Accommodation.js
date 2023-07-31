import styles from '../assets/styles/Accommodation.module.scss'
import jsonFile from "../assets/api/logements.json"
import Layout from "../Components/layouts/Layout"
import Slideshow from "../Components/Slideshow"
import Collapse from "../Components/Collapse"
import { Navigate, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

function Accommodation() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const param = useParams()
    const dataArray = jsonFile.filter(value => value.id === param.id)
    let data = null
    let stars = null
    let collapses = []

    //Calcule the viewport
    useEffect(() => {
        window.addEventListener("resize",()=> {
            setWindowWidth(window.innerWidth)
        })
    })

    //Test if th url is correct
    if(dataArray.length === 1) {
        data = dataArray[0] 
    } else {
        return (<Navigate to="/error"/>)
    }
   
    //Datas coming from json file
    stars = Array.from(Array(parseInt(data.rating)).keys())
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
                            {windowWidth > 650 ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="196" height="36" viewBox="0 0 196 36" fill="none">
                                <path d="M179.721 6.84366C179.473 6.32809 178.948 6 178.371 6C177.795 6 177.275 6.32809 177.022 6.84366L174.008 13.0445L167.277 14.0382C166.715 14.1225 166.246 14.5162 166.073 15.0552C165.9 15.5942 166.04 16.1895 166.443 16.5879L171.327 21.4201L170.174 28.2491C170.08 28.8115 170.315 29.3833 170.779 29.7161C171.243 30.0489 171.857 30.0911 172.363 29.8239L178.376 26.6133L184.389 29.8239C184.896 30.0911 185.51 30.0536 185.974 29.7161C186.438 29.3786 186.672 28.8115 186.578 28.2491L185.421 21.4201L190.304 16.5879C190.707 16.1895 190.853 15.5942 190.675 15.0552C190.496 14.5162 190.032 14.1225 189.47 14.0382L182.735 13.0445L179.721 6.84366Z" fill={stars.includes(4)? "#FF6060" : "#E3E3E3"}/>
                                <path d="M139.721 6.84366C139.473 6.32809 138.948 6 138.371 6C137.795 6 137.275 6.32809 137.022 6.84366L134.008 13.0445L127.277 14.0382C126.715 14.1225 126.246 14.5162 126.073 15.0552C125.9 15.5942 126.04 16.1895 126.443 16.5879L131.327 21.4201L130.174 28.2491C130.08 28.8115 130.315 29.3833 130.779 29.7161C131.243 30.0489 131.857 30.0911 132.363 29.8239L138.376 26.6133L144.389 29.8239C144.896 30.0911 145.51 30.0536 145.974 29.7161C146.438 29.3786 146.672 28.8115 146.578 28.2491L145.421 21.4201L150.304 16.5879C150.707 16.1895 150.853 15.5942 150.675 15.0552C150.496 14.5162 150.032 14.1225 149.47 14.0382L142.735 13.0445L139.721 6.84366Z" fill={stars.includes(3)? "#FF6060" : "#E3E3E3"}/>
                                <path d="M99.7212 6.84366C99.4728 6.32809 98.9479 6 98.3714 6C97.7949 6 97.2747 6.32809 97.0216 6.84366L94.0079 13.0445L87.2775 14.0382C86.7151 14.1225 86.2464 14.5162 86.0729 15.0552C85.8995 15.5942 86.0401 16.1895 86.4432 16.5879L91.327 21.4201L90.174 28.2491C90.0803 28.8115 90.3146 29.3833 90.7786 29.7161C91.2426 30.0489 91.8566 30.0911 92.3628 29.8239L98.3761 26.6133L104.389 29.8239C104.896 30.0911 105.51 30.0536 105.974 29.7161C106.438 29.3786 106.672 28.8115 106.578 28.2491L105.421 21.4201L110.304 16.5879C110.707 16.1895 110.853 15.5942 110.675 15.0552C110.496 14.5162 110.032 14.1225 109.47 14.0382L102.735 13.0445L99.7212 6.84366Z"  fill={stars.includes(2)? "#FF6060" : "#E3E3E3"}/>
                                <path d="M59.7212 6.84366C59.4728 6.32809 58.9479 6 58.3714 6C57.7949 6 57.2747 6.32809 57.0216 6.84366L54.0079 13.0445L47.2775 14.0382C46.7151 14.1225 46.2464 14.5162 46.0729 15.0552C45.8995 15.5942 46.0401 16.1895 46.4432 16.5879L51.327 21.4201L50.174 28.2491C50.0803 28.8115 50.3146 29.3833 50.7786 29.7161C51.2426 30.0489 51.8566 30.0911 52.3628 29.8239L58.3761 26.6133L64.3894 29.8239C64.8956 30.0911 65.5096 30.0536 65.9736 29.7161C66.4376 29.3786 66.6719 28.8115 66.5782 28.2491L65.4205 21.4201L70.3043 16.5879C70.7073 16.1895 70.8526 15.5942 70.6745 15.0552C70.4964 14.5162 70.0324 14.1225 69.47 14.0382L62.7349 13.0445L59.7212 6.84366Z" fill={stars.includes(1)? "#FF6060" : "#E3E3E3"}/>
                                <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" fill={stars.includes(0)? "#FF6060" : "#E3E3E3"}/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="98" height="19" viewBox="0 0 98 19" fill="none">
                            <path d="M89.4323 4.3376C89.2978 4.05833 89.0134 3.88062 88.7012 3.88062C88.3889 3.88062 88.1071 4.05833 87.97 4.3376L86.3376 7.6964L82.692 8.23462C82.3873 8.28032 82.1334 8.49358 82.0395 8.78553C81.9456 9.07749 82.0217 9.39992 82.2401 9.61572L84.8854 12.2332L84.2609 15.9322C84.2101 16.2368 84.3371 16.5466 84.5884 16.7268C84.8397 16.9071 85.1723 16.9299 85.4465 16.7852L88.7037 15.0462L91.9609 16.7852C92.2351 16.9299 92.5677 16.9096 92.819 16.7268C93.0703 16.544 93.1973 16.2368 93.1465 15.9322L92.5194 12.2332L95.1648 9.61572C95.3831 9.39992 95.4618 9.07749 95.3654 8.78553C95.2689 8.49358 95.0176 8.28032 94.7129 8.23462L91.0647 7.6964L89.4323 4.3376Z" fill={stars.includes(4)? "#FF6060" : "#E3E3E3"}/>
                            <path d="M69.4323 4.3376C69.2978 4.05833 69.0134 3.88062 68.7012 3.88062C68.3889 3.88062 68.1071 4.05833 67.97 4.3376L66.3376 7.6964L62.692 8.23462C62.3873 8.28032 62.1334 8.49358 62.0395 8.78553C61.9456 9.07749 62.0217 9.39992 62.2401 9.61572L64.8854 12.2332L64.2609 15.9322C64.2101 16.2368 64.3371 16.5466 64.5884 16.7268C64.8397 16.9071 65.1723 16.9299 65.4465 16.7852L68.7037 15.0462L71.9609 16.7852C72.2351 16.9299 72.5677 16.9096 72.819 16.7268C73.0703 16.544 73.1973 16.2368 73.1465 15.9322L72.5194 12.2332L75.1648 9.61572C75.3831 9.39992 75.4618 9.07749 75.3654 8.78553C75.2689 8.49358 75.0176 8.28032 74.7129 8.23462L71.0647 7.6964L69.4323 4.3376Z" fill={stars.includes(3)? "#FF6060" : "#E3E3E3"}/>
                            <path d="M49.4323 4.3376C49.2978 4.05833 49.0134 3.88062 48.7012 3.88062C48.3889 3.88062 48.1071 4.05833 47.97 4.3376L46.3376 7.6964L42.692 8.23462C42.3873 8.28032 42.1334 8.49358 42.0395 8.78553C41.9456 9.07749 42.0217 9.39992 42.2401 9.61572L44.8854 12.2332L44.2609 15.9322C44.2101 16.2368 44.3371 16.5466 44.5884 16.7268C44.8397 16.9071 45.1723 16.9299 45.4465 16.7852L48.7037 15.0462L51.9609 16.7852C52.2351 16.9299 52.5677 16.9096 52.819 16.7268C53.0703 16.544 53.1973 16.2368 53.1465 15.9322L52.5194 12.2332L55.1648 9.61572C55.3831 9.39992 55.4618 9.07749 55.3654 8.78553C55.2689 8.49358 55.0176 8.28032 54.7129 8.23462L51.0647 7.6964L49.4323 4.3376Z" fill={stars.includes(2)? "#FF6060" : "#E3E3E3"}/>
                            <path d="M29.4323 4.3376C29.2978 4.05833 29.0134 3.88062 28.7012 3.88062C28.3889 3.88062 28.1071 4.05833 27.97 4.3376L26.3376 7.6964L22.692 8.23462C22.3873 8.28032 22.1334 8.49358 22.0395 8.78553C21.9456 9.07749 22.0217 9.39992 22.2401 9.61572L24.8854 12.2332L24.2609 15.9322C24.2101 16.2368 24.3371 16.5466 24.5884 16.7268C24.8397 16.9071 25.1723 16.9299 25.4465 16.7852L28.7037 15.0462L31.9609 16.7852C32.2351 16.9299 32.5677 16.9096 32.819 16.7268C33.0703 16.544 33.1973 16.2368 33.1465 15.9322L32.5194 12.2332L35.1648 9.61572C35.3831 9.39992 35.4618 9.07749 35.3654 8.78553C35.2689 8.49358 35.0176 8.28032 34.7129 8.23462L31.0647 7.6964L29.4323 4.3376Z" fill={stars.includes(1)? "#FF6060" : "#E3E3E3"}/>
                            <path d="M9.43233 4.3376C9.29777 4.05833 9.01344 3.88062 8.70117 3.88062C8.38891 3.88062 8.10711 4.05833 7.97001 4.3376L6.3376 7.6964L2.69197 8.23462C2.38732 8.28032 2.13345 8.49358 2.03951 8.78553C1.94558 9.07749 2.02174 9.39992 2.24007 9.61572L4.88544 12.2332L4.26091 15.9322C4.21014 16.2368 4.33707 16.5466 4.58841 16.7268C4.83975 16.9071 5.17232 16.9299 5.4465 16.7852L8.70371 15.0462L11.9609 16.7852C12.2351 16.9299 12.5677 16.9096 12.819 16.7268C13.0703 16.544 13.1973 16.2368 13.1465 15.9322L12.5194 12.2332L15.1648 9.61572C15.3831 9.39992 15.4618 9.07749 15.3654 8.78553C15.2689 8.49358 15.0176 8.28032 14.7129 8.23462L11.0647 7.6964L9.43233 4.3376Z" fill={stars.includes(0)? "#FF6060" : "#E3E3E3"}/>
                          </svg>}
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