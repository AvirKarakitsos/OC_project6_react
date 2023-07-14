import { useState } from 'react'
import styles from '../../assets/styles/Slideshow.module.scss'

function Slideshow({images}) {
    let numberImages = images.length
    const [counter, setCounter] = useState(1)

    function handleNext() {
        let actual
        let next

        if(counter < numberImages) {
            actual = document.getElementById(`image${counter-1}`)
            next= document.getElementById(`image${counter}`)
            
            actual.classList.remove("Slideshow_active__exnB9")
            next.classList.add("Slideshow_active__exnB9")

            setCounter(counter + 1)
        } else {
            actual = document.getElementById(`image${counter-1}`)
            next= document.getElementById(`image${0}`)

            actual.classList.remove("Slideshow_active__exnB9")
            next.classList.add("Slideshow_active__exnB9")

            setCounter(1)
        }
        
    }
    function handlePrevious() {
        let actual
        let next

        if(counter !== 1) {
            actual = document.getElementById(`image${counter-1}`)
            next= document.getElementById(`image${counter-2}`)
            
            actual.classList.remove("Slideshow_active__exnB9")
            next.classList.add("Slideshow_active__exnB9")

            setCounter(counter - 1)
        } else {
            actual = document.getElementById(`image${counter-1}`)
            next= document.getElementById(`image${numberImages-1}`)
            
            actual.classList.remove("Slideshow_active__exnB9")
            next.classList.add("Slideshow_active__exnB9")

            setCounter(numberImages)
        }
    }

    return (
        <div className={styles.slideContainer}>
            {images.map((image,index) => index === 0 ? <img height={415} src={image} id={"image"+index} className={styles.images+" "+styles.active} alt="photos appartements" key={index}/> : <img height={415} src={image} id={"image"+index} className={styles.images} alt="photos appartements" key={index}/>)}
            {numberImages !== 1 ? 
                <><button onClick={handlePrevious} className={styles.btn+" "+styles.previous}><i className="fa-solid fa-chevron-left icon"></i></button>
                <button onClick={handleNext} className={styles.btn+" "+styles.next}><i className="fa-solid fa-chevron-right icon"></i></button>
                <div className={styles.slide}>{counter+"/"+numberImages}</div></>
                : null
            }
        </div>
    )
}

export default Slideshow