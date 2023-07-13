import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Collapse from "./Collapse"
import image from "../../assets/images/image-source-2.png"
import styles from "../../assets/styles/About.module.scss"

function About() {
    return (
        <>
        <Header/>
        <main>
            <div className={styles.container}>
                <div className={styles.background}>
                    <img className={styles.background__image} src={image} alt="paysage"/>
                </div>
                <section className={styles.collapse}>
                    <Collapse/>
                </section>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default About