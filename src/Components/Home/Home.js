import background from '../../assets/images/image-source-1.png'
import '../../assets/styles/Home.scss'
import jsonFile from '../../assets/api/logements.json'
import Card from './Card'
import { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        let table = jsonFile.slice(0,6)
        setData(table)
    },[])

    return (
        <Layout>
        <main className='main'>
            <div className="background">
                <img className="background__image" src={background} alt="paysage"/>
                <h1 className='background__title'>Chez vous, partout et ailleurs</h1>
            </div>
            <section className='gallery'>
                <div className='gallery__container'>
                    {data.map((inputValue => <Card value={inputValue} key={inputValue.id} />))}
                </div>
            </section>
        </main>
        </Layout>
    )
}

export default Home