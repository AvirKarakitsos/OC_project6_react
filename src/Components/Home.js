import { useEffect, useState } from 'react'
import background from '../assets/images/image-source-1.png'
import '../assets/styles/Home.scss'
import Footer from './Footer'
import Header from './Header'
import jsonFile from '../assets/api/logements.json'


function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        let table = jsonFile.slice(0,6)
        setData(table)
    },[])

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
                    {data.map((inputValue => {
                        return(
                            <article className='gallery__container__articles' key={inputValue.id}>
                                <img className='gallery__container__articles__image' src={inputValue.cover} alt="logement"/>
                                <h2 className='gallery__container__articles__title'>{inputValue.title}</h2>
                            </article>    
                        )
                    }))}
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Home