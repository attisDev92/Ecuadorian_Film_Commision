import styles from './LocationsButtons.module.css'

const LocationsButtons = ({ text, handleOnClickPlusImages, handleOnClickLessImages, imagesNumber, imagesData }) => {

  return (
    <div className={styles.buttons_container}>
      {
        imagesNumber < imagesData.length ? (
          <button onClick={() => handleOnClickPlusImages()}>
            {text.idioma === 'esp' ? "Ver más" : "Show more"}
          </button>
        ) : (
          null
        )
      }

      {
        imagesNumber > 20 ? (
          <button onClick={() => handleOnClickLessImages()}>
            {text.idioma === 'esp' ? "Ver menos" : "Show less"}
          </button>
        ) : (
          null
        )
      }
    </div>      
  )
}

export default LocationsButtons