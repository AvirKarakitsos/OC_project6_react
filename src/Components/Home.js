import background from '../assets/images/image-source-1.png'
import '../assets/styles/Home.scss'
import Footer from './Footer'
import Header from './Header'


function Home() {
    return (
        <>
        <Header/>
        <main className='main'>
            <div className="background">
                <img className="background__image" src={background} alt="paysage"/>
                <h1 className='background__title'>Chez vous, partout et ailleurs</h1>
            </div>
            <section>
                <div className='container'>
                    <article>
                        <img src="#" alt="logement"/>
                        <h2>Titre logement</h2>
                    </article>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Home