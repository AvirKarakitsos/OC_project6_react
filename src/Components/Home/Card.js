import { useEffect, useState } from 'react'
import jsonFile from '../../assets/api/logements.json'

function Card() {
    const [data, setData] = useState([])
    useEffect(() => {
        let table = jsonFile.slice(0,6)
        setData(table)
    },[])

    return (
        data.map((inputValue => {
            return(
                <article className='gallery__container__articles' key={inputValue.id}>
                    <img className='gallery__container__articles__image' src={inputValue.cover} alt="logement"/>
                    <h2 className='gallery__container__articles__title'>{inputValue.title}</h2>
                </article>    
            )
        }))
    )
}

export default Card