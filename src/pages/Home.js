import styles from '../assets/styles/Home.module.scss'
import background from '../assets/images/image-source-1.png'
import jsonFile from '../assets/api/logements.json'
import Layout from '../Components/layouts/Layout'
import Card from '../Components/Card'
import { useEffect, useState } from 'react'

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    //Calcule the viewport
    useEffect(() => {
        window.addEventListener("resize",()=> {
            setWindowWidth(window.innerWidth)
        },[])
    })

    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.background}>
                    <img className={styles.background__image} src={background} alt="paysage"/>
                    {windowWidth <= 650 ? <h1 className={styles.background__title}>Chez vous,<br/> partout et ailleurs</h1>
                    : <h1 className={styles.background__title}>Chez vous, partout et ailleurs</h1>
                    }
                </div>
                <section className={styles.gallery}>
                    <div className={styles.gallery__container}>
                        {jsonFile.map((inputValue => <Card value={inputValue} key={inputValue.id} />))}
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Home