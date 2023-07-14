import { Link } from "react-router-dom"

function Card({value}) {
    
    return (
        <article className='gallery__container__articles' key={value.id}>
            <Link to={"/accommodation/"+value.id}>
                <img className='gallery__container__articles__image' src={value.cover} alt="logement"/>
                <h2 className='gallery__container__articles__title'>{value.title}</h2>
            </Link>
        </article>    
    )
}

export default Card