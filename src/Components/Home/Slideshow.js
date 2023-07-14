import { useState } from 'react'
import styles from '../../assets/styles/Slideshow.module.scss'

function Slideshow({images}) {
    let numberImages = images.length
    const [counter, setCounter] = useState(1)

    function handleNext() {
        counter < numberImages ? setCounter(counter + 1) : setCounter(1)
    }
    function handlePrevious() {
        counter !== 1 ? setCounter(counter - 1) : setCounter(numberImages)
    }

    return (
    <div className={styles.slideContainer}>
        {images.map((image,index) => index === 0 ? <img height={415} src={image} className={styles.images+" "+styles.active} alt="photos appartements" key={index}/> : <img height={415} src={image} className={styles.images} alt="photos appartements" key={index}/>)}
        <button onClick={handlePrevious} className={styles.btn+" "+styles.previous}><i className="fa-solid fa-chevron-left icon"></i></button>
        <button onClick={handleNext} className={styles.btn+" "+styles.next}><i className="fa-solid fa-chevron-right icon"></i></button>
        <div className={styles.slide}>{counter+"/"+numberImages}</div>
    </div>
    )
}

export default Slideshow