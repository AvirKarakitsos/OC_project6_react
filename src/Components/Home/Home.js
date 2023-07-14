import background from '../../assets/images/image-source-1.png'
import '../../assets/styles/Home.scss'
//import Footer from '../layouts/Footer'
//import Header from '../layouts/Header'
import Card from './Card'

function Home() {
    return (
       
        <main className='main'>
            <div className="background">
                <img className="background__image" src={background} alt="paysage"/>
                <h1 className='background__title'>Chez vous, partout et ailleurs</h1>
            </div>
            <section className='gallery'>
                <div className='gallery__container'>
                    <Card/>
                </div>
            </section>
        </main>
    )
}

export default Home