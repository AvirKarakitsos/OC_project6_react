import { useState } from 'react'
import styles from '../../assets/styles/Slideshow.module.scss'
import { useEffect } from 'react'

function Slideshow({images}) {
    let numberImages = images.length
    const [counter, setCounter] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize",()=> {
            setWindowWidth(window.innerWidth)
        },[])
    })

    function cleanList() {
        let all = document.querySelectorAll(".Slideshow_images__qkHEd")
       
        all.forEach((img) => {
            img.classList = ""
            img.classList.add("Slideshow_images__qkHEd")
        })
    }

    function handleNext() {
        let actual
        let next
        let next2

        if(counter < (numberImages -1)) {
            actual = document.getElementById(`image${counter-1}`)
            next = document.getElementById(`image${counter}`)
            next2 = document.getElementById(`image${counter+1}`)
            
            setCounter(counter + 1)
            cleanList()
        } else if(counter < numberImages) {
            actual = document.getElementById(`image${counter-1}`)
            next = document.getElementById(`image${counter}`)
            next2 = document.getElementById(`image0`)
            
            setCounter(counter + 1)
            cleanList()
        } else {
            actual = document.getElementById(`image${counter-1}`)
            next = document.getElementById(`image0`)
            next2 = document.getElementById(`image1`)
            
            setCounter(1)
            cleanList()
        }

        actual.classList.add("Slideshow_activePrevious__ODIj-")
        next.classList.add("Slideshow_active__exnB9")
        next2.classList.add("Slideshow_activeNext__ZyvFa")
    }

    function handlePrevious() {
        let actual
        let next
        let next2

        if(counter > 2) {
            actual = document.getElementById(`image${counter-1}`)
            next = document.getElementById(`image${counter-2}`)
            next2 = document.getElementById(`image${counter-3}`)
            
            setCounter(counter - 1)
            cleanList()
        } else if(counter > 1) {
            actual = document.getElementById(`image${counter-1}`)
            next = document.getElementById(`image${counter-2}`)
            next2 = document.getElementById(`image${numberImages-1}`)
            
            setCounter(counter - 1)
            cleanList()
        } else if (counter === 1 ){
            actual = document.getElementById(`image${counter-1}`)
            next = document.getElementById(`image${numberImages-1}`)
            next2 = document.getElementById(`image${numberImages-2}`)
            
            setCounter(numberImages)
            cleanList()
        }

        actual.classList.add("Slideshow_activeNext__ZyvFa")
        next.classList.add("Slideshow_active__exnB9")
        next2.classList.add("Slideshow_activePrevious__ODIj-")
    }

    return (
        <div className={styles.slideContainer}>
            <img height={415} src={images[0]} id="image0" className={styles.images+" "+styles.active} alt="photos appartements"/>
            {(numberImages > 1)  && <img height={415} src={images[1]} id="image1" className={styles.images+" "+styles.activeNext} alt="photos appartements"/>}
            {images.map((image,index) => (index > 1) && (index < numberImages-1) ? <img height={415} src={image} id={"image"+index} className={styles.images} alt="photos appartements" key={index}/> : null
            )}
            {(numberImages > 2)  && <img height={415} src={images[numberImages-1]} id={`image${numberImages-1}`} className={styles.images+" "+styles.activePrevious} alt="photos appartements"/>}
            
            {numberImages !== 1 ? 
                <><button onClick={handlePrevious} className={styles.btn+" "+styles.previous}><i className="fa-solid fa-chevron-left icon"></i></button>
                <button onClick={handleNext} className={styles.btn+" "+styles.next}><i className="fa-solid fa-chevron-right icon"></i></button></>
                : null
            }
            {((windowWidth > 650) && (numberImages !== 1 )) ? <div className={styles.slide}>{counter+"/"+numberImages}</div> : null}
        </div>
    )
}

export default Slideshow