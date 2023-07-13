import background from '../assets/images/image-source-1.png'
import '../assets/styles/Home.scss'
import Footer from './Footer'
import Header from './Header'
import Cards from './Cards'

function Home() {
    return (
        <>
        <Header/>
        <main className='main'>
            <div className="background">
                <img className="background__image" src={background} alt="paysage"/>
                <h1 className='background__title'>Chez vous, partout et ailleurs</h1>
            </div>
            <section className='gallery'>
                <div className='gallery__container'>
                    <Cards/>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Home