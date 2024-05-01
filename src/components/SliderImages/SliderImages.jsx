import styles from './SliderImages.module.css'
import leftArrow from '../../assets/icons/Icon-left-arrow.png'
import rightArrow from '../../assets/icons/Icon-right-arrow.png'

import imagesDataLocations from '../../assets/data/data_img_locations.json'

import { useState } from 'react'

const SliderImages = ({ text }) => {

    const [ currentImg, setCurrentImg ] = useState(1)
    const [ prevImg, setPrevImg ] = useState(0)
    const [ nextImg, setNextImg ] = useState(2)

    const generateImages = () => {
        const allImagesData = text.idioma === 'esp' ? imagesDataLocations.español : imagesDataLocations.english
        const copyAllImages = [...allImagesData]
        const randomImages = []
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * length.allImagesData)
            const imageRandom = copyAllImages.splice(randomIndex, 1)[0]
            randomImages.push(imageRandom)
        }
        return randomImages
    }   
    
    const selectedImagesData = generateImages()

    const updateImages = (index) => {
        const prevIndex = index === 0 ? (selectedImagesData.length - 1) : (index - 1)
        setPrevImg(prevIndex)
        const nextIndex = index === (selectedImagesData.length - 1) ? 0 : (index + 1)
        setNextImg(nextIndex)
    } 

    const handleNextImage = () => {
        const nextIndex = currentImg + 1 === selectedImagesData.length ? 0 : (currentImg + 1)
        setCurrentImg(nextIndex)
        updateImages(nextIndex)
    }

    const handlePreviousImage = () => {
        const previousIndex = currentImg === 0 ? (selectedImagesData.length - 1) : (currentImg - 1)
        setCurrentImg(previousIndex)
        updateImages(previousIndex)
    }
    
    return (
        <div className={styles.slider}>

            <div className={styles.banner} >

                <a onClick={handlePreviousImage} 
                className={styles.card__img}>
                    <div className={styles.image__box}>
                        <img src={`src/assets/images/locations/${selectedImagesData[prevImg].src}`} 
                        alt={selectedImagesData[currentImg].name}/>
                    </div>
                    <div className={`${styles.arrows} ${styles.arrows__left}`}>
                        <img src={leftArrow}></img>
                    </div>
                </a >

                <a className={`${styles.card__img} ${styles.card__principal}`}>
                    <div className={styles.image__box}>
                        <img src={`src/assets/images/locations/${selectedImagesData[currentImg].src}`} 
                        alt={selectedImagesData[currentImg].name}/>
                    </div>

                    <a className={styles.card__box}>
                        <h4>{selectedImagesData[currentImg].name}</h4>
                        <p>{selectedImagesData[currentImg].location} - Ecuador</p> <br/> 
                        <a>{text.idioma === 'esp' ?  "ver más locaciones" : "more locations"}</a>
                    </a>
                    
                </a >

                <a onClick={handleNextImage} 
                className={styles.card__img}>
                    <div className={styles.image__box}>
                        <img src={`src/assets/images/locations/${selectedImagesData[nextImg].src}`} 
                        alt={selectedImagesData[currentImg].name}/>  
                    </div>
                    <div className={`${styles.arrows} ${styles.arrows__right}`}>
                        <img src={rightArrow}></img>
                    </div>
                </a >

            </div>

        </div>
    )
}

export default SliderImages