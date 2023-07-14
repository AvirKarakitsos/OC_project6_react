import styles from '../../assets/styles/Slideshow.module.scss'

function Slideshow({images}) {
    let numberImages = images.length

    return (
    <div className={styles.slideContainer}>
        {images.map((image,index) => index === 0 ? <img height={415} src={image} className={styles.images+" "+styles.active} alt="photos appartements" key={index}/> : <img height={415} src={image} className={styles.images} alt="photos appartements" key={index}/>)}
        <button className={styles.btn+" "+styles.previous}><i className="fa-solid fa-chevron-left icon"></i></button>
        <button className={styles.btn+" "+styles.next}><i className="fa-solid fa-chevron-right icon"></i></button>
        <div className={styles.slide}>{"/"+numberImages}</div>
    </div>
    )
}

export default Slideshow