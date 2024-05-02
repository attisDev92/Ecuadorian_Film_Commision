import styles from './LocationCard.module.css'

const LocationCard = ({ image }) => {

  return (
    <div className={styles.card}>
      <img src={`src/assets/images/locations/${image.src}`} />
    </div>
  )
}

export default LocationCard