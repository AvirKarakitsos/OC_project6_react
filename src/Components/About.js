import Footer from "./Footer";
import Header from "./Header";
import image from "../assets/images/image-source-2.png"
function About() {
    return (
        <>
        <Header/>
        <main>
            <div className="container">
                <img className="container_image" src={image} alt="paysage"/>
                <section className="all">
                    <div className="all__bar">
                        <div>
                            <p>Fiabilité</p>
                            <span><i class="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                        </div>
                    </div>
                    <div className="all__bar">
                        <div>
                            <p>Respect</p>
                            <span><i class="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                    <div className="all__bar">
                        <div>
                            <p>Service</p>
                            <span><i class="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </div>
                    </div>
                    <div className="all__bar">
                        <div>
                            <p>Sécurité</p>
                            <span><i class="fa-solid fa-chevron-up"></i></span>
                        </div>
                        <div>
                            <p>La sécurité est la priorité de Kasa.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default About