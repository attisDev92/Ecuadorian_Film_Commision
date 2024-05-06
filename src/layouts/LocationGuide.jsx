import categoriesData from '../assets/data/data_categories.json'
import imagesDataFull from '../assets/data/data_img_locations.json'

import Section from '../components/Section/Section'
import Category from '../components/Category/Category'
import LocationCard from '../components/LocationCard/LocationCard'
import LocationsButtons from '../components/LocationsButtons/LocationsButtons'

import { useState } from 'react'

import styles from './LocationGuide.module.css'

const LocationGuide = ({ text }) => {

  const [ imagesNumber, setImagesNumber ] = useState(20)

  const categories = text.idioma === 'esp' ? categoriesData.categorias_esp : categoriesData.categorias_eng
  const imagesData = text.idioma == 'esp' ? imagesDataFull.español : imagesDataFull.english
  const imagesLocations = imagesData.slice(0, imagesNumber)

  const handleOnClickPlusImages = () => {
    if (imagesNumber < imagesData.length) {
      setImagesNumber(imagesNumber + 10)
    }
  }

  const handleOnClickLessImages = () => {
    if (imagesNumber > 20) {
      setImagesNumber(imagesNumber - 10)
    }
  }


  return (
    <Section id={"locations_Guide"} text={text} title={text.LocationGuide.title}>
      
      <div className={styles.categories}>
        {
          categories.map( category => (
            <Category 
              category={category} 
              key={category.name}
            />
          )) 
        }
      </div>
      
      <div className={styles.location_cards}>
        {
          imagesLocations.map( image => (
            <LocationCard 
              image={image} 
              key={image.src}
            />
          ))
        }
      </div>

      <LocationsButtons 
        text={text} 
        handleOnClickLessImages={handleOnClickLessImages} 
        handleOnClickPlusImages={handleOnClickPlusImages} 
        imagesNumber={imagesNumber}
        imagesData={imagesData}
      />

    </Section>
  )
}

export default LocationGuide